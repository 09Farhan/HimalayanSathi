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
  // Destination Methods
  getDestinations: async (filter: any = {}): Promise<any[]> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('destinations');
      const dbDestinations = await collection.find(filter).toArray();
      
      const mappedDbDestinations = dbDestinations.map(dest => ({
        ...dest,
        id: dest._id?.toString(),
        _id: dest._id?.toString()
      }));

      // Merge with static destinations to ensure existing data is not lost
      const { destinations } = await import('@/data/destinations');
      
      // We want to combine them, but avoid duplicates if they were migrated
      const mergedDestinations: any[] = [...mappedDbDestinations];
      
      for (const staticDest of destinations) {
        if (!mergedDestinations.find(d => d.slug === staticDest.slug || d.id === staticDest.id)) {
          mergedDestinations.push(staticDest);
        }
      }

      return mergedDestinations;
    } catch (e) {
      console.error('Failed to get destinations from MongoDB', e);
      // Fallback completely to static if DB fails
      const { destinations } = await import('@/data/destinations');
      return destinations;
    }
  },

  getDestinationBySlug: async (slug: string): Promise<any | null> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('destinations');
      const dest = await collection.findOne({ slug });
      
      if (!dest) {
        // Fallback to static data
        const { destinations } = await import('@/data/destinations');
        const staticDest = destinations.find(d => d.slug === slug || d.id === slug);
        return staticDest || null;
      }
      
      return {
        ...dest,
        id: dest._id?.toString(),
        _id: dest._id?.toString()
      };
    } catch (e) {
      console.error('Failed to get destination by slug', e);
      return null;
    }
  },

  insertDestination: async (dest: any) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('destinations');
      
      const newDest = {
        ...dest,
        createdAt: new Date().toISOString()
      };
      
      const result = await collection.insertOne(newDest);
      return { success: true, id: result.insertedId.toString() };
    } catch (e) {
      console.error('Failed to insert destination', e);
      return { success: false, error: 'Failed to save destination' };
    }
  },

  updateDestination: async (id: string, updateData: any) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('destinations');
      
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      return { success: true };
    } catch (e) {
      console.error('Failed to update destination', e);
      return { success: false, error: 'Failed to update destination' };
    }
  },

  deleteDestination: async (id: string) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('destinations');
      
      await collection.deleteOne({ _id: new ObjectId(id) });
      return { success: true };
    } catch (e) {
      console.error('Failed to delete destination', e);
      return { success: false };
    }
  },

  // Package Methods
  getPackages: async (filter: any = {}): Promise<any[]> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('packages');
      const dbPackages = await collection.find(filter).toArray();
      
      const mappedDbPackages = dbPackages.map(pkg => ({
        ...pkg,
        id: pkg._id?.toString(),
        _id: pkg._id?.toString()
      }));

      // Merge with static packages to ensure existing data is not lost
      const { packages } = await import('@/data/packages');
      
      const mergedPackages: any[] = [...mappedDbPackages];
      
      for (const staticPkg of packages) {
        if (!mergedPackages.find(p => p.slug === staticPkg.slug || p.id === staticPkg.id)) {
          mergedPackages.push(staticPkg);
        }
      }

      return mergedPackages;
    } catch (e) {
      console.error('Failed to get packages from MongoDB', e);
      // Fallback completely to static if DB fails
      const { packages } = await import('@/data/packages');
      return packages;
    }
  },

  getPackageBySlug: async (slug: string): Promise<any | null> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('packages');
      const pkg = await collection.findOne({ slug });
      
      if (!pkg) {
        // Fallback to static data
        const { packages } = await import('@/data/packages');
        const staticPkg = packages.find(p => p.slug === slug || p.id === slug);
        return staticPkg || null;
      }
      
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
  },

  // Blog Methods
  getBlogs: async (filter: any = {}): Promise<any[]> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('blogs');
      const blogs = await collection.find(filter).sort({ date: -1 }).toArray();
      
      return blogs.map(blog => ({
        ...blog,
        id: blog._id?.toString(),
        _id: blog._id?.toString()
      }));
    } catch (e) {
      console.error('Failed to get blogs from MongoDB', e);
      return [];
    }
  },

  getBlogBySlug: async (slug: string): Promise<any | null> => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('blogs');
      const blog = await collection.findOne({ slug });
      
      if (!blog) return null;
      
      return {
        ...blog,
        id: blog._id?.toString(),
        _id: blog._id?.toString()
      };
    } catch (e) {
      console.error('Failed to get blog by slug', e);
      return null;
    }
  },

  insertBlog: async (blog: any) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('blogs');
      
      const newBlog = {
        ...blog,
        date: blog.date || new Date().toISOString(),
        createdAt: new Date().toISOString()
      };
      
      const result = await collection.insertOne(newBlog);
      return { success: true, id: result.insertedId.toString() };
    } catch (e) {
      console.error('Failed to insert blog', e);
      return { success: false, error: 'Failed to save blog' };
    }
  },

  updateBlog: async (id: string, updateData: any) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('blogs');
      
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      return { success: true };
    } catch (e) {
      console.error('Failed to update blog', e);
      return { success: false, error: 'Failed to update blog' };
    }
  },

  deleteBlog: async (id: string) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('blogs');
      
      await collection.deleteOne({ _id: new ObjectId(id) });
      return { success: true };
    } catch (e) {
      console.error('Failed to delete blog', e);
      return { success: false };
    }
  }
};
