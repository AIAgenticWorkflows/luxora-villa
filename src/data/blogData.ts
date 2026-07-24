export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  datePublished: string; // ISO
  dateUpdated: string; // ISO
  image: string;
  imageAlt: string;
  // sections: rendered in order
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
  >;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "things-to-do-in-grand-baie-mauritius",
    title: "25 Best Things to Do in Grand Baie, Mauritius (2026 Guide)",
    description:
      "The complete local guide to Grand Baie: beaches, snorkelling, boat trips, restaurants, nightlife and family days out in the north of Mauritius.",
    excerpt:
      "Grand Baie is the beating heart of the north coast. Here is what a Luxora Villa host recommends for a first-time visit and for a return trip.",
    category: "Grand Baie",
    readingMinutes: 9,
    datePublished: "2026-07-01",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.png",
    imageAlt: "Grand Baie coastline in northern Mauritius on a sunny day",
    body: [
      {
        type: "p",
        text: "Grand Baie sits on the northwest coast of Mauritius and is the busiest resort town on the island. It gathers turquoise swimming coves, a lively marina, casual beach bars and some of the best boat departures on the island in a two-kilometre stretch. It is also the closest hub to Luxora Villa in Pereybere.",
      },
      { type: "h2", text: "Beaches you can walk or drive to in minutes" },
      {
        type: "p",
        text: "The bay itself is calm and shallow, which is why families come back year after year. La Cuvette is the prettiest public beach in Grand Baie, tucked between two headlands with soft sand and shady casuarina trees. Pereybere Public Beach, five minutes by car from Luxora Villa, has better swimming and snorkelling right off the sand. Mont Choisy, ten minutes south, is the longest beach in the north and perfect for a sunset walk.",
      },
      { type: "h2", text: "Boat trips and water sports" },
      {
        type: "ul",
        items: [
          "Speedboat to Coin de Mire, Ilot Gabriel and Flat Island for snorkelling and a barbecue lunch",
          "Catamaran cruise up the north coast with dolphin watching in the morning",
          "Undersea walk or sea kart at Merville, ideal for non-swimmers",
          "Kite surfing lessons at Anse La Raie in the north-east",
          "Deep-sea fishing charters leaving from Grand Baie marina",
        ],
      },
      { type: "h2", text: "Where to eat in Grand Baie" },
      {
        type: "p",
        text: "For a smart dinner, book a table at Le Capitaine on the waterfront for grilled fish and a sunset view. Cocoloko has been a Grand Baie institution for years for casual pasta, burgers and cocktails. For Mauritian street food, head to the food trucks near Sunset Boulevard after 6pm and try dholl puri, mine frit and gato piment.",
      },
      { type: "h2", text: "Nightlife" },
      {
        type: "p",
        text: "Grand Baie has the busiest nightlife in Mauritius. Beach House and OMG are the main clubs on the strip. Banana Beach Club is a good early evening spot with live music and cocktails on the sand.",
      },
      { type: "h2", text: "Family friendly options" },
      {
        type: "ul",
        items: [
          "La Croisette shopping mall for a rainy afternoon, cinema and food court",
          "Sculpture park and botanical walk at the SSR Botanical Garden in Pamplemousses, twenty minutes away",
          "Otentic Ecotour on the north-east river for kayaking and lunch on a floating platform",
        ],
      },
      {
        type: "p",
        text: "Base yourself in Pereybere at Luxora Villa and you can reach every point above in under twenty minutes by car.",
      },
    ],
  },
  {
    slug: "best-beaches-north-mauritius",
    title: "The 10 Best Beaches in the North of Mauritius",
    description:
      "A local ranking of the best beaches in North Mauritius, from Pereybere and Mont Choisy to Cap Malheureux and the northern islets.",
    excerpt:
      "The north coast has the calmest, clearest lagoons on the island. These are the ten beaches worth planning your day around.",
    category: "Beaches",
    readingMinutes: 8,
    datePublished: "2026-06-20",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.png",
    imageAlt: "Turquoise lagoon and white sand beach in the north of Mauritius",
    body: [
      {
        type: "p",
        text: "The north of Mauritius is protected by a wide coral reef, so the sea is glassy and the beaches shelve gently. These ten stretches, all within a thirty minute drive of Grand Baie, cover every kind of beach day.",
      },
      { type: "h3", text: "1. Pereybere Public Beach" },
      {
        type: "p",
        text: "Small, sheltered cove five minutes from Luxora Villa. Good snorkelling on the left side, casual restaurants across the road and lifeguards at weekends.",
      },
      { type: "h3", text: "2. Mont Choisy" },
      {
        type: "p",
        text: "The longest beach in the north, framed by filao trees. Perfect for a long barefoot walk and picture-postcard sunsets.",
      },
      { type: "h3", text: "3. La Cuvette, Grand Baie" },
      {
        type: "p",
        text: "Hidden between two hotels but public. Small, shady and photogenic.",
      },
      { type: "h3", text: "4. Trou aux Biches" },
      {
        type: "p",
        text: "Wide crescent bay with the clearest water for swimming and paddle boarding.",
      },
      { type: "h3", text: "5. Cap Malheureux" },
      {
        type: "p",
        text: "The famous red-roofed chapel and views over Coin de Mire island. More scenic than swimmable.",
      },
      { type: "h3", text: "6. Anse La Raie" },
      {
        type: "p",
        text: "Shallow lagoon on the north-east tip, the kite surf and wing foil hub.",
      },
      { type: "h3", text: "7. Bain Boeuf" },
      {
        type: "p",
        text: "Quiet, local beach with views of Coin de Mire and a soft sandy bottom.",
      },
      { type: "h3", text: "8. Ilot Gabriel" },
      {
        type: "p",
        text: "Uninhabited islet reached by catamaran from Grand Baie. Bring reef shoes.",
      },
      { type: "h3", text: "9. Flat Island" },
      {
        type: "p",
        text: "Full-day boat trip only. The best snorkelling in the north.",
      },
      { type: "h3", text: "10. Choisy Public Beach south end" },
      {
        type: "p",
        text: "The end most locals go to on Sundays for a family picnic.",
      },
    ],
  },
  {
    slug: "when-to-visit-mauritius",
    title: "When to Visit Mauritius: A Month-by-Month Guide",
    description:
      "Weather, sea temperature, cyclone risk, prices and what to expect month by month in Mauritius.",
    excerpt:
      "Mauritius is a year-round destination, but each month has a personality. Here is what to expect and when to book.",
    category: "Travel planning",
    readingMinutes: 7,
    datePublished: "2026-05-15",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.png",
    imageAlt: "Palm trees and blue sky above a Mauritius villa pool",
    body: [
      { type: "h2", text: "The short answer" },
      {
        type: "p",
        text: "The best months to visit Mauritius are May, June, September, October and November. The weather is dry, the sea is warm, prices are calmer than the peak December and January window and the trade winds keep the north coast pleasantly cool.",
      },
      { type: "h2", text: "Season by season" },
      { type: "h3", text: "December to March, hot and green" },
      {
        type: "p",
        text: "Peak summer with sea temperatures around 28°C. Occasional afternoon rain and a small cyclone risk from January to mid-March. Book early for Christmas and New Year.",
      },
      { type: "h3", text: "April to June, the sweet spot" },
      {
        type: "p",
        text: "Warm days, low humidity, clear lagoons. The best window for snorkelling and boat trips.",
      },
      { type: "h3", text: "July and August, cool and windy" },
      {
        type: "p",
        text: "Air temperatures drop to 20 to 24°C, the south and east are windy but the north stays sheltered. Best for hiking, whale watching from the west coast and lower prices.",
      },
      { type: "h3", text: "September to November, quietly perfect" },
      {
        type: "p",
        text: "Long sunny days, warming sea and few crowds. Many locals rate this as the best window to visit Mauritius.",
      },
      { type: "h2", text: "Cyclone risk" },
      {
        type: "p",
        text: "The official cyclone season runs November to April but a direct hit is rare. Mauritius has strong infrastructure and cyclone alerts are published four days in advance.",
      },
    ],
  },
  {
    slug: "day-trips-from-grand-baie",
    title: "10 Best Day Trips from Grand Baie",
    description:
      "The best day trips you can do from Grand Baie in Mauritius, from the seven coloured earths and Chamarel to Ile aux Cerfs and Port Louis.",
    excerpt:
      "Base yourself in the north and the whole island is within reach. These are the day trips worth the drive.",
    category: "Day trips",
    readingMinutes: 8,
    datePublished: "2026-06-05",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.png",
    imageAlt: "Aerial view of a Mauritius lagoon on a clear day",
    body: [
      { type: "h3", text: "1. Ile aux Cerfs, east coast" },
      {
        type: "p",
        text: "White sand islet with the best beach on the east side. About one hour by car plus a ten-minute speedboat crossing.",
      },
      { type: "h3", text: "2. Port Louis and the Caudan Waterfront" },
      {
        type: "p",
        text: "The capital is thirty-five minutes south. Visit the Central Market, the Blue Penny Museum and lunch at Le Courtyard.",
      },
      { type: "h3", text: "3. Chamarel and the Seven Coloured Earths" },
      {
        type: "p",
        text: "A full day to the south west. Combine with the Chamarel waterfall, a rum tasting at Rhumerie de Chamarel and lunch at Le Chamarel restaurant with a view over the coast.",
      },
      { type: "h3", text: "4. Black River Gorges National Park" },
      {
        type: "p",
        text: "Best half-day hike on the island. Start early at Petrin, take the Macchabee viewpoint trail.",
      },
      { type: "h3", text: "5. La Vanille Nature Park, south" },
      {
        type: "p",
        text: "Giant tortoises, crocodiles, a small maze. Fun for kids on a rainy afternoon.",
      },
      { type: "h3", text: "6. Ile aux Aigrettes" },
      {
        type: "p",
        text: "Guided nature reserve trip off the south east coast. See wild pink pigeons and giant Aldabra tortoises.",
      },
      { type: "h3", text: "7. Le Morne peninsula" },
      {
        type: "p",
        text: "UNESCO listed mountain and world-famous kite spot. Best sunset in Mauritius.",
      },
      { type: "h3", text: "8. Grand Bassin, sacred lake" },
      {
        type: "p",
        text: "Hindu pilgrimage lake in the crater at the centre of the island. Impressive Shiva statue and cool climate.",
      },
      { type: "h3", text: "9. Pamplemousses Botanical Garden" },
      {
        type: "p",
        text: "Only fifteen minutes from Luxora Villa. Home to the giant water lilies and a spice garden.",
      },
      { type: "h3", text: "10. Northern Islands full-day cruise" },
      {
        type: "p",
        text: "Coin de Mire, Ilot Gabriel and Flat Island by catamaran. The classic day out from Grand Baie.",
      },
    ],
  },
  {
    slug: "mauritius-food-guide",
    title: "The Mauritius Food Guide: 12 Dishes to Try",
    description:
      "From dholl puri and rougaille to gato piment and Mauritian street food, the essential dishes to taste on your Mauritius holiday.",
    excerpt:
      "Mauritian food is a mix of Indian, Creole, Chinese and French cooking. Here is what to order and where to find it.",
    category: "Food",
    readingMinutes: 6,
    datePublished: "2026-04-10",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.png",
    imageAlt: "A plate of colourful Mauritian street food",
    body: [
      { type: "h2", text: "Street food you must try" },
      {
        type: "ul",
        items: [
          "Dholl puri, thin flatbread stuffed with yellow split peas, served with bean curry and pickles",
          "Gato piment, small chilli and split pea fritters, best eaten hot from the pan",
          "Mine frit, wok-fried noodles with vegetables and chicken",
          "Boulettes, steamed dumplings served with hot broth and green chilli sauce",
          "Rotis chaud with butter bean curry from a roadside vendor",
        ],
      },
      { type: "h2", text: "Creole home cooking" },
      {
        type: "ul",
        items: [
          "Rougaille, tomato-based Creole stew with fish, sausage or chicken",
          "Vindaye, mustard-marinated fish or octopus, a Sunday classic",
          "Cari poule, Mauritian chicken curry with thyme and curry leaves",
          "Bol renversé, upside-down rice bowl with vegetables and a runny egg on top",
        ],
      },
      { type: "h2", text: "Sweet treats" },
      {
        type: "ul",
        items: [
          "Napolitaine, shortbread biscuits sandwiched with jam and pink icing",
          "Alouda, milky sweet drink with basil seeds and rose syrup",
          "Fresh pineapple with chilli and salt from a beach vendor",
        ],
      },
      { type: "h2", text: "Where to eat near Grand Baie" },
      {
        type: "p",
        text: "For street food, the trucks near Sunset Boulevard in Grand Baie serve dholl puri and mine frit until late. For a smart Creole dinner, try La Table du Chef or Cafe La Vieille Rhumerie. Le Capitaine and 4 Epices in Grand Baie are safe bets for grilled fish and seafood.",
      },
    ],
  },
  {
    slug: "getting-around-mauritius",
    title: "Getting Around Mauritius: Car Hire, Uber and Airport Transfers",
    description:
      "How to get from the airport to Grand Baie and how to travel around Mauritius: car hire, taxis, buses and the metro.",
    excerpt:
      "Mauritius is small but there is no ride-share on demand. Here is what actually works to get around, from the airport to the north coast.",
    category: "Travel planning",
    readingMinutes: 6,
    datePublished: "2026-03-01",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.png",
    imageAlt: "Coastal road along the north of Mauritius",
    body: [
      { type: "h2", text: "From SSR Airport to Grand Baie" },
      {
        type: "p",
        text: "The drive from Sir Seewoosagur Ramgoolam International Airport in the south east to Grand Baie takes about seventy-five minutes by taxi or private transfer. Pre-book a transfer for a fixed price of around MUR 2,500 to 3,500 rather than hailing a cab at arrivals.",
      },
      { type: "h2", text: "Car hire" },
      {
        type: "p",
        text: "A rental car is the most flexible way to explore Mauritius. Roads are good, driving is on the left as in the UK, and every point of interest is within a two-hour drive. Book in advance in peak season. Small hatchbacks start around EUR 25 a day.",
      },
      { type: "h2", text: "Taxis and ride hailing" },
      {
        type: "p",
        text: "There is no Uber in Mauritius. Local apps such as Yugo and Cool Market taxis work in Grand Baie and Port Louis. Otherwise ask your host at Luxora Villa for a trusted taxi driver, most guests book the same driver for their airport transfer and return.",
      },
      { type: "h2", text: "Buses and the metro" },
      {
        type: "p",
        text: "Public buses are cheap and reach most towns. The Metro Express light rail links Port Louis, Rose Hill and Curepipe, useful for a day in the capital, but does not reach the north coast.",
      },
    ],
  },
];

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
