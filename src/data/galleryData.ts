export type ImageCategory = "all" | "exterior" | "interior";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<ImageCategory, "all">;
}

export const galleryImages: GalleryImage[] = [
  // Pool photos first
  { id: 1, src: "/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.png", alt: "Luxora Villa exterior with private pool in Grand Baie, Mauritius", category: "exterior" },
  { id: 2, src: "/lovable-uploads/9f7fb5e6-83cd-4297-bf36-c7c208a66403.png", alt: "Pool area with luxury seating at Luxora Villa Mauritius", category: "exterior" },
  { id: 11, src: "/lovable-uploads/abb57903-7d11-459c-9ffe-7005a3f030b6.png", alt: "Private pool view at Luxora Villa North Mauritius", category: "exterior" },
  { id: 13, src: "/lovable-uploads/outdoor-dining-pool.jpeg", alt: "Outdoor dining beside the pool at Luxora Villa", category: "exterior" },
  { id: 16, src: "/lovable-uploads/poolside-seating-area.jpg", alt: "Poolside seating area at Luxora Villa Pereybere Mauritius", category: "exterior" },
  { id: 15, src: "/lovable-uploads/pool-view-from-room.jpg", alt: "Pool view from bedroom at Luxora Villa Grand Baie", category: "interior" },
  // Living room
  { id: 5, src: "/lovable-uploads/b20acf9f-79d7-4a12-b87d-ab534f2d939a.png", alt: "Living room opening onto pool at Luxora Villa Mauritius", category: "interior" },
  // Bedrooms
  { id: 4, src: "/lovable-uploads/fe796886-fbef-4626-bb98-2831ba06f4e3.png", alt: "Master bedroom with private pool view at Luxora Villa Grand Baie", category: "interior" },
  { id: 8, src: "/lovable-uploads/8d3df2d7-ed3d-4430-9084-a928a3ae4679.png", alt: "Modern bedroom at Luxora Villa Pereybere", category: "interior" },
  { id: 9, src: "/lovable-uploads/6e9e28a8-4cd6-431c-9d15-c15ad821f630.png", alt: "Bedroom with direct pool access at Luxora Villa Mauritius", category: "interior" },
  { id: 10, src: "/lovable-uploads/42ac3b94-9f10-49ef-8238-94f313a1bde6.png", alt: "Second bedroom at Luxora Villa Grand Baie", category: "interior" },
  // Rest
  { id: 6, src: "/lovable-uploads/77624a5a-f93f-4f78-bfb8-c6d88cf9d7d1.png", alt: "Modern fully equipped kitchen and dining area", category: "interior" },
  { id: 7, src: "/lovable-uploads/0a540aea-f68a-4d87-b064-23c8a87b6549.png", alt: "Luxury bathroom with jacuzzi at Luxora Villa", category: "interior" },
  { id: 14, src: "/lovable-uploads/welcome-towels-champagne.jpg", alt: "Welcome towels and champagne at Luxora Villa Mauritius", category: "interior" },
  { id: 3, src: "/lovable-uploads/17d507de-ba3a-4058-abe3-c10f9cde1650.png", alt: "Pereybere sunset near Luxora Villa in North Mauritius", category: "exterior" },
  { id: 12, src: "/lovable-uploads/e3a75e0b-1d08-435c-a198-a5bb92cd996e.png", alt: "Tropical garden area at Luxora Villa", category: "exterior" },
];
