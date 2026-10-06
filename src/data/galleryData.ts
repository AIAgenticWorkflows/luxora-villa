export type ImageCategory = "all" | "pool" | "exterior" | "interior";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<ImageCategory, "all">;
  /** Photos where the private pool is clearly in frame; shown under the "Private pool" tab. */
  pool?: boolean;
}

// Order matters: the private pool leads the gallery.
export const galleryImages: GalleryImage[] = [
  // Cover
  {
    id: 100,
    src: "/lovable-uploads/villa-garden-balcony.webp",
    alt: "Luxora Villa and its private pool seen from the tropical garden, Pereybere, Grand Baie",
    category: "exterior",
    pool: true,
  },
  // Private pool
  {
    id: 11,
    src: "/lovable-uploads/abb57903-7d11-459c-9ffe-7005a3f030b6.webp",
    alt: "The private swimming pool at Luxora Villa with sun loungers, exclusively for guests",
    category: "pool",
    pool: true,
  },
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
    alt: "Private pool seen from the master bedroom doorway at Luxora Villa",
    category: "pool",
    pool: true,
  },
  {
    id: 102,
    src: "/lovable-uploads/outdoor-dining-terrace.webp",
    alt: "Outdoor dining for six on the stone terrace beside the private pool at Luxora Villa",
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
  {
    id: 12,
    src: "/lovable-uploads/e3a75e0b-1d08-435c-a198-a5bb92cd996e.webp",
    alt: "Tropical garden and private pool area at Luxora Villa seen from the rooftop",
    category: "exterior",
    pool: true,
  },
  // Interior
  {
    id: 5,
    src: "/lovable-uploads/b20acf9f-79d7-4a12-b87d-ab534f2d939a.webp",
    alt: "Air-conditioned living room opening straight onto the private pool at Luxora Villa",
    category: "interior",
    pool: true,
  },
  {
    id: 9,
    src: "/lovable-uploads/6e9e28a8-4cd6-431c-9d15-c15ad821f630.webp",
    alt: "Master bedroom with glass doors opening directly onto the private pool, Luxora Villa",
    category: "interior",
    pool: true,
  },
  {
    id: 8,
    src: "/lovable-uploads/8d3df2d7-ed3d-4430-9084-a928a3ae4679.webp",
    alt: "King-size bedroom with fitted wardrobes at Luxora Villa, Pereybere, Mauritius",
    category: "interior",
  },
  {
    id: 10,
    src: "/lovable-uploads/42ac3b94-9f10-49ef-8238-94f313a1bde6.webp",
    alt: "Second air-conditioned bedroom at Luxora Villa, Grand Baie",
    category: "interior",
  },
  {
    id: 6,
    src: "/lovable-uploads/77624a5a-f93f-4f78-bfb8-c6d88cf9d7d1.webp",
    alt: "Fully equipped kitchen and dining area at Luxora Villa",
    category: "interior",
  },
  {
    id: 7,
    src: "/lovable-uploads/0a540aea-f68a-4d87-b064-23c8a87b6549.webp",
    alt: "Bathroom with spa jacuzzi bath at Luxora Villa, Mauritius",
    category: "interior",
  },
  {
    id: 14,
    src: "/lovable-uploads/welcome-towels-champagne.webp",
    alt: "Welcome tray with chilled drinks and fresh towels on arrival at Luxora Villa",
    category: "interior",
  },
  // Surroundings
  {
    id: 3,
    src: "/lovable-uploads/17d507de-ba3a-4058-abe3-c10f9cde1650.webp",
    alt: "Sunset over the lagoon near Luxora Villa, Pereybere, North Mauritius",
    category: "exterior",
  },
];
