import { useState } from "react";
import { Waves, Landmark, Sailboat, Car } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

// Driving distances measured on Google Maps from the villa pin on 10 Nov 2026.
// Times are typical and change with traffic.
const ORIGIN = "-20.003798,57.607427";
const directions = (q: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=${ORIGIN}&destination=${encodeURIComponent(q)}`;

type Place = {
  name: string;
  desc: string;
  dist: string;
  time: string;
  q: string;
};

export default function ExploreNorth() {
  const { t } = useLang();
  const min = (n: number) => t(`${n} min drive`, `${n} min en voiture`);

  const tabs: { id: string; label: string; icon: typeof Waves; intro?: string; places: Place[] }[] = [
    {
      id: "beaches",
      label: t("Beaches", "Plages"),
      icon: Waves,
      places: [
        {
          name: t("Pereybere Beach", "Plage de Pereybère"),
          desc: t(
            "A small, calm lagoon that is good for swimming and snorkelling, with snack stalls by the road.",
            "Un petit lagon calme, idéal pour nager et faire du snorkeling, avec des marchands au bord de la route.",
          ),
          dist: "3.3 km",
          time: min(7),
          q: "Pereybere Public Beach, Grand Baie",
        },
        {
          name: t("Anse La Raie", "Anse La Raie"),
          desc: t(
            "A wide, shallow lagoon facing Coin de Mire, popular with kitesurfers.",
            "Un grand lagon peu profond face au Coin de Mire, très prisé des kitesurfeurs.",
          ),
          dist: "3.9 km",
          time: min(6),
          q: "Anse La Raie Beach",
        },
        {
          name: t("Grand Baie Beach", "Plage de Grand Baie"),
          desc: t(
            "The beach in the bay itself, next to the restaurants, bars and boat departures.",
            "La plage dans la baie, à côté des restaurants, des bars et des départs en bateau.",
          ),
          dist: "3.5 km",
          time: min(9),
          q: "Grand Baie Public Beach, Grand Baie",
        },
        {
          name: t("Grand Gaube", "Grand Gaube"),
          desc: t(
            "A quiet fishing village beach on the north east coast, away from the crowds.",
            "Une plage de village de pêcheurs au calme, sur la côte nord est.",
          ),
          dist: "9.0 km",
          time: min(14),
          q: "Grand Gaube Public Beach, Grand Gaube",
        },
        {
          name: t("Mont Choisy", "Mont Choisy"),
          desc: t(
            "One of the longest white sand beaches on the island, shaded by casuarina trees.",
            "L'une des plus longues plages de sable blanc de l'île, ombragée par les filaos.",
          ),
          dist: "8.7 km",
          time: min(16),
          q: "Mon Choisy Public Beach",
        },
        {
          name: t("Trou aux Biches", "Trou aux Biches"),
          desc: t(
            "Calm, clear water and some of the best snorkelling on the north west coast.",
            "Une eau calme et claire, parmi les meilleurs spots de snorkeling du nord ouest.",
          ),
          dist: "9.1 km",
          time: min(19),
          q: "Trou aux Biches Public Beach",
        },
      ],
    },
    {
      id: "sights",
      label: t("Sights", "À visiter"),
      icon: Landmark,
      places: [
        {
          name: t("Cap Malheureux church", "Église du Cap Malheureux"),
          desc: t(
            "The red roofed chapel of Notre-Dame Auxiliatrice, facing Coin de Mire. Beautiful at sunset.",
            "La chapelle au toit rouge de Notre-Dame Auxiliatrice, face au Coin de Mire. Magnifique au coucher du soleil.",
          ),
          dist: "3.1 km",
          time: min(6),
          q: "Notre-Dame Auxiliatrice de Cap Malheureux",
        },
        {
          name: t("Pamplemousses Botanical Garden", "Jardin botanique de Pamplemousses"),
          desc: t(
            "The Sir Seewoosagur Ramgoolam garden, famous for its giant water lilies and old palms.",
            "Le jardin Sir Seewoosagur Ramgoolam, célèbre pour ses nénuphars géants et ses palmiers.",
          ),
          dist: "16.1 km",
          time: min(20),
          q: "Sir Seewoosagur Ramgoolam Botanical Garden, Pamplemousses",
        },
        {
          name: t("L'Aventure du Sucre", "L'Aventure du Sucre"),
          desc: t(
            "A museum in an old sugar factory telling the island's story, with sugar and rum tasting.",
            "Un musée dans une ancienne sucrerie qui raconte l'histoire de l'île, avec dégustation de sucres et de rhums.",
          ),
          dist: "16.7 km",
          time: min(21),
          q: "L'Aventure du Sucre, Pamplemousses",
        },
        {
          name: t("Port Louis and the Caudan Waterfront", "Port Louis et le Caudan Waterfront"),
          desc: t(
            "The capital: the central market, then shops and restaurants on the harbour.",
            "La capitale : le marché central, puis les boutiques et restaurants du port.",
          ),
          dist: "30.1 km",
          time: min(44),
          q: "Caudan Waterfront, Port Louis",
        },
      ],
    },
    {
      id: "boats",
      label: t("Boat trips", "Sorties en mer"),
      icon: Sailboat,
      intro: t(
        "Most trips leave from Grand Baie, 3.5 km from the villa (about 9 minutes by car). Book a day or two ahead in December and January.",
        "La plupart des sorties partent de Grand Baie, à 3,5 km de la villa (environ 9 minutes en voiture). Réservez un ou deux jours à l'avance en décembre et janvier.",
      ),
      places: [
        {
          name: t("Catamaran to the northern islets", "Catamaran vers les îlots du nord"),
          desc: t(
            "Full day cruises past Coin de Mire to Flat Island and Ilot Gabriel, usually with a barbecue lunch.",
            "Croisières à la journée le long du Coin de Mire jusqu'à l'île Plate et l'îlot Gabriel, souvent avec déjeuner barbecue.",
          ),
          dist: "3.5 km",
          time: min(9),
          q: "Grand Baie Public Beach, Grand Baie",
        },
        {
          name: t("Diving and snorkelling trips", "Plongée et snorkeling"),
          desc: t(
            "Dive centres in Grand Baie run boat trips to the reefs and wrecks off the north coast.",
            "Les centres de plongée de Grand Baie proposent des sorties vers les récifs et épaves au large du nord.",
          ),
          dist: "3.5 km",
          time: min(9),
          q: "Grand Baie Public Beach, Grand Baie",
        },
        {
          name: t("Glass bottom boats and undersea walks", "Bateau à fond de verre et marche sous-marine"),
          desc: t(
            "An easy way to see the reef without swimming, good for children and non swimmers.",
            "Une façon simple de voir le récif sans nager, idéale pour les enfants et les non nageurs.",
          ),
          dist: "3.5 km",
          time: min(9),
          q: "Grand Baie Public Beach, Grand Baie",
        },
        {
          name: t("Deep sea fishing", "Pêche au gros"),
          desc: t(
            "Half and full day fishing charters leave from the Grand Baie area.",
            "Des sorties de pêche à la demi-journée ou à la journée partent de Grand Baie.",
          ),
          dist: "3.5 km",
          time: min(9),
          q: "Grand Baie Public Beach, Grand Baie",
        },
      ],
    },
  ];

  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((x) => x.id === active) ?? tabs[0];

  return (
    <div className="mt-14">
      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-luxury-dark text-center mb-2">
        {t("Explore the north", "Explorer le nord")}
      </h3>
      <p className="text-gray-600 text-center text-sm mb-6 max-w-2xl mx-auto">
        {t(
          "Beaches, sights and boat trips around the villa. Distances by road from Luxora; tap a place for directions.",
          "Plages, visites et sorties en mer autour de la villa. Distances par la route depuis Luxora ; touchez un lieu pour l'itinéraire.",
        )}
      </p>

      <div
        role="tablist"
        aria-label={t("Explore the north", "Explorer le nord")}
        className="flex justify-center gap-2 mb-6 flex-wrap"
      >
        {tabs.map((x) => {
          const selected = x.id === active;
          return (
            <button
              key={x.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`explore-${x.id}`}
              onClick={() => setActive(x.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                selected
                  ? "bg-luxury-blue text-white shadow"
                  : "bg-white text-luxury-dark hover:bg-white/70"
              }`}
            >
              <x.icon size={16} />
              {x.label}
            </button>
          );
        })}
      </div>

      <div id={`explore-${tab.id}`} role="tabpanel">
        {tab.intro && (
          <p className="text-gray-600 text-center text-sm mb-4 max-w-2xl mx-auto">{tab.intro}</p>
        )}
        <ul className="grid sm:grid-cols-2 gap-4">
          {tab.places.map((p) => (
            <li key={p.name}>
              <a
                href={directions(p.q)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition h-full"
              >
                <div className="shrink-0 bg-luxury-gold rounded-full p-2.5 text-white">
                  <tab.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-semibold text-luxury-dark leading-tight">{p.name}</h4>
                    <span className="shrink-0 font-semibold text-luxury-dark text-sm">{p.dist}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
                  <p className="text-gray-500 text-xs mt-1 inline-flex items-center gap-1">
                    <Car size={12} />
                    {p.time}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
