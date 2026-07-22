import { MongoClient } from 'mongodb';

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

export const getDbClient = (): Promise<MongoClient> => {
  if (clientPromise) return clientPromise;

  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.warn('MONGODB_URI is missing. Database connections will fail at runtime.');
    return Promise.reject(new Error('MONGODB_URI is not defined'));
  }

  if (process.env.NODE_ENV === 'development') {
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, {});
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri, {});
    clientPromise = client.connect();
  }

  return clientPromise;
};
