export type ImageCategory = "all" | "pool" | "exterior" | "interior";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<ImageCategory, "all">;
  /** Photos where the private pool is clearly in frame; shown under the "Private pool" tab. */
  pool?: boolean;
}

// Same order as the Booking.com gallery (20 October 2026): the first ten tell the stay, then the practical rooms,
// then second angles. The first ten also feed the home page's structured data.
export const galleryImages: GalleryImage[] = [
  {
    id: 200,
    src: "/lovable-uploads/dining-pool-villa.webp",
    alt: "Outdoor dining table under the palms in front of the private pool and Luxora Villa, Pereybere",
    category: "exterior",
    pool: true,
  },
  {
    id: 11,
    src: "/lovable-uploads/abb57903-7d11-459c-9ffe-7005a3f030b6.webp",
    alt: "The private swimming pool at Luxora Villa with sun loungers under the palms",
    category: "pool",
    pool: true,
  },
  {
    id: 3,
    src: "/lovable-uploads/17d507de-ba3a-4058-abe3-c10f9cde1650.webp",
    alt: "Sunset over the lagoon near Luxora Villa, Pereybere, North Mauritius",
    category: "exterior",
  },
  {
    id: 201,
    src: "/lovable-uploads/bedroom-balcony.webp",
    alt: "Sunlit upstairs bedroom opening onto a private balcony at Luxora Villa",
    category: "interior",
  },
  {
    id: 202,
    src: "/lovable-uploads/bedroom-pool-view.webp",
    alt: "Bedroom with glass doors opening straight onto the private pool, Luxora Villa",
    category: "interior",
    pool: true,
  },
  {
    id: 205,
    src: "/lovable-uploads/dining-palms.webp",
    alt: "Outdoor dining table for six under the palms on the stone terrace at Luxora Villa",
    category: "exterior",
  },
  {
    id: 203,
    src: "/lovable-uploads/living-room-pool-view.webp",
    alt: "Air-conditioned living room with a sofa looking out onto the private pool, Luxora Villa",
    category: "interior",
    pool: true,
  },
  {
    id: 100,
    src: "/lovable-uploads/villa-garden-balcony.webp",
    alt: "Luxora Villa, its palms and stone wall, with the stone path down to the private pool, Pereybere, Grand Baie",
    category: "exterior",
    pool: true,
  },
  {
    id: 14,
    src: "/lovable-uploads/welcome-towels-champagne.webp",
    alt: "Welcome tray with chilled drinks and fresh towels on arrival at Luxora Villa",
    category: "interior",
  },
  {
    id: 12,
    src: "/lovable-uploads/e3a75e0b-1d08-435c-a198-a5bb92cd996e.webp",
    alt: "Tropical garden and private pool area at Luxora Villa seen from the rooftop",
    category: "exterior",
    pool: true,
  },
  // Practical rooms
  {
    id: 6,
    src: "/lovable-uploads/77624a5a-f93f-4f78-bfb8-c6d88cf9d7d1.webp",
    alt: "Fully equipped kitchen and dining area at Luxora Villa",
    category: "interior",
  },
  {
    id: 204,
    src: "/lovable-uploads/bedroom-dark-wardrobe.webp",
    alt: "Air-conditioned double bedroom with wardrobe and chest of drawers at Luxora Villa",
    category: "interior",
  },
  {
    id: 8,
    src: "/lovable-uploads/8d3df2d7-ed3d-4430-9084-a928a3ae4679.webp",
    alt: "King-size bedroom with fitted wardrobes at Luxora Villa, Pereybere, Mauritius",
    category: "interior",
  },
  {
    id: 7,
    src: "/lovable-uploads/0a540aea-f68a-4d87-b064-23c8a87b6549.webp",
    alt: "Bathroom with spa jacuzzi bath at Luxora Villa, Mauritius",
    category: "interior",
  },
  {
    id: 206,
    src: "/lovable-uploads/living-room-full.webp",
    alt: "Air-conditioned living room with a corner sofa, Smart TV and dining table at Luxora Villa",
    category: "interior",
  },
  // Second angles
  {
    id: 101,
    src: "/lovable-uploads/villa-pool-exterior.webp",
    alt: "Private pool and sun terrace in front of Luxora Villa, Grand Baie, Mauritius",
    category: "pool",
    pool: true,
  },
  {
    id: 15,
    src: "/lovable-uploads/pool-view-from-room.webp",
    alt: "Private pool seen from the bedroom doorway at Luxora Villa",
    category: "pool",
    pool: true,
  },
  {
    id: 2,
    src: "/lovable-uploads/9f7fb5e6-83cd-4297-bf36-c7c208a66403.webp",
    alt: "Shaded lounge seating by the private pool at Luxora Villa, Pereybere",
    category: "pool",
    pool: true,
  },
];
