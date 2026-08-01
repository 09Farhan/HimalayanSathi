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
    id: "divine",
    name: "Divine Hotels & Resorts",
    logoUrl: "/assets/hotels/hotel1.jpg", 
  },
  {
    id: "muscatel",
    name: "Muscatel Hotels and Resorts",
    logoUrl: "/assets/hotels/hotel2.jpg",
  },
  {
    id: "orsino",
    name: "Orsino Hotels & Resorts",
    logoUrl: "/assets/hotels/hotel3.jpg",
  },
  {
    id: "marriott",
    name: "Marriott Hotels & Resorts",
    logoUrl: "/assets/hotels/hotel4.jpg",
  },
  {
    id: "taj",
    name: "Taj Resorts & Spa",
    logoUrl: "/assets/hotels/hotel5.jpg",
  },
  {
    id: "marriott2",
    name: "Marriott Hotels & Resorts",
    logoUrl: "/assets/hotels/hotel6.jpg",
  },
  {
    id: "mayfair",
    name: "Mayfair Spa Resort & Casino",
    logoUrl: "/assets/hotels/hotel7.jpg",
  },
  {
    id: "yashshree",
    name: "Yashshree Foundation",
    logoUrl: "/assets/hotels/hotel8.jpg",
  },
  {
    id: "summit",
    name: "Summit Hotels & Resorts",
    logoUrl: "/assets/hotels/hotel9.jpg",
  },
  {
    id: "jain",
    name: "Jain Group Hotels",
    logoUrl: "/assets/hotels/hotel10.jpg",
  },
  {
    id: "udaan",
    name: "Udaan Hotels & Resorts",
    logoUrl: "/assets/hotels/hotel11.jpg",
  },
];
