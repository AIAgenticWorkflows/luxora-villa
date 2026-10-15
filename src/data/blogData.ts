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
  /** Optional Q&A shown at the end of the article and published as FAQPage structured data. */
  faq?: Array<{ q: string; a: string; qFr?: string; aFr?: string }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "renting-a-villa-in-mauritius-guide",
    title: "Renting a Villa in Mauritius: What's Included, Costs and Tips (2026)",
    titleFr: "Louer une villa à l'Île Maurice : ce qui est inclus, prix et conseils (2026)",
    description:
      "Renting a villa in Mauritius? What is included, whether housekeeping and a cook come with it, what a two-week stay costs, and how to choose the right area.",
    descriptionFr:
      "Location de villa à l'Île Maurice : ce qui est inclus, ménage et cuisinier, budget pour deux semaines et choix de la région. Le guide local.",
    excerpt:
      "Renting a private villa in Mauritius offers the perfect blend of luxury, space, and home-like comfort. Here is everything you need to know before booking.",
    excerptFr:
      "Louer une villa privée à l'Île Maurice offre le parfait mélange de luxe, d'espace et de confort. Voici tout ce qu'il faut savoir avant de réserver.",
    category: "Travel planning",
    categoryFr: "Planification",
    readingMinutes: 8,
    datePublished: "2026-08-10",
    dateUpdated: "2026-10-14",
    faq: [
      {
        q: "Do Mauritius villa rentals include housekeeping and a cook?",
        a: "Not always. Large staffed villas include daily housekeeping and can offer a private chef at a higher price. Many villas, including Luxora Villa in Grand Baie, are self-catering, with no housekeeping during the stay and no cook, but a fully equipped kitchen and restaurants nearby.",
        qFr: "Les villas à l'Île Maurice incluent-elles le ménage et un cuisinier ?",
        aFr: "Pas toujours. Les grandes villas avec personnel incluent le ménage quotidien et peuvent proposer un chef privé, pour un prix plus élevé. Beaucoup de villas, dont Luxora Villa à Grand Baie, sont en gestion libre : pas de ménage pendant le séjour ni de cuisinier, mais une cuisine entièrement équipée et des restaurants à proximité.",
      },
      {
        q: "What is included when you rent a villa in Mauritius?",
        a: "A self-catering villa usually includes exclusive use of the house, garden and pool, bed linen and towels, a fully equipped kitchen, WiFi, air conditioning and parking. Check whether electricity, the tourist fee and airport transfers are included before you book.",
        qFr: "Qu'est-ce qui est inclus dans une location de villa à l'Île Maurice ?",
        aFr: "Une villa en gestion libre inclut généralement l'usage exclusif de la maison, du jardin et de la piscine, le linge de lit et les serviettes, une cuisine équipée, le WiFi, la climatisation et le parking. Vérifiez avant de réserver si l'électricité, la taxe touristique et le transfert aéroport sont compris.",
      },
      {
        q: "How much does it cost to rent a villa in Mauritius for two weeks?",
        a: "It depends on the season, the length of stay, the size of the villa and whether staff are included. Festive season and school holidays cost the most, and staffed villas cost more than self-catering ones. Send your dates to the owner for an exact quote; Luxora Villa replies on WhatsApp, usually within the hour.",
        qFr: "Combien coûte la location d'une villa à l'Île Maurice pour deux semaines ?",
        aFr: "Cela dépend de la saison, de la durée, de la taille de la villa et de la présence de personnel. Les fêtes et les vacances scolaires sont les périodes les plus chères, et une villa avec personnel coûte plus qu'une villa en gestion libre. Envoyez vos dates au propriétaire pour un devis exact ; Luxora Villa répond sur WhatsApp, généralement dans l'heure.",
      },
    ],
    image: "/lovable-uploads/villa-garden-balcony-hero.webp",
    imageAlt: "Luxora Villa is a luxury private pool villa in Grand Baie, Mauritius",
    imageAltFr: "Luxora Villa est une villa de luxe avec piscine privée à Grand Baie, Île Maurice",
    body: [
      {
        type: "p",
        text: "Mauritius is world-renowned for its pristine white-sand beaches, crystal-clear turquoise lagoons, and lush volcanic landscapes. While luxury resorts have traditionally dominated the island's tourism, renting a private villa in Mauritius has become the preferred choice for discerning travellers, multi-generational families, and groups of friends. A private holiday villa provides unparalleled freedom, complete privacy, cost-effective luxury, and a genuine home-away-from-home feeling.",
        textFr:
          "L'Île Maurice est mondialement connue pour ses plages de sable blanc immaculé, ses lagons turquoise cristallins et ses paysages volcaniques luxuriants. Alors que les complexes hôteliers de luxe ont traditionnellement dominé le tourisme de l'île, louer une villa privée à l'Île Maurice est devenu le choix privilégié des voyageurs exigeants, des familles multigénérationnelles et des groupes d'amis. Une villa de vacances privée offre une liberté inégalée, une intimité totale, un luxe abordable et une véritable sensation de chez-soi.",
      },
      {
        type: "h2",
        text: "Why Rent a Villa in Mauritius Over a Resort?",
        textFr: "Pourquoi louer une villa à l'Île Maurice plutôt qu'un hôtel ?",
      },
      {
        type: "p",
        text: "When you choose a premium private villa Mauritius experience, you gain exclusive access to facilities without sharing. There is no waking up early to reserve sun loungers by the pool, no crowded buffet lines, and no rigid schedules. You can enjoy your morning coffee by your private swimming pool in absolute peace.",
        textFr:
          "Lorsque vous choisissez une expérience de villa de luxe à l'Île Maurice, vous bénéficiez d'un accès exclusif à des installations sans les partager. Pas besoin de vous lever tôt pour réserver des transats au bord de la piscine, pas de files d'attente au buffet et pas d'horaires rigides. Vous pouvez savourer votre café matinal au bord de votre piscine privée en toute tranquillité.",
      },
      {
        type: "ul",
        items: [
          "Exclusive Use: The entire property, private pool, and outdoor areas are exclusively yours.",
          "More Space: Multiple bedrooms, fully-equipped kitchens, and separate living/dining spaces.",
          "Cost Efficiency: For families or small groups, renting a villa is significantly cheaper per person than booking multiple resort rooms.",
          "Authentic Island Living: Stay in residential coastal lanes, buy fresh local produce, and experience Mauritius like a local.",
        ],
        itemsFr: [
          "Usage exclusif : L'ensemble de la propriété, la piscine privée et les espaces extérieurs sont exclusivement à vous.",
          "Plus d'espace : Plusieurs chambres, cuisine entièrement équipée et salons/salles à manger séparés.",
          "Rapport qualité-prix : Pour les familles ou les groupes, louer une villa est nettement moins cher par personne que de réserver plusieurs chambres d'hôtel.",
          "Vie insulaire authentique : Séjournez dans des quartiers résidentiels côtiers, achetez des produits frais locaux et vivez l'Île Maurice comme un habitant.",
        ],
      },
      {
        type: "h2",
        text: "Choosing the Right Location: North, South, East or West?",
        textFr: "Choisir le bon emplacement : Nord, Sud, Est ou Ouest ?",
      },
      {
        type: "p",
        text: "The island's coastlines differ greatly. The East Coast is known for exclusive five-star enclaves but can get very windy during winter. The South is rugged, wild, and ideal for nature lovers. The West Coast, particularly Flic en Flac, is popular for beautiful sunsets and calm waters.",
        textFr:
          "Les côtes de l'île diffèrent grandement. La côte Est est connue pour ses adresses exclusives mais peut être très venteuse en hiver. Le Sud est sauvage, escarpé et idéal pour les amoureux de la nature. La côte Ouest, notamment Flic en Flac, est réputée pour ses magnifiques couchers de soleil et ses eaux calmes.",
      },
      {
        type: "p",
        text: "However, the North of Mauritius (Grand Baie, Pereybere, Trou aux Biches) is widely considered the ultimate destination. It boasts the island's best microclimate (warm and sheltered year-round), the highest concentration of top-rated sandy beaches, excellent supermarkets, diverse restaurants, and vibrant local life.",
        textFr:
          "Cependant, le Nord de l'Île Maurice (Grand Baie, Pereybère, Trou aux Biches) est largement considéré comme la destination idéale. Il bénéficie du meilleur microclimat de l'île (chaud et abrité toute l'année), de la plus forte concentration de plages de sable fin, d'excellents supermarchés, de restaurants variés et d'une vie locale animée.",
      },
      {
        type: "h2",
        text: "Key Amenities to Look For in a Mauritius Villa",
        textFr: "Les équipements indispensables dans une villa à l'Île Maurice",
      },
      {
        type: "p",
        text: "To ensure a seamless stay, ensure your chosen villa Mauritius rental includes these essential amenities:",
        textFr:
          "Pour garantir un séjour parfait, assurez-vous que votre location de villa à l'Île Maurice comprenne ces équipements essentiels :",
      },
      {
        type: "ul",
        items: [
          "A Pristine Private Pool & Jacuzzi: Crucial for cooling off during hot tropical afternoons.",
          "Air Conditioning: Essential in all bedrooms for a comfortable night's rest.",
          "Fully Equipped Kitchen: Enables you to cook fresh local seafood, tropical fruits, and save on dining out.",
          "High-Speed Wi-Fi: Perfect for remote work, streaming, and sharing your holiday moments.",
          "Secure Private Parking: Important if you plan to hire a car to explore the island.",
        ],
        itemsFr: [
          "Une piscine privée et un jacuzzi : Indispensables pour se rafraîchir pendant les après-midi tropicaux.",
          "Climatisation : Essentielle dans toutes les chambres pour un sommeil confortable.",
          "Cuisine entièrement équipée : Permet de cuisiner des fruits de mer locaux, des fruits tropicaux et d'économiser sur les restaurants.",
          "Wi-Fi haut débit : Parfait pour le télétravail, le streaming et le partage de vos photos de vacances.",
          "Parking privé sécurisé : Important si vous prévoyez de louer une voiture pour explorer l'île.",
        ],
      },
      {
        type: "h2",
        text: "What's Included When You Rent a Villa in Mauritius?",
        textFr: "Qu'est-ce qui est inclus dans une location de villa à l'Île Maurice ?",
      },
      {
        type: "p",
        text: "It depends on the villa, so always ask before you book. Most villas on the island fall into two groups. Self-catering villas give you the whole house and you look after yourselves, like a home of your own. Staffed villas come with a housekeeper and sometimes a cook, and the price reflects that.",
        textFr:
          "Cela dépend de la villa, alors posez toujours la question avant de réserver. La plupart des villas de l'île se rangent en deux catégories. Les villas en gestion libre vous laissent toute la maison et vous vous organisez comme chez vous. Les villas avec personnel incluent une femme de ménage et parfois un cuisinier, ce qui se reflète dans le prix.",
      },
      {
        type: "p",
        text: "In a self-catering villa you can usually expect:",
        textFr: "Dans une villa en gestion libre, vous pouvez généralement compter sur :",
      },
      {
        type: "ul",
        items: [
          "Exclusive use of the house, garden and pool for the whole stay.",
          "Bed linen and towels.",
          "A fully equipped kitchen, so you can cook or bring food back from the market.",
          "WiFi, air conditioning and parking.",
        ],
        itemsFr: [
          "L'usage exclusif de la maison, du jardin et de la piscine pendant tout le séjour.",
          "Le linge de lit et les serviettes.",
          "Une cuisine entièrement équipée, pour cuisiner ou rapporter des produits du marché.",
          "Le WiFi, la climatisation et le parking.",
        ],
      },
      {
        type: "p",
        text: "Things worth checking before you pay: whether electricity and air conditioning are included in the rate, whether the tourist fee is added on arrival, and whether airport transfers can be arranged.",
        textFr:
          "Avant de payer, vérifiez si l'électricité et la climatisation sont comprises dans le tarif, si la taxe touristique est ajoutée à l'arrivée et si un transfert aéroport peut être organisé.",
      },
      {
        type: "h2",
        text: "Do Mauritius Villa Rentals Include Housekeeping and a Cook?",
        textFr: "Les villas à l'Île Maurice incluent-elles le ménage et un cuisinier ?",
      },
      {
        type: "p",
        text: "Not always. Large luxury villas, often on the west and east coasts, include daily housekeeping and can offer a private chef, which adds to the price. Many smaller villas are self-catering, with no housekeeping during the stay and no cook. Guests get complete privacy and a lower rate in return.",
        textFr:
          "Pas toujours. Les grandes villas de luxe, souvent sur les côtes ouest et est, incluent le ménage quotidien et peuvent proposer un chef privé, ce qui augmente le prix. Beaucoup de villas plus petites sont en gestion libre, sans ménage pendant le séjour et sans cuisinier. En échange, les voyageurs profitent d'une intimité totale et d'un tarif plus bas.",
      },
      {
        type: "p",
        text: "Luxora Villa is self-catering: there is no housekeeping during your stay and no chef. The kitchen is fully equipped, and Grand Baie has dozens of restaurants and a large supermarket at La Croisette within a short drive, so eating well is easy without staff.",
        textFr:
          "Luxora Villa est en gestion libre : pas de ménage pendant le séjour et pas de chef. La cuisine est entièrement équipée et Grand Baie compte des dizaines de restaurants ainsi qu'un grand supermarché à La Croisette, à quelques minutes en voiture. Bien manger sans personnel est donc très simple.",
      },
      {
        type: "h2",
        text: "How Much Does It Cost to Rent a Villa in Mauritius for Two Weeks?",
        textFr: "Combien coûte la location d'une villa à l'Île Maurice pour deux semaines ?",
      },
      {
        type: "p",
        text: "There is no single price, because villa rates move with the dates and the length of stay. These are the things that change the total the most:",
        textFr:
          "Il n'y a pas de prix unique, car les tarifs varient selon les dates et la durée du séjour. Voici ce qui fait le plus varier le total :",
      },
      {
        type: "ul",
        items: [
          "Season: the December and January festive period and school holidays are the busiest and most expensive weeks.",
          "Length of stay: rates are set per stay, so a two-week booking is priced differently from a weekend.",
          "Staff: a staffed villa with housekeeping and a cook costs more than a self-catering one.",
          "Size and location: more bedrooms and beachfront plots cost more.",
          "Extras: airport transfers, car hire and the tourist fee collected at check-in.",
          "Booking channel: booking direct with the owner avoids platform fees.",
        ],
        itemsFr: [
          "La saison : les fêtes de décembre et janvier et les vacances scolaires sont les semaines les plus demandées et les plus chères.",
          "La durée : le tarif est calculé par séjour, donc deux semaines ne se calculent pas comme un week-end.",
          "Le personnel : une villa avec ménage et cuisinier coûte plus cher qu'une villa en gestion libre.",
          "La taille et l'emplacement : plus de chambres ou un accès direct à la plage font monter le prix.",
          "Les extras : transfert aéroport, location de voiture et taxe touristique perçue à l'arrivée.",
          "Le canal de réservation : réserver en direct avec le propriétaire évite les frais de plateforme.",
        ],
      },
      {
        type: "p",
        text: "For an exact figure, send your dates to the villa owner. At Luxora Villa you can message the host on WhatsApp with your dates and number of guests and get a personal quote, usually within the hour.",
        textFr:
          "Pour un montant exact, envoyez vos dates au propriétaire. Chez Luxora Villa, envoyez vos dates et le nombre de voyageurs à l'hôte sur WhatsApp et recevez un devis personnalisé, généralement dans l'heure.",
      },
      {
        type: "h2",
        text: "Luxora Villa: Your Premium Private Pool Villa in Grand Baie",
        textFr: "Luxora Villa : Votre villa de luxe avec piscine privée à Grand Baie",
      },
      {
        type: "p",
        text: "If you want to experience the absolute best of Mauritius, Luxora Villa in Pereybere, Grand Baie is a brand new, modern 3-bedroom private holiday home designed for ultimate relaxation. Rated an exceptional 9.3/10, it features a crystal-clear private pool, a soothing jacuzzi, a magnificent rooftop terrace with panoramic sunset views, and state-of-the-art kitchen appliances. Situated in a peaceful lane, it is just a 5-minute drive from the pristine Pereybere Public Beach, Grand Baie marina, high-end shopping at La Croisette, and the region's finest eateries.",
        textFr:
          "Si vous souhaitez vivre le meilleur de l'Île Maurice, Luxora Villa à Pereybère, Grand Baie, est une villa de vacances moderne et neuve de 3 chambres conçue pour une détente absolue. Notée un exceptionnel 9,3/10, elle dispose d'une piscine privée cristalline, d'un jacuzzi apaisant, d'un magnifique toit-terrasse avec vue panoramique sur le coucher du soleil et d'une cuisine haut de gamme. Située dans une rue calme, elle se trouve à seulement 5 minutes en voiture de la plage de Pereybère, de la marina de Grand Baie, du centre commercial La Croisette et des meilleurs restaurants.",
      },
    ],
  },
  {
    slug: "villa-or-hotel-in-mauritius",
    title: "Villa or Hotel in Mauritius? An Honest Comparison",
    titleFr: "Villa ou hôtel à l'Île Maurice ? Le comparatif honnête",
    description: "Private villa or resort hotel in Mauritius? Space, privacy, food, service, cost per person and safety compared, with who each option suits best.",
    descriptionFr: "Villa privée ou hôtel à l'Île Maurice ? Espace, intimité, repas, services, coût par personne et sécurité comparés, et à qui convient chaque option.",
    excerpt: "Both can make a wonderful holiday. Here is how a private villa and a resort hotel really compare, and how to tell which one fits your trip.",
    excerptFr: "Les deux peuvent offrir des vacances magnifiques. Voici comment une villa privée et un hôtel se comparent vraiment, et comment savoir lequel convient à votre séjour.",
    category: "Travel planning",
    categoryFr: "Planification",
    readingMinutes: 6,
    datePublished: "2026-10-15",
    dateUpdated: "2026-10-15",
    image: "/lovable-uploads/villa-pool-exterior.webp",
    imageAlt: "Private pool and garden of a holiday villa in Grand Baie, Mauritius",
    imageAltFr: "Piscine privée et jardin d'une villa de vacances à Grand Baie, Île Maurice",
    body: [
      { type: "p", text: "Mauritius has some of the best resort hotels in the Indian Ocean, and a growing number of private holiday villas. Neither is better in every case. The right choice depends on who you are travelling with, how you like to spend your days and what matters most to you on holiday.", textFr: "L'Île Maurice compte certains des plus beaux hôtels de l'océan Indien, et de plus en plus de villas de vacances privées. Aucune option n'est meilleure dans tous les cas. Le bon choix dépend de vos compagnons de voyage, de la façon dont vous aimez passer vos journées et de ce qui compte le plus pour vous en vacances." },
      { type: "h2", text: "Space and privacy", textFr: "Espace et intimité" },
      { type: "p", text: "This is where a villa stands apart. You have the whole house, garden and pool to yourselves, with separate bedrooms, a living room and outdoor space to spread out. There is no queue for sun loungers and nobody else in the pool. In a hotel you share the pool, the beach and the restaurants with other guests, and a family usually needs two rooms or a suite.", textFr: "C'est là que la villa se distingue. Vous avez toute la maison, le jardin et la piscine pour vous seuls, avec des chambres séparées, un salon et des espaces extérieurs pour vous étaler. Pas de course aux transats et personne d'autre dans la piscine. À l'hôtel, la piscine, la plage et les restaurants sont partagés avec les autres clients, et une famille a souvent besoin de deux chambres ou d'une suite." },
      { type: "h2", text: "Food and daily rhythm", textFr: "Repas et rythme de la journée" },
      { type: "p", text: "Hotels make eating easy: breakfast is ready, and half board or all inclusive means you never have to think about meals. The trade-off is fixed times and the same restaurants every day. A villa gives you a full kitchen, so you can have breakfast when you wake up, cook fresh fish from the market, and still go out to the many restaurants of the area in the evening. Families with young children often find this freedom the biggest advantage.", textFr: "L'hôtel simplifie les repas : le petit-déjeuner est servi, et en demi-pension ou en formule tout compris vous n'avez jamais à y penser. La contrepartie, ce sont des horaires fixes et les mêmes restaurants chaque jour. Une villa vous offre une cuisine complète : petit-déjeuner à votre réveil, poisson frais du marché, et toujours la possibilité de sortir le soir dans les nombreux restaurants de la région. Pour les familles avec de jeunes enfants, cette liberté est souvent le principal avantage." },
      { type: "h2", text: "Service and facilities", textFr: "Services et équipements" },
      { type: "p", text: "A resort offers daily housekeeping, a reception desk around the clock, kids' clubs, a spa, water sports and often a private stretch of beach. A villa offers fewer services, but a good host is a phone call or a WhatsApp message away for local advice, airport transfers or anything that comes up. If having everything on site matters to you, a hotel is hard to beat.", textFr: "Un hôtel propose le ménage quotidien, une réception jour et nuit, un club enfants, un spa, des sports nautiques et souvent une plage réservée. Une villa offre moins de services, mais un bon hôte est joignable par téléphone ou WhatsApp pour des conseils, un transfert aéroport ou tout imprévu. Si avoir tout sur place est important pour vous, l'hôtel reste difficile à battre." },
      { type: "h2", text: "Cost per person", textFr: "Coût par personne" },
      { type: "p", text: "For couples, a hotel and a villa can come out similar. The difference grows with the size of the group: a three-bedroom villa shared by a family or friends often costs less per person than three hotel rooms, and cooking some of your meals lowers the total further. Always compare the full price for your dates, including cleaning, the tourist fee and any extras, rather than the nightly rate alone.", textFr: "Pour un couple, hôtel et villa peuvent revenir au même prix. L'écart se creuse avec la taille du groupe : une villa de trois chambres partagée en famille ou entre amis coûte souvent moins cher par personne que trois chambres d'hôtel, et préparer une partie des repas réduit encore la note. Comparez toujours le prix total pour vos dates, ménage, taxe de séjour et suppléments compris, plutôt que le seul prix par nuit." },
      { type: "h2", text: "Who each option suits", textFr: "À qui convient chaque option" },
      { type: "ul", items: ["A villa suits families, groups of friends, couples travelling together, longer stays and anyone who values privacy and freedom.", "A hotel suits travellers who want everything taken care of, short stays, honeymooners looking for spa and fine dining on site, and those who want to be right on the beach."], itemsFr: ["La villa convient aux familles, aux groupes d'amis, aux couples qui voyagent ensemble, aux longs séjours et à tous ceux qui recherchent intimité et liberté.", "L'hôtel convient à ceux qui veulent tout trouver sur place, aux courts séjours, aux jeunes mariés en quête de spa et de gastronomie, et à ceux qui veulent être directement sur la plage."] },
      { type: "h2", text: "How to book a villa safely", textFr: "Comment réserver une villa en toute sécurité" },
      { type: "p", text: "Look for a villa with verified reviews on a platform such as Booking.com or Google, and check that the photos match. Before paying, ask for the full price in writing, what is included and the cancellation terms. Paying through a known platform, or directly to an owner whose listing and reviews you can verify, protects you. Be wary of offers that are far cheaper than everything else or that ask you to pay a stranger by transfer.", textFr: "Choisissez une villa avec des avis vérifiés sur une plateforme comme Booking.com ou Google, et vérifiez que les photos correspondent. Avant de payer, demandez par écrit le prix total, ce qui est inclus et les conditions d'annulation. Payer via une plateforme connue, ou directement à un propriétaire dont l'annonce et les avis sont vérifiables, vous protège. Méfiez-vous des offres beaucoup moins chères que toutes les autres ou qui vous demandent de payer un inconnu par virement." },
    ],
    faq: [
      { q: "Is a villa cheaper than a hotel in Mauritius?", a: "For families and groups, usually yes per person, because one villa replaces several hotel rooms and you can cook some meals. For a couple the cost is often similar. Compare the total price for your dates, including fees.", qFr: "Une villa est-elle moins chère qu'un hôtel à l'Île Maurice ?", aFr: "Pour les familles et les groupes, généralement oui par personne, car une villa remplace plusieurs chambres d'hôtel et vous pouvez cuisiner. Pour un couple, le coût est souvent comparable. Comparez le prix total pour vos dates, frais compris." },
      { q: "Is it safe to book a villa online in Mauritius?", a: "Yes, if you book a villa with verified reviews, get the price and conditions in writing, and pay through a known platform or an owner whose listing you can verify.", qFr: "Est-il sûr de réserver une villa en ligne à l'Île Maurice ?", aFr: "Oui, si vous choisissez une villa avec des avis vérifiés, obtenez le prix et les conditions par écrit, et payez via une plateforme connue ou un propriétaire dont l'annonce est vérifiable." },
    ],
  },
  {
    slug: "pereybere-beach-guide",
    title: "Pereybere Beach, Mauritius: A Local's Guide",
    titleFr: "Plage de Pereybère, Île Maurice : le guide local",
    description: "Everything you need for a day at Pereybere Beach in the north of Mauritius: swimming, snorkelling, food, parking, the best time to go and nearby beaches.",
    descriptionFr: "Tout pour une journée à la plage de Pereybère, dans le nord de l'Île Maurice : baignade, snorkeling, où manger, stationnement, meilleur moment et plages voisines.",
    excerpt: "A small public beach with a calm turquoise lagoon, food stalls behind the sand and a real local atmosphere. Here is how to make the most of it.",
    excerptFr: "Une petite plage publique au lagon turquoise et calme, des stands de nourriture juste derrière le sable et une vraie ambiance locale. Voici comment en profiter.",
    category: "Beaches",
    categoryFr: "Plages",
    readingMinutes: 5,
    datePublished: "2026-10-15",
    dateUpdated: "2026-10-15",
    image: "/lovable-uploads/17d507de-ba3a-4058-abe3-c10f9cde1650.webp",
    imageAlt: "Sunset over the lagoon near Pereybere Beach, North Mauritius",
    imageAltFr: "Coucher de soleil sur le lagon près de la plage de Pereybère, nord de l'Île Maurice",
    body: [
      { type: "p", text: "Pereybere is one of the favourite beaches in the north of Mauritius, for visitors and Mauritians alike. It sits between Grand Baie and Cap Malheureux, a few minutes' drive from the centre of Grand Baie. The public beach is a short curve of white sand, around 400 metres long, facing a calm turquoise lagoon protected by the reef.", textFr: "Pereybère est l'une des plages préférées du nord de l'Île Maurice, des visiteurs comme des Mauriciens. Elle se trouve entre Grand Baie et Cap Malheureux, à quelques minutes en voiture du centre de Grand Baie. La plage publique forme une courte anse de sable blanc d'environ 400 mètres, face à un lagon turquoise et calme protégé par le récif." },
      { type: "h2", text: "Swimming", textFr: "Baignade" },
      { type: "p", text: "The water inside the reef is usually calm and shallow close to the shore, which makes Pereybere a good beach for children and relaxed swimmers. Boats use a channel marked by buoys, so stay inside the swimming area. There is no guarantee of a lifeguard on duty, so keep an eye on children and avoid swimming in rough weather.", textFr: "À l'intérieur du récif, l'eau est généralement calme et peu profonde près du bord, ce qui fait de Pereybère une bonne plage pour les enfants et les nageurs tranquilles. Les bateaux empruntent un chenal balisé par des bouées : restez dans la zone de baignade. La présence d'un maître-nageur n'est pas garantie, alors surveillez les enfants et évitez de vous baigner par mauvais temps." },
      { type: "h2", text: "Snorkelling", textFr: "Snorkeling" },
      { type: "p", text: "The rocky points on either side of the beach are the easiest places to snorkel, with reef fish such as surgeonfish, butterflyfish and wrasses. Bring your own mask and snorkel, as rental is not always available, and water shoes for the rocks. Snorkel on calm days, stay away from the boat channel and never touch the coral.", textFr: "Les pointes rocheuses de part et d'autre de la plage sont les endroits les plus faciles pour faire du snorkeling, avec des poissons de récif comme les poissons-chirurgiens, poissons-papillons et labres. Apportez votre masque et votre tuba, la location n'étant pas toujours possible, ainsi que des chaussures d'eau pour les rochers. Choisissez une journée calme, restez à l'écart du chenal des bateaux et ne touchez jamais le corail." },
      { type: "h2", text: "Where to eat", textFr: "Où manger" },
      { type: "p", text: "Food is one of the joys of Pereybere. Food stalls and vans behind the beach sell affordable local snacks, and a row of restaurants and cafés lines the road opposite, from casual grills to seafood. A simple picnic of fresh fruit and local snacks on the sand is hard to beat.", textFr: "La nourriture est l'un des plaisirs de Pereybère. Des stands et camionnettes derrière la plage proposent des snacks locaux à petit prix, et une rangée de restaurants et cafés borde la route en face, des grillades simples aux fruits de mer. Un pique-nique de fruits frais et de spécialités locales sur le sable est difficile à battre." },
      { type: "h2", text: "When to go", textFr: "Quand y aller" },
      { type: "p", text: "Weekday mornings are the quietest. At weekends and on public holidays the beach is lively with Mauritian families and groups of friends, and it fills up by mid-morning, so arrive early if you want shade and an easy parking spot along the road. Late afternoon is lovely too, when the light softens and the day visitors head home.", textFr: "Les matinées en semaine sont les plus calmes. Le week-end et les jours fériés, la plage s'anime avec les familles et groupes d'amis mauriciens et se remplit dès le milieu de matinée : arrivez tôt pour profiter de l'ombre et vous garer facilement le long de la route. La fin d'après-midi est aussi très agréable, quand la lumière s'adoucit et que les visiteurs repartent." },
      { type: "h2", text: "What to bring", textFr: "Quoi apporter" },
      { type: "ul", items: ["Reef-safe sunscreen, a hat and water: the sun is strong all year.", "Mask, snorkel and water shoes.", "Cash for the food stalls.", "A beach mat or towel; shade under the trees goes quickly at weekends."], itemsFr: ["Crème solaire respectueuse des récifs, chapeau et eau : le soleil est fort toute l'année.", "Masque, tuba et chaussures d'eau.", "De l'argent liquide pour les stands de nourriture.", "Une natte ou une serviette ; l'ombre sous les arbres part vite le week-end."] },
      { type: "h2", text: "Nearby beaches and sights", textFr: "Plages et sites à proximité" },
      { type: "p", text: "If Pereybere is busy, Bain Boeuf beach is a short drive north and usually quieter. Further on, Cap Malheureux has its famous red-roofed church and views of Coin de Mire island. Grand Baie, with its shops, restaurants and boat trips to the northern islands, is just to the south.", textFr: "Si Pereybère est bondée, la plage de Bain Boeuf, un peu plus au nord, est généralement plus calme. Plus loin, Cap Malheureux et sa célèbre église au toit rouge offrent une vue sur l'île du Coin de Mire. Grand Baie, avec ses boutiques, ses restaurants et ses excursions en bateau vers les îles du nord, se trouve juste au sud." },
      { type: "h2", text: "Staying near Pereybere Beach", textFr: "Séjourner près de la plage de Pereybère" },
      { type: "p", text: "Luxora Villa is a 3-bedroom villa with a private pool, about a 5-minute drive from Pereybere Beach. It is a quiet base for spending mornings on the beach and afternoons by your own pool, with Grand Baie's restaurants close by.", textFr: "Luxora Villa est une villa de 3 chambres avec piscine privée, à environ 5 minutes en voiture de la plage de Pereybère. Un point de chute au calme pour passer la matinée à la plage et l'après-midi au bord de votre propre piscine, avec les restaurants de Grand Baie tout proches." },
    ],
    faq: [
      { q: "Is Pereybere Beach good for children?", a: "Yes. The lagoon is usually calm and shallow near the shore. Stay inside the swimming area away from the boat channel, and watch children closely as a lifeguard is not guaranteed.", qFr: "La plage de Pereybère convient-elle aux enfants ?", aFr: "Oui. Le lagon est généralement calme et peu profond près du bord. Restez dans la zone de baignade, loin du chenal des bateaux, et surveillez bien les enfants, la présence d'un maître-nageur n'étant pas garantie." },
      { q: "Can you snorkel at Pereybere?", a: "Yes, around the rocky points on either side of the beach, on calm days. Bring your own mask and water shoes, and keep away from the boat channel.", qFr: "Peut-on faire du snorkeling à Pereybère ?", aFr: "Oui, autour des pointes rocheuses de part et d'autre de la plage, par temps calme. Apportez votre masque et des chaussures d'eau, et restez à l'écart du chenal des bateaux." },
    ],
  },
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
    image:
      "https://images.unsplash.com/photo-1712045266359-dccdbffc6075?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Grand Baie beach with palm trees and boats in northern Mauritius",
    imageAltFr: "Plage de Grand Baie avec palmiers et bateaux dans le nord de l'Île Maurice",
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
        text: "Grand Baie is a culinary hotspot. Enjoy fresh grilled fish at waterfront dining spots with sunset views, or visit cozy cafes for casual pasta, burgers, and cocktails. For Mauritian street food, head to the food trucks near Sunset Boulevard after 6pm and try dholl puri, mine frit, and gato piment.",
        textFr:
          "Grand Baie est un haut lieu de la gastronomie. Savourez du poisson frais grillé dans des restaurants au bord de l'eau face au coucher du soleil, ou visitez des cafés chaleureux pour des pâtes, burgers et cocktails décontractés. Pour la street food mauricienne, rendez-vous aux food trucks près de Sunset Boulevard après 18h et goûtez aux dholl puris, mines frits et gâteaux piments.",
      },
      {
        type: "h2",
        text: "Nightlife",
        textFr: "Vie nocturne",
      },
      {
        type: "p",
        text: "Grand Baie has the busiest nightlife in Mauritius. You will find lively beach bars, lounge clubs, and early evening spots with live music and cocktails right on the sand.",
        textFr:
          "Grand Baie possède la vie nocturne la plus animée de l'Île Maurice. Vous y trouverez des bars de plage animés, des clubs branchés et des adresses conviviales proposant de la musique live et des cocktails les pieds dans le sable.",
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
    image:
      "https://images.unsplash.com/photo-1686740297492-7ab8937a2548?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aerial view of Cap Malheureux red-roofed church on the shore in northern Mauritius",
    imageAltFr:
      "Vue aérienne de l'église au toit rouge de Cap Malheureux sur la côte nord de l'Île Maurice",
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
    image:
      "https://images.unsplash.com/photo-1686740348132-c8883cba00a0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aerial view of a pristine beach and turquoise lagoon in Mauritius",
    imageAltFr: "Vue aérienne d'une plage de sable blanc et d'un lagon turquoise à l'Île Maurice",
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
    image:
      "https://images.unsplash.com/photo-1513415431848-a433b3de449f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aerial view of the famous underwater waterfall near Le Morne Brabant, Mauritius",
    imageAltFr: "Vue aérienne de la célèbre cascade sous-marine près du Morne Brabant, Île Maurice",
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
        text: "The capital is thirty-five minutes south. Visit the Central Market, the Blue Penny Museum, and enjoy lunch at a local waterfront cafe.",
        textFr:
          "La capitale se situe à trente-cinq minutes au sud. Visitez le Marché Central, le Blue Penny Museum et déjeunez dans un café local au bord de l'eau.",
      },
      {
        type: "h3",
        text: "3. Chamarel and the Seven Coloured Earths",
        textFr: "3. Chamarel et la Terre des Sept Couleurs",
      },
      {
        type: "p",
        text: "A full day to the southwest. Combine with the Chamarel waterfall, a local rum distillery tour, and lunch at a hilltop restaurant with a breathtaking panoramic view over the coast.",
        textFr:
          "Une journée complète dans le sud-ouest. À associer avec la cascade de Chamarel, la visite d'une distillerie de rhum locale et un déjeuner dans un restaurant sur les hauteurs avec une vue panoramique imprenable sur la côte.",
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
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80",
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
      "Getting around Mauritius is convenient with car rentals, taxis, and on-demand ride-hailing services. Here is what you need to know to travel around from the airport to the north coast.",
    excerptFr:
      "Se déplacer à l'Île Maurice est très simple grâce aux locations de voiture, aux taxis et aux services de VTC. Voici ce qu'il faut savoir pour voyager sereinement de l'aéroport à la côte nord.",
    category: "Travel planning",
    categoryFr: "Planification",
    readingMinutes: 6,
    datePublished: "2026-03-01",
    dateUpdated: "2026-07-24",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
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
        text: "Ride-hailing apps like Uber are available in Mauritius, alongside local options like Yugo and taxi services. You can easily book a ride on your phone. Otherwise, ask your host at Luxora Villa for a trusted taxi driver; most guests book the same driver for their airport transfers and day trips.",
        textFr:
          "Les applications de VTC comme Uber sont disponibles à l'Île Maurice, aux côtés d'options locales comme Yugo et des services de taxi traditionnels. Vous pouvez facilement réserver une course depuis votre téléphone. Vous pouvez également demander à notre hôte à Luxora Villa de vous recommander un chauffeur de confiance.",
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
