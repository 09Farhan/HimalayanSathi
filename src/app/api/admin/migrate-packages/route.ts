import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { packages as hardcodedPackages } from '@/data/packages';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Basic auth check
    const cookieStore = await cookies();
    const authCookie = cookieStore.get('admin_auth');
    if (authCookie?.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if packages already exist to prevent duplicate seeding
    const existingPackages = await db.getPackages();
    if (existingPackages.length > 0) {
      return NextResponse.json({ 
        message: 'Database already has packages. Migration aborted to prevent duplicates.',
        count: existingPackages.length
      });
    }

    let successCount = 0;
    const errors = [];

    // Insert hardcoded packages into MongoDB
    for (const pkg of hardcodedPackages) {
      try {
        // use slug instead of id for the DB schema if needed, but the original data uses 'id' as the slug.
        const packageToInsert = {
          ...pkg,
          slug: pkg.id, // Move the old id to slug
        };
        // @ts-ignore
        delete packageToInsert.id; // Remove the hardcoded string id so MongoDB generates an ObjectId

        await db.insertPackage(packageToInsert);
        successCount++;
      } catch (err) {
        errors.push(pkg.id);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Successfully migrated ${successCount} packages.`,
      errors: errors.length > 0 ? errors : undefined
    });
    
  } catch (error) {
    return NextResponse.json({ error: 'Migration failed' }, { status: 500 });
  }
}
