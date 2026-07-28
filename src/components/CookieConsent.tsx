import { useState, useEffect } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Cookie, X, Check, Shield, Info, Settings, HelpCircle } from "lucide-react";

type ConsentChoice = {
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  analytics_storage: "granted" | "denied";
  personalization_storage: "granted" | "denied";
  functionality_storage: "granted";
  security_storage: "granted";
};

export default function CookieConsent() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [customizeMode, setCustomizeMode] = useState(false);

  // Custom toggles
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("luxora_cookie_consent");
      if (!saved) {
        setShowBanner(true);
      } else {
        const parsed = JSON.parse(saved);
        if (parsed) {
          setAnalyticsAllowed(parsed.analytics_storage === "granted");
          setMarketingAllowed(parsed.ad_storage === "granted");
        }
      }
    } catch (e) {
      // ignore
      setShowBanner(true);
    }
  }, []);

  if (!mounted) return null;

  const updateConsentState = (choice: ConsentChoice) => {
    try {
      localStorage.setItem("luxora_cookie_consent", JSON.stringify(choice));
    } catch (e) {
      // ignore
    }

    // Call global gtag if available
    const win = window as unknown as {
      gtag?: (command: string, action: string, choice: ConsentChoice) => void;
    };
    if (typeof win.gtag === "function") {
      try {
        win.gtag("consent", "update", choice);
      } catch (e) {
        // ignore
      }
    }

    setShowBanner(false);
    setCustomizeMode(false);
  };

  const handleAcceptAll = () => {
    const allGranted: ConsentChoice = {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
      personalization_storage: "granted",
      functionality_storage: "granted",
      security_storage: "granted",
    };
    setAnalyticsAllowed(true);
    setMarketingAllowed(true);
    updateConsentState(allGranted);
  };

  const handleDeclineAll = () => {
    const allDenied: ConsentChoice = {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      personalization_storage: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    };
    setAnalyticsAllowed(false);
    setMarketingAllowed(false);
    updateConsentState(allDenied);
  };

  const handleSaveCustom = () => {
    const customChoice: ConsentChoice = {
      ad_storage: marketingAllowed ? "granted" : "denied",
      ad_user_data: marketingAllowed ? "granted" : "denied",
      ad_personalization: marketingAllowed ? "granted" : "denied",
      analytics_storage: analyticsAllowed ? "granted" : "denied",
      personalization_storage: analyticsAllowed ? "granted" : "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    };
    updateConsentState(customChoice);
  };

  return (
    <>
      {/* Tiny compliance widget to reopen settings at any time */}
      {!showBanner && (
        <button
          onClick={() => {
            setShowBanner(true);
            setCustomizeMode(true);
          }}
          className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-luxury-dark text-luxury-gold shadow-lg transition hover:scale-105 hover:bg-luxury-dark/95 focus:outline-none focus:ring-2 focus:ring-luxury-gold"
          title={t("Cookie Settings", "Paramètres des cookies")}
          aria-label={t("Configure cookie settings", "Configurer les paramètres des cookies")}
        >
          <Cookie className="h-6 w-6 animate-pulse" />
        </button>
      )}

      {/* Main Consent Banner Container */}
      {showBanner && (
        <div
          className="fixed bottom-0 right-0 left-0 z-50 p-4 md:bottom-6 md:right-6 md:left-auto md:max-w-md md:p-0"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-luxury-dark/95 text-white shadow-2xl backdrop-blur-md">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-luxury-gold" />
                <h2 id="cookie-title" className="font-serif text-lg font-semibold tracking-wide">
                  {customizeMode
                    ? t("Cookie Preferences", "Préférences des cookies")
                    : t("We Value Your Privacy", "Nous respectons votre vie privée")}
                </h2>
              </div>
              <button
                onClick={handleDeclineAll}
                className="rounded-full p-1 text-gray-400 hover:bg-white/5 hover:text-white transition"
                aria-label={t("Dismiss banner", "Fermer le bandeau")}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="px-6 py-5 max-h-[60vh] overflow-y-auto">
              {!customizeMode ? (
                // Simple View
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t(
                    'We use cookies to enhance your browsing experience, analyze site traffic, and support our marketing efforts. By clicking "Accept All", you consent to our use of all cookies.',
                    "Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et soutenir nos efforts marketing. En cliquant sur « Tout accepter », vous consentez à notre utilisation de tous les cookies.",
                  )}
                </p>
              ) : (
                // Customize View
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 leading-relaxed mb-2">
                    {t(
                      "Manage your cookie consent options below. Necessary cookies are required for core site features.",
                      "Gérez vos options de consentement aux cookies ci-dessous. Les cookies nécessaires sont indispensables au fonctionnement du site.",
                    )}
                  </p>

                  {/* Necessary category */}
                  <div className="flex items-start justify-between rounded-lg bg-white/5 p-3">
                    <div className="mr-3">
                      <div className="flex items-center gap-1.5 font-medium text-sm text-gray-200">
                        <Shield className="h-3.5 w-3.5 text-luxury-gold" />
                        {t("Necessary Cookies", "Cookies nécessaires")}
                      </div>
                      <p className="mt-1 text-xs text-gray-400 leading-normal">
                        {t(
                          "Required for secure log-in, security, and basic web functionality.",
                          "Indispensables pour la sécurité, la connexion et les fonctionnalités de base du site.",
                        )}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-luxury-gold">
                      {t("Always Active", "Toujours actif")}
                    </span>
                  </div>

                  {/* Analytics category */}
                  <div className="flex items-start justify-between rounded-lg bg-white/5 p-3">
                    <div className="mr-3">
                      <div className="flex items-center gap-1.5 font-medium text-sm text-gray-200">
                        <Info className="h-3.5 w-3.5 text-luxury-gold" />
                        {t("Analytics Cookies", "Cookies analytiques")}
                      </div>
                      <p className="mt-1 text-xs text-gray-400 leading-normal">
                        {t(
                          "Enables us to measure and analyze anonymous visitor behavior and traffic sources to optimize performance.",
                          "Nous permettent de mesurer et analyser de manière anonyme le trafic et le comportement des visiteurs pour optimiser le site.",
                        )}
                      </p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center mt-0.5">
                      <input
                        type="checkbox"
                        checked={analyticsAllowed}
                        onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="peer h-5 w-9 rounded-full bg-white/20 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:bg-gray-400 after:transition-all after:content-[''] peer-checked:bg-luxury-gold peer-checked:after:translate-x-full peer-checked:after:bg-white peer-focus:outline-none"></div>
                    </label>
                  </div>

                  {/* Marketing category */}
                  <div className="flex items-start justify-between rounded-lg bg-white/5 p-3">
                    <div className="mr-3">
                      <div className="flex items-center gap-1.5 font-medium text-sm text-gray-200">
                        <Settings className="h-3.5 w-3.5 text-luxury-gold" />
                        {t("Marketing Cookies", "Cookies publicitaires")}
                      </div>
                      <p className="mt-1 text-xs text-gray-400 leading-normal">
                        {t(
                          "Allows personalized advertising on third-party platforms (like Google) and helps evaluate ad performance.",
                          "Permettent d'afficher des publicités personnalisées sur des plateformes tierces (comme Google) et d'évaluer leur performance.",
                        )}
                      </p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center mt-0.5">
                      <input
                        type="checkbox"
                        checked={marketingAllowed}
                        onChange={(e) => setMarketingAllowed(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="peer h-5 w-9 rounded-full bg-white/20 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:bg-gray-400 after:transition-all after:content-[''] peer-checked:bg-luxury-gold peer-checked:after:translate-x-full peer-checked:after:bg-white peer-focus:outline-none"></div>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="flex flex-col gap-2 border-t border-white/5 px-6 py-4 sm:flex-row sm:justify-end sm:gap-3">
              {!customizeMode ? (
                <>
                  <button
                    onClick={() => setCustomizeMode(true)}
                    className="order-3 inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition sm:order-1"
                  >
                    <Settings className="h-4 w-4" />
                    {t("Customize", "Personnaliser")}
                  </button>
                  <button
                    onClick={handleDeclineAll}
                    className="order-2 inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition sm:order-2"
                  >
                    {t("Decline All", "Tout refuser")}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="order-1 inline-flex items-center justify-center rounded-lg bg-luxury-gold px-5 py-2 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition sm:order-3"
                  >
                    {t("Accept All", "Tout accepter")}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setCustomizeMode(false)}
                    className="order-2 inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition sm:order-1"
                  >
                    {t("Back", "Retour")}
                  </button>
                  <button
                    onClick={handleSaveCustom}
                    className="order-1 inline-flex items-center justify-center rounded-lg bg-luxury-gold px-5 py-2 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition sm:order-2"
                  >
                    {t("Save Choices", "Enregistrer")}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
