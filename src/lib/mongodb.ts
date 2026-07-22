import { MongoClient } from 'mongodb';

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Use a getter function to instantiate the client lazily
// This prevents Next.js from crashing during the build phase if the env var isn't loaded yet
const getClientPromise = () => {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.warn('MONGODB_URI is missing. Database connections will fail at runtime.');
    // Return a dummy promise that rejects if someone tries to await it without a URI
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
    return globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri, {});
    return client.connect();
  }
};

clientPromise = getClientPromise();

export default clientPromise;
