import type { ReactNode } from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER } from "@/components/WhatsAppButton";
import { useLang } from "@/i18n/LanguageContext";

/**
 * The digital guest guide, opened from the QR code in the villa. Facts were checked in October 2026; anything that
 * could not be confirmed (opening hours, some phone numbers) is left out or points to Google Maps. Codes, the Wi-Fi
 * password and anything private stay on the printed card in the villa, never on this public page.
 */

const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-luxury-beige py-8">
      <h2 className="mb-4 font-serif text-2xl font-bold text-luxury-dark">{title}</h2>
      <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function Place({ name, query, children }: { name: string; query: string; children?: ReactNode }) {
  const { t } = useLang();
  return (
    <li className="flex items-start gap-2">
      <MapPin className="mt-1 h-4 w-4 shrink-0 text-luxury-gold" aria-hidden />
      <span>
        <a
          href={maps(query)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-luxury-dark underline decoration-luxury-gold/50 underline-offset-2 hover:decoration-luxury-gold"
        >
          {name}
        </a>
        {children ? (
          <span>
            {t(": ", "\u00a0: ")}
            {children}
          </span>
        ) : null}
      </span>
    </li>
  );
}

function Call({ number, label }: { number: string; label: string }) {
  return (
    <a
      href={`tel:${number.replace(/[^\d+]/g, "")}`}
      className="inline-flex items-center gap-1 font-semibold text-luxury-dark underline decoration-luxury-gold/50 underline-offset-2"
    >
      <Phone className="h-3.5 w-3.5" aria-hidden />
      {label}
    </a>
  );
}

export default function GuestGuide() {
  const { t } = useLang();
  // French puts a non-breaking space before a colon.
  const colon = t(": ", "\u00a0: ");
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("Hello, we are staying at Luxora Villa and have a question: ", "Bonjour, nous séjournons à Luxora Villa et avons une question : "))}`;
  const sections: [string, string][] = [
    ["contact", t("Contact", "Contact")],
    ["arrival", t("Arrival", "Arrivée")],
    ["villa", t("The villa", "La villa")],
    ["emergency", t("Emergencies", "Urgences")],
    ["shops", t("Shops", "Courses")],
    ["beaches", t("Beaches", "Plages")],
    ["eat", t("Eat", "Restaurants")],
    ["do", t("Things to do", "À faire")],
    ["around", t("Getting around", "Se déplacer")],
    ["practical", t("Practical", "Pratique")],
    ["leaving", t("Leaving", "Départ")],
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <header className="bg-luxury-beige/40 py-10">
          <div className="container mx-auto max-w-3xl px-4">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-luxury-gold">
              {t("Guest guide", "Guide des voyageurs")}
            </p>
            <h1 className="font-serif text-3xl font-bold text-luxury-dark sm:text-4xl">
              {t("Welcome to Luxora Villa", "Bienvenue à Luxora Villa")}
            </h1>
            <p className="mt-3 text-gray-700">
              {t(
                "Everything you need for your stay in Pereybere, on one page. Keep it open on your phone; the Wi-Fi details are on the welcome card in the villa.",
                "Tout ce qu'il faut pour votre séjour à Pereybère, sur une seule page. Gardez-la ouverte sur votre téléphone ; les codes Wi-Fi sont sur la carte de bienvenue dans la villa.",
              )}
            </p>
            <nav
              aria-label={t("Guide sections", "Sections du guide")}
              className="mt-5 flex flex-wrap gap-2"
            >
              {sections.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="rounded-full border border-luxury-gold/40 bg-white px-3 py-1 text-sm text-luxury-dark hover:bg-luxury-gold hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className="container mx-auto max-w-3xl px-4 pb-16">
          <Section id="contact" title={t("Your hosts", "Vos hôtes")}>
            <p>
              {t(
                "Message us on WhatsApp for anything at all, day or night in an emergency.",
                "Écrivez-nous sur WhatsApp pour toute question, de jour comme de nuit en cas d'urgence.",
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp +230 5922 6558
              </a>
              <a
                href="tel:+23059226558"
                className="inline-flex items-center gap-2 rounded-lg border border-luxury-dark px-4 py-2 font-semibold text-luxury-dark hover:bg-luxury-dark hover:text-white"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {t("Call", "Appeler")}
              </a>
            </div>
          </Section>

          <Section id="arrival" title={t("Arrival and departure", "Arrivée et départ")}>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                {t(
                  "Check-in from 15:00. Check-out by 11:00.",
                  "Arrivée à partir de 15h00. Départ avant 11h00.",
                )}
              </li>
              <li>
                {t(
                  "Two secure parking spaces inside the property.",
                  "Deux places de parking sécurisées dans la propriété.",
                )}
              </li>
              <li>
                {t(
                  "From the airport (SSR, MRU) it is about 75 minutes by road. We can arrange a private transfer: ask us before you fly.",
                  "Depuis l'aéroport (SSR, MRU), comptez environ 75 minutes de route. Nous pouvons organiser un transfert privé : demandez-nous avant votre vol.",
                )}
              </li>
              <li>
                {t(
                  "Mauritius tourist fee: EUR 3 per person per night for guests aged 12 and over, collected at check-in. Children under 12, Mauritian citizens and residents are exempt.",
                  "Taxe touristique de Maurice : 3 EUR par personne et par nuit pour les voyageurs de 12 ans et plus, perçue à l'arrivée. Les enfants de moins de 12 ans, les citoyens mauriciens et les résidents en sont exemptés.",
                )}{" "}
                <a
                  href="https://mra.mu/index.php/eservices1/tourist-fee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  MRA
                </a>
              </li>
            </ul>
          </Section>

          <Section id="villa" title={t("In the villa", "Dans la villa")}>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                {t(
                  "Wi-Fi: the network name and password are on the welcome card.",
                  "Wi-Fi : le nom du réseau et le mot de passe sont sur la carte de bienvenue.",
                )}
              </li>
              <li>
                {t(
                  "Smart TV with Netflix, and Google Home.",
                  "Smart TV avec Netflix, et Google Home.",
                )}
              </li>
              <li>
                {t(
                  "Kitchen: oven, hob, dishwasher and a Nespresso machine.",
                  "Cuisine : four, plaques, lave-vaisselle et machine Nespresso.",
                )}
              </li>
              <li>
                {t(
                  "All three bedrooms are air-conditioned. Close windows and doors while it runs; it cools faster and saves power.",
                  "Les trois chambres sont climatisées. Fermez portes et fenêtres quand la climatisation fonctionne : la pièce refroidit plus vite et vous économisez de l'énergie.",
                )}
              </li>
              <li>
                {t(
                  "One bathroom has a rain shower; the other has the spa jacuzzi bath with a handheld shower.",
                  "Une salle de bain a une douche à effet pluie ; l'autre a la baignoire jacuzzi avec une douchette.",
                )}
              </li>
              <li>
                {t(
                  "Rooftop terrace: the best spot for sunset.",
                  "Toit-terrasse : le meilleur endroit pour le coucher de soleil.",
                )}
              </li>
              <li>
                {t(
                  "Please keep an eye on children around the pool at all times.",
                  "Merci de surveiller les enfants autour de la piscine en permanence.",
                )}
              </li>
              <li>
                {t(
                  "Bed linen and towels are provided. Housekeeping during the stay is not included. No pets, please.",
                  "Linge de lit et serviettes fournis. Le ménage pendant le séjour n'est pas inclus. Les animaux ne sont pas acceptés.",
                )}
              </li>
            </ul>
          </Section>

          <Section id="emergency" title={t("Emergencies", "Urgences")}>
            <ul className="space-y-2">
              <li>
                {t("Police", "Police")}
                {colon}
                <Call number="999" label="999" /> {t("or", "ou")} <Call number="112" label="112" />
              </li>
              <li>
                {t("Ambulance (SAMU)", "Ambulance (SAMU)")}
                {colon}
                <Call number="114" label="114" />
              </li>
              <li>
                {t("Fire", "Pompiers")}
                {colon}
                <Call number="115" label="115" /> {t("or", "ou")} <Call number="995" label="995" />
              </li>
              <li>
                {t(
                  "At sea: call 999 or 112 and ask for the Coast Guard.",
                  "En mer : appelez le 999 ou le 112 et demandez les garde-côtes.",
                )}
              </li>
              <li>
                {t("Police line to report a crime", "Police, signaler un délit")}
                {colon}
                <Call number="148" label="148" />
              </li>
            </ul>
            <ul className="mt-4 space-y-2">
              <Place name="C-Care Grand Baie" query="C-Care Grand Baie Mont Choisy">
                {t(
                  "private hospital at Mont Choisy, about 10 minutes away, emergency department open 24/7.",
                  "hôpital privé à Mont Choisy, à environ 10 minutes, urgences ouvertes 24h/24.",
                )}{" "}
                <Call number="+2306012500" label="+230 601 2500" />
                {" · "}
                {t("ambulance", "ambulance")} <Call number="132" label="132" />
                {". "}
                {t("Its pharmacy, C-Pharma, is on site.", "Sa pharmacie, C-Pharma, est sur place.")}
              </Place>
              <Place name="SSRN Hospital" query="SSRN Hospital Pamplemousses">
                {t("public hospital in Pamplemousses.", "hôpital public à Pamplemousses.")}{" "}
                <Call number="+2302093500" label="+230 209 3500" />
              </Place>
            </ul>
          </Section>

          <Section id="shops" title={t("Shops", "Courses")}>
            <ul className="space-y-2">
              <Place name="Winner's Pereybere" query="Winner's supermarket Pereybere">
                {t(
                  "supermarket on the Royal Road, the closest for daily shopping and fresh bread.",
                  "supermarché sur la route Royale, le plus proche pour les courses et le pain frais.",
                )}
              </Place>
              <Place name="Super U Grand Baie" query="Super U Grand Baie">
                {t(
                  "large hypermarket for a big first shop.",
                  "grand hypermarché pour les premières courses.",
                )}
              </Place>
              <Place name="Intermart, La Croisette" query="Intermart La Croisette Grand Baie">
                {t(
                  "in La Croisette mall, with a pharmacy, banks and a cinema.",
                  "dans le centre commercial La Croisette, avec pharmacie, banques et cinéma.",
                )}
              </Place>
            </ul>
            <p className="text-sm text-gray-500">
              {t(
                "Shops usually open about 9:30 to 19:30 Monday to Saturday, shorter on Sundays. Check opening times on Google Maps.",
                "Les commerces ouvrent en général de 9h30 à 19h30 du lundi au samedi, moins longtemps le dimanche. Vérifiez les horaires sur Google Maps.",
              )}
            </p>
          </Section>

          <Section id="beaches" title={t("Beaches", "Plages")}>
            <ul className="space-y-2">
              <Place
                name={t("Pereybere public beach", "Plage publique de Pereybère")}
                query="Pereybere public beach"
              >
                {t(
                  "5 minutes by car. Calm, shallow swimming inside the reef. The snorkelling reef is about 300 m out where currents run through the gap: go with care.",
                  "à 5 minutes en voiture. Baignade calme et peu profonde à l'intérieur du récif. Le récif pour le snorkeling est à environ 300 m, là où le courant passe dans la passe : prudence.",
                )}
              </Place>
              <Place name="Mont Choisy" query="Mont Choisy beach">
                {t(
                  "long beach with clear, shallow water and water sports. Busy at weekends.",
                  "longue plage à l'eau claire et peu profonde, sports nautiques. Animée le week-end.",
                )}
              </Place>
              <Place name="Trou aux Biches" query="Trou aux Biches public beach">
                {t(
                  "calm lagoon with good snorkelling from the shore, best at the north end.",
                  "lagon calme, bon snorkeling depuis la plage, surtout au nord.",
                )}
              </Place>
              <Place name="Cap Malheureux" query="Cap Malheureux beach">
                {t(
                  "sheltered bay by the red-roofed church. Strong currents at Pointe aux Roches, just north.",
                  "baie abritée près de l'église au toit rouge. Courants forts à la Pointe aux Roches, juste au nord.",
                )}
              </Place>
              <Place name="Bain Boeuf" query="Bain Boeuf beach">
                {t(
                  "small, quiet beach with a calm lagoon.",
                  "petite plage tranquille au lagon calme.",
                )}
              </Place>
              <Place
                name={t("Grand Baie and La Cuvette", "Grand Baie et La Cuvette")}
                query="La Cuvette beach Grand Baie"
              >
                {t(
                  "Grand Baie's beach is busy with boats; La Cuvette, a short walk round the bay, is calmer.",
                  "la plage de Grand Baie est encombrée de bateaux ; La Cuvette, un peu plus loin, est plus calme.",
                )}
              </Place>
            </ul>
            <p className="text-sm text-gray-500">
              {t(
                "Swim in marked areas, never alone, and follow the beach signs. Wear water shoes on the reef (stonefish).",
                "Baignez-vous dans les zones signalées, jamais seul, et suivez les panneaux. Portez des chaussures d'eau sur le récif (poissons-pierres).",
              )}
            </p>
          </Section>

          <Section id="eat" title={t("Where to eat", "Où manger")}>
            <h3 className="font-semibold text-luxury-dark">
              {t("In Pereybere, a few minutes away", "À Pereybère, à quelques minutes")}
            </h3>
            <ul className="space-y-2">
              <Place name="New Hai Hua Restaurant" query="New Hai Hua Restaurant Pereybere">
                {t("Chinese, just near the villa.", "chinois, tout près de la villa.")}
              </Place>
              <Place name="Café Pereybere" query="Cafe Pereybere">
                {t(
                  "Chinese and Asian, opposite Pereybere public beach.",
                  "chinois et asiatique, en face de la plage publique de Pereybère.",
                )}
              </Place>
              <Place name="Coco Piment" query="Coco Piment Pereybere">
                {t("Chinese and international.", "chinois et international.")}
              </Place>
              <Place name="Wang Thai" query="Wang Thai Pereybere">
                {t(
                  "Thai, a long-standing local favourite near the beach.",
                  "thaï, une adresse appréciée depuis longtemps, près de la plage.",
                )}
              </Place>
              <Place name="Grill & Chill" query="Grill & Chill Pereybere">
                {t(
                  "seafood and grills by Pereybere beach.",
                  "fruits de mer et grillades près de la plage.",
                )}
              </Place>
              <Place name="Paradise Corner" query="Paradise Corner Pereybere">
                {t(
                  "Belgian café, good for breakfast and brunch.",
                  "café belge, idéal pour le petit-déjeuner et le brunch.",
                )}
              </Place>
              <Place name="Kalatua" query="Kalatua Pereybere">
                {t(
                  "French and healthy, for a nicer dinner.",
                  "cuisine française et saine, pour un dîner plus chic.",
                )}
              </Place>
            </ul>
            <h3 className="pt-2 font-semibold text-luxury-dark">
              {t("In Grand Baie", "À Grand Baie")}
            </h3>
            <ul className="space-y-2">
              <Place name="La Rougaille Creole" query="La Rougaille Creole Grand Baie">
                {t(
                  "Creole food and seafood, small, book ahead:",
                  "cuisine créole et fruits de mer, petite salle, réservez :",
                )}{" "}
                <Call number="+2302638449" label="+230 263 8449" />
              </Place>
              <Place name="Ti Kouloir" query="Ti Kouloir Grand Baie">
                {t(
                  "Mauritian street food (dumplings, noodles), cheap and quick.",
                  "street food mauricienne (boulettes, nouilles), simple et pas cher.",
                )}
              </Place>
              <Place name="Le Capitaine" query="Le Capitaine restaurant Grand Baie">
                {t("seafood with a sea view.", "fruits de mer avec vue sur la mer.")}
              </Place>
            </ul>
            <p className="text-sm text-gray-500">
              {t(
                "Opening days change; check on Google Maps before you go.",
                "Les jours d'ouverture changent ; vérifiez sur Google Maps avant d'y aller.",
              )}
            </p>
          </Section>

          <Section id="do" title={t("Things to do", "À faire")}>
            <ul className="space-y-2">
              <Place
                name={t("Catamaran to the northern islets", "Catamaran vers les îlots du nord")}
                query="catamaran Grand Baie Coin de Mire Flat Island"
              >
                {t(
                  "full-day trips from Grand Baie past Coin de Mire to Flat Island and Ilot Gabriel, usually with a barbecue lunch.",
                  "sorties à la journée depuis Grand Baie, le long du Coin de Mire jusqu'à l'île Plate et l'îlot Gabriel, souvent avec déjeuner barbecue.",
                )}
              </Place>
              <Place
                name={t("Diving and snorkelling trips", "Plongée et snorkeling")}
                query="dive centre Grand Baie"
              >
                {t(
                  "several dive centres in Grand Baie and Pereybere.",
                  "plusieurs centres de plongée à Grand Baie et Pereybère.",
                )}
              </Place>
              <Place
                name={t("SSR Botanic Garden, Pamplemousses", "Jardin botanique SSR, Pamplemousses")}
                query="SSR Botanic Garden Pamplemousses"
              >
                {t(
                  "giant water lilies and centuries-old trees, about 25 minutes away. Open roughly 8:30 to 17:30.",
                  "nénuphars géants et arbres centenaires, à environ 25 minutes. Ouvert environ de 8h30 à 17h30.",
                )}
              </Place>
              <Place name="L'Aventure du Sucre" query="L'Aventure du Sucre Pamplemousses">
                {t(
                  "the story of Mauritian sugar, with tastings. Monday to Saturday, 10:00 to 16:00.",
                  "l'histoire du sucre mauricien, avec dégustation. Du lundi au samedi, de 10h00 à 16h00.",
                )}
              </Place>
              <Place
                name={t(
                  "Cap Malheureux red-roofed church",
                  "Église au toit rouge du Cap Malheureux",
                )}
                query="Notre-Dame Auxiliatrice Cap Malheureux"
              >
                {t(
                  "free to visit, with a view of Coin de Mire.",
                  "visite libre, avec vue sur le Coin de Mire.",
                )}
              </Place>
              <Place name={t("Grand Baie Bazaar", "Bazar de Grand Baie")} query="Grand Baie Bazaar">
                {t(
                  "crafts, sarongs and spices; bargaining is expected.",
                  "artisanat, paréos et épices ; on négocie.",
                )}
              </Place>
              <Place
                name={t("La Croisette and Sunset Boulevard", "La Croisette et Sunset Boulevard")}
                query="Sunset Boulevard Grand Baie"
              >
                {t("shopping and cafés in Grand Baie.", "shopping et cafés à Grand Baie.")}
              </Place>
            </ul>
          </Section>

          <Section id="around" title={t("Getting around", "Se déplacer")}>
            <ul className="list-disc space-y-1 pl-5">
              <li>{t("Mauritius drives on the left.", "À Maurice, on roule à gauche.")}</li>
              <li>
                {t(
                  "Taxis usually have no meter: agree the fare before you get in. The Uber app works too.",
                  "Les taxis n'ont en général pas de compteur : convenez du prix avant de monter. L'application Uber fonctionne aussi.",
                )}
              </li>
              <li>
                {t(
                  "Bus 215 (air-conditioned express) runs from Grand Baie to Port Louis about every 30 minutes.",
                  "Le bus 215 (express climatisé) relie Grand Baie à Port-Louis environ toutes les 30 minutes.",
                )}
              </li>
            </ul>
          </Section>

          <Section id="practical" title={t("Good to know", "Bon à savoir")}>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                {t(
                  "Power is 230 V. Sockets are UK-style (type G) and European (type C).",
                  "Le courant est en 230 V. Prises de type anglais (G) et européen (C).",
                )}
              </li>
              <li>
                {t(
                  "Money: Mauritian rupees (MUR). MCB and SBM cash machines in Grand Baie. Cards are widely accepted; keep some cash for small shops and taxis.",
                  "Monnaie : roupie mauricienne (MUR). Distributeurs MCB et SBM à Grand Baie. Les cartes sont bien acceptées ; gardez du liquide pour les petits commerces et les taxis.",
                )}
              </li>
              <li>
                {t(
                  "Tap water is treated, but most people drink bottled or boiled water.",
                  "L'eau du robinet est traitée, mais on boit plutôt de l'eau en bouteille ou bouillie.",
                )}
              </li>
              <li>
                {t(
                  "The sun is strong: SPF 30 or more, a hat, and shade from 10:00 to 15:00. Reef-safe sunscreen protects the lagoon.",
                  "Le soleil tape fort : indice 30 minimum, chapeau, et ombre de 10h00 à 15h00. Une crème solaire sans danger pour le récif protège le lagon.",
                )}
              </li>
              <li>
                {t(
                  "Use mosquito repellent, especially from November to April.",
                  "Utilisez un anti-moustique, surtout de novembre à avril.",
                )}
              </li>
              <li>
                {t(
                  "Tipping is optional; round up or leave about 10% for good service.",
                  "Le pourboire est libre ; arrondissez ou laissez environ 10 % pour un bon service.",
                )}
              </li>
            </ul>
          </Section>

          <Section id="leaving" title={t("Before you leave", "Avant de partir")}>
            <p>
              {t(
                "Check-out is by 11:00. Message us on WhatsApp if you would like a later departure and we will see what the calendar allows.",
                "Le départ se fait avant 11h00. Écrivez-nous sur WhatsApp si vous souhaitez partir plus tard ; nous verrons ce que le calendrier permet.",
              )}
            </p>
            <p>
              {t(
                "We hope you loved your stay. A few words about it, on Booking.com or to us on WhatsApp, help future guests find us. Thank you!",
                "Nous espérons que vous avez aimé votre séjour. Quelques mots sur Booking.com ou sur WhatsApp aident de futurs voyageurs à nous trouver. Merci !",
              )}
            </p>
          </Section>

          <p className="pt-4 text-xs text-gray-400">
            {t(
              "Details checked in October 2026. Opening times change; please confirm before you go.",
              "Informations vérifiées en octobre 2026. Les horaires changent ; vérifiez avant de vous déplacer.",
            )}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
