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
      return { ...newLead, id: result.insertedId.toString() };
    } catch (e) {
      console.error('Failed to insert lead into MongoDB', e);
      throw e;
    }
  },

  updateLeadStatus: async (id: string, status: 'new' | 'contacted') => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('leads');
      
      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status } }
      );
      
      return result.modifiedCount > 0;
    } catch (e) {
      console.error('Failed to update lead in MongoDB', e);
      return false;
    }
  },

  deleteLead: async (id: string) => {
    try {
      const client = await getDbClient();
      const collection = client.db().collection('leads');
      
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount > 0;
    } catch (e) {
      console.error('Failed to delete lead from MongoDB', e);
      return false;
    }
  }
};
