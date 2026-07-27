import { db } from '@/lib/db';
import AdminDashboardClient from './AdminDashboardClient';
import { testimonials as staticTestimonials } from '@/data/testimonials';

// Ensure this page is dynamically rendered so it always fetches fresh data
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function AdminPage() {
  // Fetch leads and reviews on the server
  let leads = await db.getLeads();
  let reviews = await db.getReviews();

  // If the database has 0 reviews, seed it with the static dummy testimonials
  if (reviews.length === 0) {
    for (const st of staticTestimonials) {
      await db.insertReview({
        name: st.name,
        rating: st.rating,
        quote: st.quote,
        location: st.location || '',
        avatar: st.avatar || '',
        status: 'approved'
      });
    }
    // Fetch them again so they have proper MongoDB _id fields to pass to the client
    reviews = await db.getReviews();
  }
  
  leads = leads.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return <AdminDashboardClient initialLeads={leads} initialReviews={reviews} />;
}
