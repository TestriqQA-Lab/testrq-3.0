const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database setup
const dbPath = path.join(__dirname, 'newsletter.db');
const db = new sqlite3.Database(dbPath);

// Initialize database
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      interests TEXT,
      subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      is_active BOOLEAN DEFAULT 1,
      confirmation_token TEXT,
      confirmed BOOLEAN DEFAULT 1
    )
  `);
});

// Utility functions
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'newsletter-api' });
});

// Subscribe to newsletter
app.post('/api/newsletter/subscribe', (req, res) => {
  const { email, interests = [] } = req.body;

  // Validation
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const interestsJson = JSON.stringify(interests);
  const subscriptionId = uuidv4();
  const confirmationToken = uuidv4();

  // Check if email already exists
  db.get(
    'SELECT * FROM newsletter_subscriptions WHERE email = ?',
    [normalizedEmail],
    (err, row) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (row) {
        if (row.is_active) {
          return res.status(409).json({ error: 'Email already subscribed' });
        } else {
          // Reactivate subscription
          db.run(
            `UPDATE newsletter_subscriptions 
             SET is_active = 1, interests = ?, confirmation_token = ?, subscribed_at = CURRENT_TIMESTAMP
             WHERE email = ?`,
            [interestsJson, confirmationToken, normalizedEmail],
            function(err) {
              if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Internal server error' });
              }

              res.json({
                message: 'Successfully resubscribed to newsletter!',
                subscription: {
                  id: row.id,
                  email: normalizedEmail,
                  interests: interests,
                  subscribed_at: new Date().toISOString(),
                  is_active: true,
                  confirmed: true
                }
              });
            }
          );
        }
      } else {
        // Create new subscription
        db.run(
          `INSERT INTO newsletter_subscriptions 
           (id, email, interests, confirmation_token, confirmed, is_active)
           VALUES (?, ?, ?, ?, 1, 1)`,
          [subscriptionId, normalizedEmail, interestsJson, confirmationToken],
          function(err) {
            if (err) {
              console.error('Database error:', err);
              return res.status(500).json({ error: 'Internal server error' });
            }

            res.status(201).json({
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
        );
      }
    }
  );
});

// Unsubscribe from newsletter
app.post('/api/newsletter/unsubscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const normalizedEmail = email.toLowerCase().trim();

  db.run(
    'UPDATE newsletter_subscriptions SET is_active = 0 WHERE email = ?',
    [normalizedEmail],
    function(err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: 'Email not found' });
      }

      res.json({ message: 'Successfully unsubscribed from newsletter' });
    }
  );
});

// Get newsletter statistics
app.get('/api/newsletter/stats', (req, res) => {
  db.get(
    'SELECT COUNT(*) as total_subscribers FROM newsletter_subscriptions WHERE is_active = 1',
    (err, totalRow) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      db.get(
        'SELECT COUNT(*) as confirmed_subscribers FROM newsletter_subscriptions WHERE is_active = 1 AND confirmed = 1',
        (err, confirmedRow) => {
          if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal server error' });
          }

          // Get interest breakdown
          db.all(
            'SELECT interests FROM newsletter_subscriptions WHERE is_active = 1 AND interests IS NOT NULL',
            (err, rows) => {
              if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Internal server error' });
              }

              const interestCounts = {};
              rows.forEach(row => {
                try {
                  const interests = JSON.parse(row.interests);
                  interests.forEach(interest => {
                    interestCounts[interest] = (interestCounts[interest] || 0) + 1;
                  });
                } catch (e) {
                  // Skip invalid JSON
                }
              });

              res.json({
                total_subscribers: totalRow.total_subscribers,
                confirmed_subscribers: confirmedRow.confirmed_subscribers,
                interest_breakdown: interestCounts
              });
            }
          );
        }
      );
    }
  );
});

// Get all subscribers (admin endpoint)
app.get('/api/newsletter/subscribers', (req, res) => {
  db.all(
    'SELECT id, email, interests, subscribed_at, confirmed FROM newsletter_subscriptions WHERE is_active = 1',
    (err, rows) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      const subscribers = rows.map(row => ({
        id: row.id,
        email: row.email,
        interests: row.interests ? JSON.parse(row.interests) : [],
        subscribed_at: row.subscribed_at,
        confirmed: row.confirmed === 1
      }));

      res.json({
        count: subscribers.length,
        subscribers: subscribers
      });
    }
  );
});

// Default route
app.get('/', (req, res) => {
  res.json({
    message: 'Newsletter API Server is running!',
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
process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});

