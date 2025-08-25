import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion, Db } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

// MongoDB connection
let client: MongoClient | null = null;
let db: Db | null = null;

const connectToMongoDB = async () => {
  if (client && db) {
    return { client, db };
  }

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
    db = client.db('newsletter_db');
    
    // Create indexes for better performance
    await db.collection('subscriptions').createIndex({ email: 1 }, { unique: true });
    
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Utility functions
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: NextRequest) {
  try {
    const { email, interests = [] } = await request.json();

    // Validation
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Connect to MongoDB
    const { db } = await connectToMongoDB();

    const normalizedEmail = email.toLowerCase().trim();
    const confirmationToken = uuidv4();

    // Check if email already exists
    const existingSubscription = await db.collection('subscriptions').findOne({ 
      email: normalizedEmail 
    });

    if (existingSubscription) {
      if (existingSubscription.is_active) {
        return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
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
          return NextResponse.json({
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
        return NextResponse.json({
          message: 'Successfully subscribed to newsletter!',
          subscription: {
            id: insertResult.insertedId,
            email: normalizedEmail,
            interests: interests,
            subscribed_at: new Date().toISOString(),
            is_active: true,
            confirmed: true
          }
        }, { status: 201 });
      }
    }

    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });

  } catch (error) {
    console.error('Subscription error:', error);
    
    // Handle duplicate key error (email already exists)
    if (error && typeof error === 'object' && 'code' in error && error.code === 11000) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
    }
    
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

