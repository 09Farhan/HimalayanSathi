import path from 'path';
import fs from 'fs';

// Ensure the data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// JSON file path
const dbPath = path.join(dataDir, 'leads.json');

export interface Lead {
  id: string;
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

// Initialize JSON database
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify([]), 'utf-8');
}

export const db = {
  getLeads: (): Lead[] => {
    try {
      const data = fs.readFileSync(dbPath, 'utf-8');
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  },
  
  insertLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'status'>) => {
    const leads = db.getLeads();
    const newLead: Lead = {
      ...lead,
      id: Date.now().toString(),
      status: 'new',
      createdAt: new Date().toISOString()
    };
    leads.push(newLead);
    fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2), 'utf-8');
    return newLead;
  },

  updateLeadStatus: (id: string, status: 'new' | 'contacted') => {
    const leads = db.getLeads();
    const index = leads.findIndex(l => l.id === id);
    if (index !== -1) {
      leads[index].status = status;
      fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2), 'utf-8');
      return true;
    }
    return false;
  },

  deleteLead: (id: string) => {
    let leads = db.getLeads();
    const initialLength = leads.length;
    leads = leads.filter(l => l.id !== id);
    
    if (leads.length !== initialLength) {
      fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2), 'utf-8');
      return true;
    }
    return false;
  }
};
