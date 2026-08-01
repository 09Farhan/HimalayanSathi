/**
 * Hotel Partners Configuration
 * 
 * Instructions for adding/updating logos:
 * 1. Upload the hotel logo image (PNG/JPG/SVG) to the `/public/assets/hotels/` folder.
 * 2. Add a new entry to the `hotelPartners` array below.
 * 3. `name`: The name of the hotel (used for screen readers and alt text).
 * 4. `logoUrl`: The path to the image, starting with `/assets/hotels/`.
 * 
 * Note: The layout is designed to show 40% rounded borders on all logos automatically.
 */

export interface HotelPartner {
  id: string;
  name: string;
  logoUrl: string;
}

export const hotelPartners: HotelPartner[] = [
  {
    id: "muscatel",
    name: "Muscatel Hotels & Resorts",
    logoUrl: "/assets/hotels/muscatel.jpg", // Replace with your uploaded filename if different
  },
  {
    id: "orsino",
    name: "Orsino Hotels and Resorts",
    logoUrl: "/assets/hotels/orsino.jpg",
  },
  {
    id: "divine",
    name: "Divine Hotels & Resorts",
    logoUrl: "/assets/hotels/divine.jpg",
  },
  {
    id: "marriott",
    name: "Marriott Hotels & Resorts",
    logoUrl: "/assets/hotels/marriott.jpg",
  },
  // Add more partners here as needed to fill out the band!
];
