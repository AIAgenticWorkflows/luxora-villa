export type BlogPost = {
  slug: string;
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  excerpt: string;
  excerptFr?: string;
  category: string;
  categoryFr?: string;
  readingMinutes: number;
  datePublished: string; // ISO
  dateUpdated: string; // ISO
  image: string;
  imageAlt: string;
  imageAltFr?: string;
  body: Array<
    | { type: "p"; text: string; textFr?: string }
    | { type: "h2"; text: string; textFr?: string }
    | { type: "h3"; text: string; textFr?: string }
    | { type: "ul"; items: string[]; itemsFr?: string[] }
    | { type: "quote"; text: string; textFr?: string }
  >;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "things-to-do-in-grand-baie-mauritius",
    title: "25 Best Things to Do in Grand Baie, Mauritius (2026 Guide)",
    titleFr: "25 meilleures choses à faire à Grand Baie, Île Maurice (Guide 2026)",
    description:
      "The complete local guide to Grand Baie: beaches, snorkelling, boat trips, restaurants, nightlife and family days out in the north of Mauritius.",
    descriptionFr:
      "Le guide local complet de Grand Baie : plages, snorkeling, excursions en bateau, restaurants, vie nocturne et sorties en famille dans le nord de l'Île Maurice.",
    excerpt:
      "Grand Baie is the beating heart of the north coast. Here is what a Luxora Villa host recommends for a first-time visit and for a return trip.",
    excerptFr:
      "Grand Baie est le cœur battant de la côte nord. Voici ce qu'un hôte de Luxora Villa recommande pour un premier séjour ou un retour.",
    category: "Grand Baie",
    categoryFr: "Grand Baie",
    readingMinutes: 9,
    datePublished: "2026-07-01",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.webp",
    imageAlt: "Grand Baie coastline in northern Mauritius on a sunny day",
    imageAltFr: "Littoral de Grand Baie au nord de l'Île Maurice par une journée ensoleillée",
    body: [
      {
        type: "p",
        text: "Grand Baie sits on the northwest coast of Mauritius and is the busiest resort town on the island. It gathers turquoise swimming coves, a lively marina, casual beach bars and some of the best boat departures on the island in a two-kilometre stretch. It is also the closest hub to Luxora Villa in Pereybere.",
        textFr:
          "Grand Baie est située sur la côte nord-ouest de l'Île Maurice et est la station balnéaire la plus animée de l'île. Elle regroupe des criques aux eaux turquoise, une marina dynamique, des bars de plage décontractés et les meilleurs départs d'excursions en bateau sur un tracé de deux kilomètres. C'est également le pôle le plus proche de la Luxora Villa à Pereybère.",
      },
      {
        type: "h2",
        text: "Beaches you can walk or drive to in minutes",
        textFr: "Des plages accessibles en quelques minutes",
      },
      {
        type: "p",
        text: "The bay itself is calm and shallow, which is why families come back year after year. La Cuvette is the prettiest public beach in Grand Baie, tucked between two headlands with soft sand and shady casuarina trees. Pereybere Public Beach, five minutes by car from Luxora Villa, has better swimming and snorkelling right off the sand. Mont Choisy, ten minutes south, is the longest beach in the north and perfect for a sunset walk.",
        textFr:
          "La baie elle-même est calme et peu profonde, c'est pourquoi les familles y reviennent année après année. La Cuvette est la plus jolie plage publique de Grand Baie, nichée entre deux falaises de sable fin sous les filaos. La plage publique de Pereybère, à 5 minutes en voiture de Luxora Villa, offre une baignade et un snorkeling d'exception. Mont Choisy, à 10 minutes au sud, est la plus longue plage du nord et se prête magnifiquement à une promenade au coucher du soleil.",
      },
      {
        type: "h2",
        text: "Boat trips and water sports",
        textFr: "Excursions en bateau et sports nautiques",
      },
      {
        type: "ul",
        items: [
          "Speedboat to Coin de Mire, Ilot Gabriel and Flat Island for snorkelling and a barbecue lunch",
          "Catamaran cruise up the north coast with dolphin watching in the morning",
          "Undersea walk or sea kart at Merville, ideal for non-swimmers",
          "Kite surfing lessons at Anse La Raie in the north-east",
          "Deep-sea fishing charters leaving from Grand Baie marina",
        ],
        itemsFr: [
          "Speedboat vers le Coin de Mire, l'Îlot Gabriel et l'Île Plate pour le snorkeling et un déjeuner barbecue",
          "Croisière en catamaran le long de la côte nord avec observation des dauphins le matin",
          "Marche sous-marine ou kart des mers à Merville, idéal pour les non-nageurs",
          "Cours de kitesurf à Anse La Raie dans le nord-est",
          "Sorties de pêche au gros au départ de la marina de Grand Baie",
        ],
      },
      {
        type: "h2",
        text: "Where to eat in Grand Baie",
        textFr: "Où manger à Grand Baie",
      },
      {
        type: "p",
        text: "For a smart dinner, book a table at Le Capitaine on the waterfront for grilled fish and a sunset view. Cocoloko has been a Grand Baie institution for years for casual pasta, burgers and cocktails. For Mauritian street food, head to the food trucks near Sunset Boulevard after 6pm and try dholl puri, mine frit and gato piment.",
        textFr:
          "Pour un dîner raffiné au bord de l'eau, réservez une table au Capitaine pour déguster du poisson grillé face au coucher du soleil. Cocoloko est une institution depuis des années pour ses pâtes, burgers et cocktails décontractés. Pour la street food mauricienne, rendez-vous aux food trucks près de Sunset Boulevard après 18h et goûtez aux dholl puris, mines frits et gâteaux piments.",
      },
      {
        type: "h2",
        text: "Nightlife",
        textFr: "Vie nocturne",
      },
      {
        type: "p",
        text: "Grand Baie has the busiest nightlife in Mauritius. Beach House and OMG are the main clubs on the strip. Banana Beach Club is a good early evening spot with live music and cocktails on the sand.",
        textFr:
          "Grand Baie possède la vie nocturne la plus animée de l'Île Maurice. Le Beach House et l'OMG sont les clubs phares. Le Banana Beach Club est un excellent endroit en début de soirée avec sa musique live et ses cocktails les pieds dans le sable.",
      },
      {
        type: "h2",
        text: "Family friendly options",
        textFr: "Sorties idéales en famille",
      },
      {
        type: "ul",
        items: [
          "La Croisette shopping mall for a rainy afternoon, cinema and food court",
          "Sculpture park and botanical walk at the SSR Botanical Garden in Pamplemousses, twenty minutes away",
          "Otentic Ecotour on the north-east river for kayaking and lunch on a floating platform",
        ],
        itemsFr: [
          "Le centre commercial La Croisette pour un après-midi pluvieux, son cinéma et son espace restauration",
          "Visite guidée et découverte botanique au jardin de Pamplemousses, à seulement vingt minutes",
          "Éco-tourisme à l'Otentic sur la rivière du Nord-Est pour faire du kayak et déjeuner sur une plateforme flottante",
        ],
      },
      {
        type: "p",
        text: "Base yourself in Pereybere at Luxora Villa and you can reach every point above in under twenty minutes by car.",
        textFr:
          "Séjournez à la Luxora Villa à Pereybère et accédez à tous ces points d'intérêt en moins de vingt minutes en voiture.",
      },
    ],
  },
  {
    slug: "best-beaches-north-mauritius",
    title: "The 10 Best Beaches in the North of Mauritius",
    titleFr: "Les 10 plus belles plages du nord de l'Île Maurice",
    description:
      "A local ranking of the best beaches in North Mauritius, from Pereybere and Mont Choisy to Cap Malheureux and the northern islets.",
    descriptionFr:
      "Un classement local des plus belles plages du nord de l'Île Maurice, de Pereybère et Mont Choisy à Cap Malheureux et aux îlots du nord.",
    excerpt:
      "The north coast has the calmest, clearest lagoons on the island. These are the ten beaches worth planning your day around.",
    excerptFr:
      "La côte nord possède les lagons les plus calmes et les plus transparents de l'île. Voici dix plages incontournables pour vos journées ensoleillées.",
    category: "Beaches",
    categoryFr: "Plages",
    readingMinutes: 8,
    datePublished: "2026-06-20",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.webp",
    imageAlt: "Turquoise lagoon and white sand beach in the north of Mauritius",
    imageAltFr: "Lagon turquoise et plage de sable blanc dans le nord de l'Île Maurice",
    body: [
      {
        type: "p",
        text: "The north of Mauritius is protected by a wide coral reef, so the sea is glassy and the beaches shelve gently. These ten stretches, all within a thirty minute drive of Grand Baie, cover every kind of beach day.",
        textFr:
          "Le nord de l'Île Maurice est protégé par une barrière de corail, offrant une mer d'huile et des plages en pente douce. Ces dix plages, toutes situées à moins de trente minutes en voiture de Grand Baie, sont idéales pour tous les styles de journées balnéaires.",
      },
      {
        type: "h3",
        text: "1. Pereybere Public Beach",
        textFr: "1. Plage publique de Pereybère",
      },
      {
        type: "p",
        text: "Small, sheltered cove five minutes from Luxora Villa. Good snorkelling on the left side, casual restaurants across the road and lifeguards at weekends.",
        textFr:
          "Une petite crique abritée à cinq minutes de Luxora Villa. Idéal pour le snorkeling sur le côté gauche, avec des restaurants sympathiques de l'autre côté de la route et des sauveteurs le week-end.",
      },
      {
        type: "h3",
        text: "2. Mont Choisy",
        textFr: "2. Mont Choisy",
      },
      {
        type: "p",
        text: "The longest beach in the north, framed by filao trees. Perfect for a long barefoot walk and picture-postcard sunsets.",
        textFr:
          "La plus longue plage du nord, bordée de majestueux filaos. Idéale pour une longue promenade pieds nus et des couchers de soleil d'une beauté digne d'une carte postale.",
      },
      {
        type: "h3",
        text: "3. La Cuvette, Grand Baie",
        textFr: "3. La Cuvette, Grand Baie",
      },
      {
        type: "p",
        text: "Hidden between two hotels but public. Small, shady and photogenic.",
        textFr:
          "Discrètement nichée entre deux hôtels mais publique. Petite, ombragée et extrêmement photogénique.",
      },
      {
        type: "h3",
        text: "4. Trou aux Biches",
        textFr: "4. Trou aux Biches",
      },
      {
        type: "p",
        text: "Wide crescent bay with the clearest water for swimming and paddle boarding.",
        textFr:
          "Une large baie en croissant dotée d'une eau d'une clarté incroyable, parfaite pour la baignade et le stand-up paddle.",
      },
      {
        type: "h3",
        text: "5. Cap Malheureux",
        textFr: "5. Cap Malheureux",
      },
      {
        type: "p",
        text: "The famous red-roofed chapel and views over Coin de Mire island. More scenic than swimmable.",
        textFr:
          "La célèbre église au toit rouge offrant une vue imprenable sur l'île du Coin de Mire. Davantage réputée pour son panorama que pour la baignade.",
      },
      {
        type: "h3",
        text: "6. Anse La Raie",
        textFr: "6. Anse La Raie",
      },
      {
        type: "p",
        text: "Shallow lagoon on the north-east tip, the kite surf and wing foil hub.",
        textFr:
          "Un lagon peu profond à la pointe nord-est, devenu le spot de prédilection des passionnés de kitesurf et de wing foil.",
      },
      {
        type: "h3",
        text: "7. Bain Boeuf",
        textFr: "7. Bain Bœuf",
      },
      {
        type: "p",
        text: "Quiet, local beach with views of Coin de Mire and a soft sandy bottom.",
        textFr:
          "Une plage calme et authentique avec vue sur le Coin de Mire et un agréable fond sablonneux.",
      },
      {
        type: "h3",
        text: "8. Ilot Gabriel",
        textFr: "8. Îlot Gabriel",
      },
      {
        type: "p",
        text: "Uninhabited islet reached by catamaran from Grand Baie. Bring reef shoes.",
        textFr:
          "Un îlot inhabité accessible en catamaran depuis Grand Baie. Pensez à emporter des chaussures de récif.",
      },
      {
        type: "h3",
        text: "9. Flat Island",
        textFr: "9. Île Plate",
      },
      {
        type: "p",
        text: "Full-day boat trip only. The best snorkelling in the north.",
        textFr:
          "Uniquement accessible lors d'une excursion d'une journée en bateau. Les plus beaux fonds marins du nord de l'île.",
      },
      {
        type: "h3",
        text: "10. Choisy Public Beach south end",
        textFr: "10. Plage publique de Choisy (extrémité sud)",
      },
      {
        type: "p",
        text: "The end most locals go to on Sundays for a family picnic.",
        textFr:
          "L'extrémité privilégiée des Mauriciens le dimanche pour d'agréables pique-niques en famille.",
      },
    ],
  },
  {
    slug: "when-to-visit-mauritius",
    title: "When to Visit Mauritius: A Month-by-Month Guide",
    titleFr: "Quand visiter l'Île Maurice : guide mois par mois",
    description:
      "Weather, sea temperature, cyclone risk, prices and what to expect month by month in Mauritius.",
    descriptionFr:
      "Météo, température de la mer, risque de cyclone, prix et à quoi s'attendre mois par mois à l'Île Maurice.",
    excerpt:
      "Mauritius is a year-round destination, but each month has a personality. Here is what to expect and when to book.",
    excerptFr:
      "L'Île Maurice est une destination agréable toute l'année, mais chaque saison a sa personnalité. Voici à quoi s'attendre.",
    category: "Travel planning",
    categoryFr: "Planification",
    readingMinutes: 7,
    datePublished: "2026-05-15",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.webp",
    imageAlt: "Palm trees and blue sky above a Mauritius villa pool",
    imageAltFr: "Palmiers et ciel bleu au-dessus de la piscine d'une villa à l'Île Maurice",
    body: [
      {
        type: "h2",
        text: "The short answer",
        textFr: "En résumé",
      },
      {
        type: "p",
        text: "The best months to visit Mauritius are May, June, September, October and November. The weather is dry, the sea is warm, prices are calmer than the peak December and January window and the trade winds keep the north coast pleasantly cool.",
        textFr:
          "Les meilleurs mois pour visiter l'Île Maurice sont mai, juin, septembre, octobre et novembre. Le climat est sec, la mer est chaude, les tarifs sont plus doux que lors du pic de décembre-janvier, et les alizés rafraîchissent agréablement la côte nord.",
      },
      {
        type: "h2",
        text: "Season by season",
        textFr: "Saison par saison",
      },
      {
        type: "h3",
        text: "December to March, hot and green",
        textFr: "De décembre à mars : chaud et verdoyant",
      },
      {
        type: "p",
        text: "Peak summer with sea temperatures around 28°C. Occasional afternoon rain and a small cyclone risk from January to mid-March. Book early for Christmas and New Year.",
        textFr:
          "C'est le plein été, avec une eau à environ 28°C. Des averses se produisent parfois l'après-midi, et il existe un faible risque cyclonique de janvier à mi-mars. Pensez à réserver tôt pour les fêtes de fin d'année.",
      },
      {
        type: "h3",
        text: "April to June, the sweet spot",
        textFr: "D'avril à juin : la période idéale",
      },
      {
        type: "p",
        text: "Warm days, low humidity, clear lagoons. The best window for snorkelling and boat trips.",
        textFr:
          "Journées chaudes, faible humidité et lagons cristallins. La meilleure période pour le snorkeling et les excursions en mer.",
      },
      {
        type: "h3",
        text: "July and August, cool and windy",
        textFr: "Juillet et août : frais et venteux",
      },
      {
        type: "p",
        text: "Air temperatures drop to 20 to 24°C, the south and east are windy but the north stays sheltered. Best for hiking, whale watching from the west coast and lower prices.",
        textFr:
          "Les températures oscillent entre 20 et 24°C. Le sud et l'est sont ventés, mais le nord reste très abrité. Idéal pour la randonnée, l'observation des baleines sur la côte ouest et pour profiter de prix plus bas.",
      },
      {
        type: "h3",
        text: "September to November, quietly perfect",
        textFr: "De septembre à novembre : un calme absolu",
      },
      {
        type: "p",
        text: "Long sunny days, warming sea and few crowds. Many locals rate this as the best window to visit Mauritius.",
        textFr:
          "De longues journées ensoleillées, une mer qui se réchauffe et peu de touristes. Beaucoup considèrent cette période comme la meilleure pour séjourner à l'Île Maurice.",
      },
      {
        type: "h2",
        text: "Cyclone risk",
        textFr: "Le risque cyclonique",
      },
      {
        type: "p",
        text: "The official cyclone season runs November to April but a direct hit is rare. Mauritius has strong infrastructure and cyclone alerts are published four days in advance.",
        textFr:
          "La saison officielle s'étend de novembre à avril, mais un impact direct est exceptionnel. L'Île Maurice possède d'excellentes infrastructures et les alertes sont diffusées quatre jours à l'avance.",
      },
    ],
  },
  {
    slug: "day-trips-from-grand-baie",
    title: "10 Best Day Trips from Grand Baie",
    titleFr: "Les 10 meilleures excursions d'une journée depuis Grand Baie",
    description:
      "The best day trips you can do from Grand Baie in Mauritius, from the seven coloured earths and Chamarel to Ile aux Cerfs and Port Louis.",
    descriptionFr:
      "Les meilleures excursions d'une journée au départ de Grand Baie à l'Île Maurice, de la terre des sept couleurs et Chamarel à l'Île aux Cerfs et Port-Louis.",
    excerpt:
      "Base yourself in the north and the whole island is within reach. These are the day trips worth the drive.",
    excerptFr:
      "Installez-vous dans le nord et toute l'île est à votre portée. Voici les excursions incontournables.",
    category: "Day trips",
    categoryFr: "Excursions",
    readingMinutes: 8,
    datePublished: "2026-06-05",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.webp",
    imageAlt: "Aerial view of a Mauritius lagoon on a clear day",
    imageAltFr: "Vue aérienne d'un lagon de l'Île Maurice par une journée claire",
    body: [
      {
        type: "h3",
        text: "1. Ile aux Cerfs, east coast",
        textFr: "1. L'Île aux Cerfs, côte est",
      },
      {
        type: "p",
        text: "White sand islet with the best beach on the east side. About one hour by car plus a ten-minute speedboat crossing.",
        textFr:
          "Un îlot de sable blanc avec le plus beau lagon de l'est. Comptez une heure de route puis dix minutes de traversée en navette rapide.",
      },
      {
        type: "h3",
        text: "2. Port Louis and the Caudan Waterfront",
        textFr: "2. Port-Louis et le Caudan Waterfront",
      },
      {
        type: "p",
        text: "The capital is thirty-five minutes south. Visit the Central Market, the Blue Penny Museum and lunch at Le Courtyard.",
        textFr:
          "La capitale se situe à trente-cinq minutes au sud. Visitez le Marché Central, le Blue Penny Museum et déjeunez au Courtyard.",
      },
      {
        type: "h3",
        text: "3. Chamarel and the Seven Coloured Earths",
        textFr: "3. Chamarel et la Terre des Sept Couleurs",
      },
      {
        type: "p",
        text: "A full day to the south west. Combine with the Chamarel waterfall, a rum tasting at Rhumerie de Chamarel and lunch at Le Chamarel restaurant with a view over the coast.",
        textFr:
          "Une journée complète dans le sud-ouest. À associer avec la cascade de Chamarel, une dégustation de rhum à la Rhumerie et un déjeuner avec vue spectaculaire au restaurant Le Chamarel.",
      },
      {
        type: "h3",
        text: "4. Black River Gorges National Park",
        textFr: "4. Parc national des Gorges de la Rivière Noire",
      },
      {
        type: "p",
        text: "Best half-day hike on the island. Start early at Petrin, take the Macchabee viewpoint trail.",
        textFr:
          "La plus belle randonnée de l'île. Partez tôt de Pétrin et empruntez le sentier menant au belvédère de Macchabée.",
      },
      {
        type: "h3",
        text: "5. La Vanille Nature Park, south",
        textFr: "5. Parc de nature de La Vanille, sud",
      },
      {
        type: "p",
        text: "Giant tortoises, crocodiles, a small maze. Fun for kids on a rainy afternoon.",
        textFr:
          "Tortues géantes, crocodiles et labyrinthe végétal. Idéal pour divertir les enfants.",
      },
      {
        type: "h3",
        text: "6. Ile aux Aigrettes",
        textFr: "6. L'Île aux Aigrettes",
      },
      {
        type: "p",
        text: "Guided nature reserve trip off the south east coast. See wild pink pigeons and giant Aldabra tortoises.",
        textFr:
          "Réserve naturelle au large de la côte sud-est. Observez les pigeons roses sauvages et les impressionnantes tortues d'Aldabra.",
      },
      {
        type: "h3",
        text: "7. Le Morne peninsula",
        textFr: "7. Le Morne Brabant",
      },
      {
        type: "p",
        text: "UNESCO listed mountain and world-famous kite spot. Best sunset in Mauritius.",
        textFr:
          "Montagne classée à l'UNESCO et spot de glisse mondialement réputé. Le plus beau coucher de soleil de l'île.",
      },
      {
        type: "h3",
        text: "8. Grand Bassin, sacred lake",
        textFr: "8. Grand Bassin (Ganga Talao)",
      },
      {
        type: "p",
        text: "Hindu pilgrimage lake in the crater at the centre of the island. Impressive Shiva statue and cool climate.",
        textFr:
          "Lac sacré niché dans un ancien cratère volcanique. Découvrez la statue géante du dieu Shiva et un climat frais caractéristique des hauteurs.",
      },
      {
        type: "h3",
        text: "9. Pamplemousses Botanical Garden",
        textFr: "9. Jardin botanique de Pamplemousses",
      },
      {
        type: "p",
        text: "Only fifteen minutes from Luxora Villa. Home to the giant water lilies and a spice garden.",
        textFr:
          "À seulement quinze minutes de la villa. Admirez les nénuphars géants et découvrez le jardin des épices.",
      },
      {
        type: "h3",
        text: "10. Northern Islands full-day cruise",
        textFr: "10. Croisière d'une journée vers les îles du Nord",
      },
      {
        type: "p",
        text: "Coin de Mire, Ilot Gabriel and Flat Island by catamaran. The classic day out from Grand Baie.",
        textFr:
          "Coin de Mire, Îlot Gabriel et Île Plate en catamaran. La sortie en mer incontournable de tout séjour à Grand Baie.",
      },
    ],
  },
  {
    slug: "mauritius-food-guide",
    title: "The Mauritius Food Guide: 12 Dishes to Try",
    titleFr: "Le guide gastronomique mauricien : 12 spécialités à savourer",
    description:
      "From dholl puri and rougaille to gato piment and Mauritian street food, the essential dishes to taste on your Mauritius holiday.",
    descriptionFr:
      "Des dholl puris et rougail aux gâteaux piments et street food, découvrez les plats incontournables de vos vacances.",
    excerpt:
      "Mauritian food is a mix of Indian, Creole, Chinese and French cooking. Here is what to order and where to find it.",
    excerptFr:
      "La cuisine mauricienne est un métissage de cultures indienne, créole, chinoise et française. Voici nos conseils gourmands.",
    category: "Food",
    categoryFr: "Gastronomie",
    readingMinutes: 6,
    datePublished: "2026-04-10",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.webp",
    imageAlt: "A plate of colourful Mauritian street food",
    imageAltFr: "Une assiette colorée de street food mauricienne",
    body: [
      {
        type: "h2",
        text: "Street food you must try",
        textFr: "La street food incontournable",
      },
      {
        type: "ul",
        items: [
          "Dholl puri, thin flatbread stuffed with yellow split peas, served with bean curry and pickles",
          "Gato piment, small chilli and split pea fritters, best eaten hot from the pan",
          "Mine frit, wok-fried noodles with vegetables and chicken",
          "Boulettes, steamed dumplings served with hot broth and green chilli sauce",
          "Rotis chaud with butter bean curry from a roadside vendor",
        ],
        itemsFr: [
          "Le Dholl Puri : fine galette à base de pois cassés jaunes, garnie de curry de gros pois et de chutneys",
          "Le Gâteau Piment : petits beignets de pois cassés frits relevés de piments, à savourer bien chauds",
          "Le Mine Frit : nouilles sautées au wok agrémentées de légumes, d'œufs et de poulet",
          "Les Boulettes : raviolis cuits à la vapeur et servis dans un bouillon chaud parfumé",
          "Le Roti Chaud : galette de blé garnie d'un savoureux curry de gros pois et d'un rougail",
        ],
      },
      {
        type: "h2",
        text: "Creole home cooking",
        textFr: "Les plats familiaux créoles",
      },
      {
        type: "ul",
        items: [
          "Rougaille, tomato-based Creole stew with fish, sausage or chicken",
          "Vindaye, mustard-marinated fish or octopus, a Sunday classic",
          "Cari poule, Mauritian chicken curry with thyme and curry leaves",
          "Bol renversé, upside-down rice bowl with vegetables and a runny egg on top",
        ],
        itemsFr: [
          "Le Rougaille : plat traditionnel à base de tomates, ail, gingembre et herbes aromatiques avec saucisses ou poisson",
          "Le Vindaye : poisson ou poulpe mariné à la moutarde, au curcuma, à l'ail et aux piments",
          "Le Cari Poule : curry de poulet traditionnel cuisiné au masala frais et feuilles de cari (caripoulé)",
          "Le Bol Renversé : riz surmonté d'une sauce aux légumes, poulet et d'un œuf au plat présenté renversé",
        ],
      },
      {
        type: "h2",
        text: "Sweet treats",
        textFr: "Douceurs sucrées",
      },
      {
        type: "ul",
        items: [
          "Napolitaine, shortbread biscuits sandwiched with jam and pink icing",
          "Alouda, milky sweet drink with basil seeds and rose syrup",
          "Fresh pineapple with chilli and salt from a beach vendor",
        ],
        itemsFr: [
          "Le Napolitain : biscuits sablés fondants fourrés à la confiture et recouverts d'un glaçage rose",
          "L'Alouda : boisson lactée rafraîchissante parfumée à la rose avec graines de basilic",
          "L'ananas frais agrémenté de piment et de sel, préparé sous vos yeux sur la plage",
        ],
      },
      {
        type: "h2",
        text: "Where to eat near Grand Baie",
        textFr: "Où manger près de Grand Baie",
      },
      {
        type: "p",
        text: "For street food, the trucks near Sunset Boulevard in Grand Baie serve dholl puri and mine frit until late. For a smart Creole dinner, try La Table du Chef or Cafe La Vieille Rhumerie. Le Capitaine and 4 Epices in Grand Baie are safe bets for grilled fish and seafood.",
        textFr:
          "Pour la street food, les marchands situés près de Sunset Boulevard à Grand Baie servent d'excellents dholl puris et mines frits. Pour un dîner créole authentique, essayez La Table du Chef ou le Café La Vieille Rhumerie. Le Capitaine et les 4 Épices restent des valeurs sûres pour déguster du poisson frais.",
      },
    ],
  },
  {
    slug: "getting-around-mauritius",
    title: "Getting Around Mauritius: Car Hire, Uber and Airport Transfers",
    titleFr: "Se déplacer à l'Île Maurice : location de voiture, taxis et transferts",
    description:
      "How to get from the airport to Grand Baie and how to travel around Mauritius: car hire, taxis, buses and the metro.",
    descriptionFr:
      "Comment se rendre de l'aéroport à Grand Baie et voyager à l'Île Maurice : location de voiture, taxis, bus et métro.",
    excerpt:
      "Mauritius is small but there is no ride-share on demand. Here is what actually works to get around, from the airport to the north coast.",
    excerptFr:
      "L'île est petite mais il n'existe pas de service de VTC à la demande. Voici comment vous déplacer sereinement de l'aéroport à la côte nord.",
    category: "Travel planning",
    categoryFr: "Planification",
    readingMinutes: 6,
    datePublished: "2026-03-01",
    dateUpdated: "2026-07-24",
    image: "/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.webp",
    imageAlt: "Coastal road along the north of Mauritius",
    imageAltFr: "Route côtière longeant le nord de l'Île Maurice",
    body: [
      {
        type: "h2",
        text: "From SSR Airport to Grand Baie",
        textFr: "De l'aéroport SSR à Grand Baie",
      },
      {
        type: "p",
        text: "The drive from Sir Seewoosagur Ramgoolam International Airport in the south east to Grand Baie takes about seventy-five minutes by taxi or private transfer. Pre-book a transfer for a fixed price of around MUR 2,500 to 3,500 rather than hailing a cab at arrivals.",
        textFr:
          "Le trajet depuis l'aéroport international Sir Seewoosagur Ramgoolam au sud-est jusqu'à Grand Baie prend environ soixante-quinze minutes en taxi ou transfert privé. Nous vous conseillons vivement de réserver à l'avance pour un tarif fixe de 2 500 à 3 500 MUR.",
      },
      {
        type: "h2",
        text: "Car hire",
        textFr: "La location de voiture",
      },
      {
        type: "p",
        text: "A rental car is the most flexible way to explore Mauritius. Roads are good, driving is on the left as in the UK, and every point of interest is within a two-hour drive. Book in advance in peak season. Small hatchbacks start around EUR 25 a day.",
        textFr:
          "Louer une voiture est le moyen le plus flexible pour visiter l'île. Le réseau routier est excellent. On y conduit à gauche, et tout point d'intérêt est à moins de deux heures de route. En haute saison, réservez bien en amont. Les citadines démarrent à environ 25 EUR par jour.",
      },
      {
        type: "h2",
        text: "Taxis and ride hailing",
        textFr: "Taxis et applications de transport",
      },
      {
        type: "p",
        text: "There is no Uber in Mauritius. Local apps such as Yugo and Cool Market taxis work in Grand Baie and Port Louis. Otherwise ask your host at Luxora Villa for a trusted taxi driver, most guests book the same driver for their airport transfer and return.",
        textFr:
          "Il n'y a pas d'Uber à l'Île Maurice. Des applications locales comme Yugo ou Cool Market fonctionnent bien à Grand Baie et Port-Louis. Vous pouvez également demander à Nisha, notre hôte à Luxora Villa, de vous recommander un chauffeur fiable.",
      },
      {
        type: "h2",
        text: "Buses and the metro",
        textFr: "Bus et métro",
      },
      {
        type: "p",
        text: "Public buses are cheap and reach most towns. The Metro Express light rail links Port Louis, Rose Hill and Curepipe, useful for a day in the capital, but does not reach the north coast.",
        textFr:
          "Les bus publics sont très économiques et desservent l'ensemble de l'île. Le tramway Metro Express relie Port-Louis à Curepipe, idéal pour visiter la capitale, mais il ne dessert pas le littoral nord.",
      },
    ],
  },
];

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
export const blogCategoriesFr = Array.from(
  new Set(blogPosts.map((p) => p.categoryFr || p.category)),
);
