/**
 * Union List Configuration
 * 
 * Instructions for adding/updating logos:
 * 1. Upload the union/association logo image (PNG/JPG/SVG) to the `/public/assets/union/` folder.
 * 2. Add a new entry to the `unionList` array below.
 * 3. `name`: The name of the union (used for screen readers and alt text).
 * 4. `logoUrl`: The path to the image, starting with `/assets/union/`.
 * 5. `website` (optional): The URL to link the logo to.
 * 
 * Note: The layout displays these in a simple center-aligned grid with a 20% border radius.
 */

export interface UnionPartner {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
}

export const unionList: UnionPartner[] = [
  {
    id: "msme",
    name: "Ministry of MSME, Govt. of India",
    logoUrl: "/assets/union/union1.jpg", 
  },
  {
    id: "ehttoa",
    name: "Eastern Himalaya Travel & Tour Operators' Association",
    logoUrl: "/assets/union/union2.jpg",
  },
  {
    id: "taab",
    name: "Travel Agents Association of Bengal",
    logoUrl: "/assets/union/union3.jpg",
  }
];
