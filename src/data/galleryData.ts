export type ImageCategory = "all" | "exterior" | "interior";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<ImageCategory, "all">;
}

export const galleryImages: GalleryImage[] = [
  // Cover photo first
  {
    id: 100,
    src: "/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.webp",
    alt: "Luxora Villa, a premier luxury private pool villa in Mauritius, Grand Baie",
    category: "exterior",
  },
  // Pool photos
  {
    id: 2,
    src: "/lovable-uploads/9f7fb5e6-83cd-4297-bf36-c7c208a66403.webp",
    alt: "Private pool and luxury seating area at Luxora Villa, your luxury holiday villa in Mauritius",
    category: "exterior",
  },
  {
    id: 11,
    src: "/lovable-uploads/abb57903-7d11-459c-9ffe-7005a3f030b6.webp",
    alt: "Breathtaking private swimming pool view at Luxora Villa, premium Mauritius villas with pool",
    category: "exterior",
  },
  {
    id: 13,
    src: "/lovable-uploads/outdoor-dining-pool.webp",
    alt: "Exquisite outdoor dining terrace next to the private pool at Luxora Villa Mauritius",
    category: "exterior",
  },
  {
    id: 15,
    src: "/lovable-uploads/pool-view-from-room.webp",
    alt: "Beautiful view of the private pool from the master bedroom of Luxora Villa in Grand Baie, Mauritius",
    category: "interior",
  },
  // Living room
  {
    id: 5,
    src: "/lovable-uploads/b20acf9f-79d7-4a12-b87d-ab534f2d939a.webp",
    alt: "Spacious modern living room with direct access to the private pool at Luxora Villa, luxury villa Mauritius",
    category: "interior",
  },
  // Bedrooms
  {
    id: 8,
    src: "/lovable-uploads/8d3df2d7-ed3d-4430-9084-a928a3ae4679.webp",
    alt: "Luxury 3-bedroom accommodation with king-size bedding at Luxora Villa Pereybere, Mauritius",
    category: "interior",
  },
  {
    id: 9,
    src: "/lovable-uploads/6e9e28a8-4cd6-431c-9d15-c15ad821f630.webp",
    alt: "Air-conditioned modern bedroom with glass doors opening directly to the private pool in Grand Baie, Mauritius",
    category: "interior",
  },
  {
    id: 10,
    src: "/lovable-uploads/42ac3b94-9f10-49ef-8238-94f313a1bde6.webp",
    alt: "Elegant second bedroom with contemporary luxury design at Luxora Villa Grand Baie",
    category: "interior",
  },
  // Rest
  {
    id: 6,
    src: "/lovable-uploads/77624a5a-f93f-4f78-bfb8-c6d88cf9d7d1.webp",
    alt: "Fully equipped luxury self-catering kitchen and dining area at Luxora Villa, perfect for family holidays in Mauritius",
    category: "interior",
  },
  {
    id: 7,
    src: "/lovable-uploads/0a540aea-f68a-4d87-b064-23c8a87b6549.webp",
    alt: "Luxury modern bathroom featuring a spa jacuzzi at Luxora Villa, Mauritius",
    category: "interior",
  },
  {
    id: 14,
    src: "/lovable-uploads/welcome-towels-champagne.webp",
    alt: "VIP welcome amenities with chilled champagne and fresh towels at Luxora Villa Mauritius",
    category: "interior",
  },
  {
    id: 3,
    src: "/lovable-uploads/17d507de-ba3a-4058-abe3-c10f9cde1650.webp",
    alt: "Spectacular tropical sunset view near Luxora Villa in Pereybere, North Mauritius",
    category: "exterior",
  },
  {
    id: 12,
    src: "/lovable-uploads/e3a75e0b-1d08-435c-a198-a5bb92cd996e.webp",
    alt: "Manicured tropical garden and private pool area at Luxora Villa, luxury villa rental in Mauritius",
    category: "exterior",
  },
];
