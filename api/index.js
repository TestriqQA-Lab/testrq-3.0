const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
let db;
let client;

const connectToMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    db = client.db('newsletter_db'); // Database name
    console.log('Connected to MongoDB Atlas successfully!');
    
    // Create indexes for better performance
    await db.collection('subscriptions').createIndex({ email: 1 }, { unique: true });
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Initialize MongoDB connection
connectToMongoDB();

// Utility functions
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'newsletter-api',
    database: db ? 'connected' : 'disconnected'
  });
});

// Subscribe to newsletter
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email, interests = [] } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const subscriptionId = uuidv4();
    const confirmationToken = uuidv4();

    // Check if email already exists
    const existingSubscription = await db.collection('subscriptions').findOne({ 
      email: normalizedEmail 
    });

    if (existingSubscription) {
      if (existingSubscription.is_active) {
        return res.status(409).json({ error: 'Email already subscribed' });
      } else {
        // Reactivate subscription
        const updateResult = await db.collection('subscriptions').updateOne(
          { email: normalizedEmail },
          {
            $set: {
              is_active: true,
              interests: interests,
              confirmation_token: confirmationToken,
              subscribed_at: new Date(),
              updated_at: new Date()
            }
          }
        );

        if (updateResult.modifiedCount > 0) {
          return res.json({
            message: 'Successfully resubscribed to newsletter!',
            subscription: {
              id: existingSubscription._id,
              email: normalizedEmail,
              interests: interests,
              subscribed_at: new Date().toISOString(),
              is_active: true,
              confirmed: true
            }
          });
        }
      }
    } else {
      // Create new subscription
      const newSubscription = {
        _id: subscriptionId,
        email: normalizedEmail,
        interests: interests,
        subscribed_at: new Date(),
        is_active: true,
        confirmation_token: confirmationToken,
        confirmed: true,
        created_at: new Date(),
        updated_at: new Date()
      };

      const insertResult = await db.collection('subscriptions').insertOne(newSubscription);

      if (insertResult.acknowledged) {
        return res.status(201).json({
          message: 'Successfully subscribed to newsletter!',
          subscription: {
            id: subscriptionId,
            email: normalizedEmail,
            interests: interests,
            subscribed_at: new Date().toISOString(),
            is_active: true,
            confirmed: true
          }
        });
      }
    }

    res.status(500).json({ error: 'Failed to process subscription' });

  } catch (error) {
    console.error('Subscription error:', error);
    
    // Handle duplicate key error (email already exists)
    if (error.code === 11000) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }
    
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Unsubscribe from newsletter
app.post('/api/newsletter/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const updateResult = await db.collection('subscriptions').updateOne(
      { email: normalizedEmail },
      { 
        $set: { 
          is_active: false,
          updated_at: new Date()
        } 
      }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({ error: 'Email not found' });
    }

    res.json({ message: 'Successfully unsubscribed from newsletter' });

  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get newsletter statistics
app.get('/api/newsletter/stats', async (req, res) => {
  try {
    // Get total active subscribers
    const totalSubscribers = await db.collection('subscriptions').countDocuments({ 
      is_active: true 
    });

    // Get confirmed subscribers
    const confirmedSubscribers = await db.collection('subscriptions').countDocuments({ 
      is_active: true, 
      confirmed: true 
    });

    // Get interest breakdown
    const interestPipeline = [
      { $match: { is_active: true } },
      { $unwind: '$interests' },
      { $group: { _id: '$interests', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ];

    const interestResults = await db.collection('subscriptions').aggregate(interestPipeline).toArray();
    
    const interestBreakdown = {};
    interestResults.forEach(result => {
      interestBreakdown[result._id] = result.count;
    });

    res.json({
      total_subscribers: totalSubscribers,
      confirmed_subscribers: confirmedSubscribers,
      interest_breakdown: interestBreakdown
    });

  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all subscribers (admin endpoint)
app.get('/api/newsletter/subscribers', async (req, res) => {
  try {
    const subscribers = await db.collection('subscriptions').find(
      { is_active: true },
      { 
        projection: { 
          _id: 1, 
          email: 1, 
          interests: 1, 
          subscribed_at: 1, 
          confirmed: 1 
        } 
      }
    ).toArray();

    const formattedSubscribers = subscribers.map(sub => ({
      id: sub._id,
      email: sub.email,
      interests: sub.interests || [],
      subscribed_at: sub.subscribed_at,
      confirmed: sub.confirmed
    }));

    res.json({
      count: formattedSubscribers.length,
      subscribers: formattedSubscribers
    });

  } catch (error) {
    console.error('Subscribers error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.json({
    message: 'Newsletter API Server is running with MongoDB Atlas!',
    endpoints: {
      'POST /api/newsletter/subscribe': 'Subscribe to newsletter',
      'POST /api/newsletter/unsubscribe': 'Unsubscribe from newsletter',
      'GET /api/newsletter/stats': 'Get newsletter statistics',
      'GET /api/newsletter/subscribers': 'Get all subscribers (admin)',
      'GET /health': 'Health check'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Newsletter API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API endpoints: http://localhost:${PORT}/api/newsletter/`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  if (client) {
    await client.close();
    console.log('MongoDB connection closed.');
  }
  process.exit(0);
});

