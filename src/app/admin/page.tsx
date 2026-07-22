import { db } from '@/lib/db';
import AdminDashboardClient from './AdminDashboardClient';

// Ensure this page is dynamically rendered so it always fetches fresh data
export const dynamic = 'force-dynamic';

export default function AdminPage() {
  // Fetch leads on the server
  const leads = db.getLeads().sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return <AdminDashboardClient initialLeads={leads} />;
}
