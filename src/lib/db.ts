import { getDbClient } from './mongodb';
import { ObjectId } from 'mongodb';

export interface Lead {
  _id?: ObjectId | string;
  id?: string;
  name: string;
  email: string;
  phone: string;
  destination?: string;
  travelDates?: string;
  travellers?: string;
  message?: string;
  source: string;
  status: 'new' | 'contacted';
  createdAt: string;
}

export interface Review {
  _id?: ObjectId | string;
  id?: string;
  name: string;
  rating: number;
  quote: string;
  location?: string;
  avatar?: string;
  status: 'pending' | 'approved' | 'hidden';
  createdAt: string;
}

export const db = {
  getLeads: async (): Promise<Lead[]> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection<Lead>('leads');
      const leads = await collection.find({}).sort({ createdAt: -1 }).toArray();
      
      return leads.map(lead => ({
        ...lead,
        id: lead._id?.toString(),
        _id: lead._id?.toString() // Convert ObjectId to string for client-side serialization
      }));
    } catch (e) {
      console.error('Failed to get leads from MongoDB', e);
      return [];
    }
  },
  
  insertLead: async (lead: Omit<Lead, '_id' | 'id' | 'createdAt' | 'status'>) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('leads');
      
      const newLead = {
        ...lead,
        status: 'new',
        createdAt: new Date().toISOString()
      };
      
      const result = await collection.insertOne(newLead);
      return { success: true, id: result.insertedId.toString() };
    } catch (e) {
      console.error('Failed to insert lead', e);
      return { success: false, error: 'Failed to save lead' };
    }
  },

  updateLeadStatus: async (id: string, status: 'new' | 'contacted') => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('leads');
      
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status } }
      );
      return { success: true };
    } catch (e) {
      console.error('Failed to update lead status', e);
      return { success: false };
    }
  },

  deleteLead: async (id: string) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('leads');
      
      await collection.deleteOne({ _id: new ObjectId(id) });
      return { success: true };
    } catch (e) {
      console.error('Failed to delete lead', e);
      return { success: false };
    }
  },

  // Review Methods
  getReviews: async (filter: { status?: 'approved' | 'hidden' | 'pending' } = {}): Promise<Review[]> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection<Review>('reviews');
      const reviews = await collection.find(filter).sort({ createdAt: -1 }).toArray();
      
      return reviews.map(review => ({
        ...review,
        id: review._id?.toString(),
        _id: review._id?.toString()
      }));
    } catch (e) {
      console.error('Failed to get reviews from MongoDB', e);
      return [];
    }
  },
  
  insertReview: async (review: Omit<Review, '_id' | 'id' | 'createdAt'>) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('reviews');
      
      const newReview = {
        ...review,
        createdAt: new Date().toISOString()
      };
      
      const result = await collection.insertOne(newReview);
      return { success: true, id: result.insertedId.toString() };
    } catch (e) {
      console.error('Failed to insert review', e);
      return { success: false, error: 'Failed to save review' };
    }
  },

  updateReviewStatus: async (id: string, status: 'approved' | 'hidden' | 'pending') => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('reviews');
      
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status } }
      );
      return { success: true };
    } catch (e) {
      console.error('Failed to update review status', e);
      return { success: false };
    }
  },

  deleteReview: async (id: string) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('reviews');
      
      await collection.deleteOne({ _id: new ObjectId(id) });
      return { success: true };
    } catch (e) {
      console.error('Failed to delete review', e);
      return { success: false };
    }
  },

  // Package Methods
  getPackages: async (filter: any = {}): Promise<any[]> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('packages');
      const packages = await collection.find(filter).toArray();
      
      return packages.map(pkg => ({
        ...pkg,
        id: pkg._id?.toString(),
        _id: pkg._id?.toString()
      }));
    } catch (e) {
      console.error('Failed to get packages from MongoDB', e);
      return [];
    }
  },

  getPackageBySlug: async (slug: string): Promise<any | null> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('packages');
      const pkg = await collection.findOne({ slug });
      
      if (!pkg) return null;
      
      return {
        ...pkg,
        id: pkg._id?.toString(),
        _id: pkg._id?.toString()
      };
    } catch (e) {
      console.error('Failed to get package by slug', e);
      return null;
    }
  },

  insertPackage: async (pkg: any) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('packages');
      
      const newPackage = {
        ...pkg,
        createdAt: new Date().toISOString()
      };
      
      const result = await collection.insertOne(newPackage);
      return { success: true, id: result.insertedId.toString() };
    } catch (e) {
      console.error('Failed to insert package', e);
      return { success: false, error: 'Failed to save package' };
    }
  },

  updatePackage: async (id: string, updateData: any) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('packages');
      
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      return { success: true };
    } catch (e) {
      console.error('Failed to update package', e);
      return { success: false, error: 'Failed to update package' };
    }
  },

  deletePackage: async (id: string) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('packages');
      
      await collection.deleteOne({ _id: new ObjectId(id) });
      return { success: true };
    } catch (e) {
      console.error('Failed to delete package', e);
      return { success: false };
    }
  }
};
