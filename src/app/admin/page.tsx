import { db } from '@/lib/db';
import AdminDashboardClient from './AdminDashboardClient';

// Ensure this page is dynamically rendered so it always fetches fresh data
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function AdminPage() {
  // Fetch leads and reviews on the server
  let leads = await db.getLeads();
  let reviews = await db.getReviews();
  
  leads = leads.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return <AdminDashboardClient initialLeads={leads} initialReviews={reviews} />;
}
