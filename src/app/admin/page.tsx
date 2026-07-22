import { db } from '@/lib/db';
import AdminDashboardClient from './AdminDashboardClient';

// Ensure this page is dynamically rendered so it always fetches fresh data
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  // Fetch leads on the server
  let leads = await db.getLeads();
  
  leads = leads.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return <AdminDashboardClient initialLeads={leads} />;
}
