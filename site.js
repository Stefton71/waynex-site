(function () {
  const STORAGE_KEY = 'waynex-site-lang';
  const DEFAULT_LANG = 'it';
  // Update when the App Store listing is live (App Store Connect → App Information → Apple ID).
  const APP_STORE_URL = 'https://apps.apple.com/app/waynex/id0000000000';

  const copy = {
    it: {
      htmlLang: 'it',
      metaDescription:
        'Waynex — il compagno di viaggio per gruppi. Itinerari, luoghi, documenti e spese in un unico posto.',
      pageTitle: 'Waynex — Il tuo viaggio, tutto in un posto',
      navPrivacy: 'Privacy',
      navTerms: 'Termini',
      navContact: 'Contatti',
      heroBadge: 'iPhone · iPad · Apple Watch',
      heroTitle: 'Il tuo viaggio.<br>Tutto in un unico posto.',
      heroLead:
        'Organizza itinerari, luoghi, documenti e spese di gruppo — anche offline. Condividi con iCloud e viaggiate insieme senza caos.',
      heroCta: 'Scarica su App Store',
      f1Title: 'Pianifica giorno per giorno',
      f1Body:
        'Timeline, mappa e luoghi da scoprire. Tieni tutto sotto controllo prima e durante il viaggio.',
      f2Title: 'Viaggia in gruppo',
      f2Body:
        'Condividi il viaggio via iCloud. Tutti vedono lo stesso piano, aggiornato in tempo reale.',
      f3Title: 'Spese divise',
      f3Body:
        'Registra le spese e calcola chi deve cosa a chi. Niente più fogli Excel in vacanza.',
      f4Title: 'Documenti e PDF',
      f4Body:
        'Biglietti, prenotazioni e report PDF del viaggio. Importa da share sheet o fotocamera.',
      f5Title: 'Crea con AI',
      f5Body:
        'Genera un itinerario con l’AI, importalo in Waynex e personalizzalo con il tuo gruppo.',
      f6Title: 'Apple Watch',
      f6Body:
        'Checklist e info del viaggio a polso. Complemento perfetto per quando sei in giro.',
      screenshotsTitle: 'Guarda l’app',
      screenshotsNote:
        'Schermate reali dall’app Waynex su iPhone.',
      screenshotTrips: 'I tuoi viaggi',
      screenshotPlan: 'Pianificazione',
      screenshotBudget: 'Spese di gruppo',
      plansTitle: 'Piani Waynex',
      plansNote:
        'Confronta Free, Plus e Max nell’app. Prezzi e abbonamenti sono quelli mostrati da Apple sul tuo App Store locale.',
      planPopular: 'Popolare',
      plansCta: 'Vedi prezzi su App Store',
      free1: 'Fino a 3 viaggi attivi',
      free2: 'Pianificazione e mappa',
      free3: 'Spese di gruppo',
      free4: 'Icone sui luoghi',
      plus1: 'Viaggi illimitati',
      plus2: 'Condivisione (fino a 3, 1 editor)',
      plus3: 'Report PDF',
      plus4: 'Crea e importa viaggi con AI',
      plus5: 'Anteprime sui luoghi',
      max1: 'Tutto di Plus',
      max2: 'Foto Google sui luoghi',
      max3: 'Modifica insieme (fino a 9)',
      max4: 'Fino a 400 foto al mese',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Termini di utilizzo',
      privacyHref: '/privacy/',
      termsHref: '/terms/',
      homeHref: '/',
    },
    en: {
      htmlLang: 'en',
      metaDescription:
        'Waynex — your group travel companion. Itineraries, places, documents, and expenses in one place.',
      pageTitle: 'Waynex — Your trip, all in one place',
      navPrivacy: 'Privacy',
      navTerms: 'Terms',
      navContact: 'Contact',
      heroBadge: 'iPhone · iPad · Apple Watch',
      heroTitle: 'Your trip.<br>All in one place.',
      heroLead:
        'Plan itineraries, places, documents, and group expenses — even offline. Share via iCloud and travel together without the chaos.',
      heroCta: 'Download on the App Store',
      f1Title: 'Plan day by day',
      f1Body:
        'Timeline, map, and places to discover. Stay on top of everything before and during your trip.',
      f2Title: 'Travel as a group',
      f2Body:
        'Share the trip via iCloud. Everyone sees the same plan, updated in real time.',
      f3Title: 'Split expenses',
      f3Body:
        'Track spending and see who owes what. No more vacation spreadsheets.',
      f4Title: 'Documents & PDF',
      f4Body:
        'Tickets, bookings, and trip PDF reports. Import from the share sheet or camera.',
      f5Title: 'Create with AI',
      f5Body:
        'Generate an itinerary with AI, import it into Waynex, and refine it with your group.',
      f6Title: 'Apple Watch',
      f6Body:
        'Checklists and trip info on your wrist. Handy when you are out exploring.',
      screenshotsTitle: 'See the app',
      screenshotsNote: 'Real screenshots from Waynex on iPhone.',
      screenshotTrips: 'Your trips',
      screenshotPlan: 'Day-by-day planning',
      screenshotBudget: 'Group expenses',
      plansTitle: 'Waynex plans',
      plansNote:
        'Compare Free, Plus, and Max in the app. Prices and subscriptions are whatever Apple shows in your local App Store.',
      planPopular: 'Popular',
      plansCta: 'See pricing on the App Store',
      free1: 'Up to 3 active trips',
      free2: 'Planning and map',
      free3: 'Group expenses',
      free4: 'Place icons',
      plus1: 'Unlimited trips',
      plus2: 'Sharing (up to 3, 1 editor)',
      plus3: 'PDF report',
      plus4: 'Create & import trips with AI',
      plus5: 'Place previews',
      max1: 'Everything in Plus',
      max2: 'Google place photos',
      max3: 'Co-edit together (up to 9)',
      max4: 'Up to 400 photos per month',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Use',
      privacyHref: '/en/privacy/',
      termsHref: '/en/terms/',
      homeHref: '/',
    },
  };

  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'it' || stored === 'en') return stored;
    const browser = (navigator.language || '').toLowerCase();
    return browser.startsWith('it') ? 'it' : 'en';
  }

  function applyLang(lang) {
    const strings = copy[lang];
    if (!strings) return;

    document.documentElement.lang = strings.htmlLang;
    document.title = strings.pageTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', strings.metaDescription);

    document.querySelectorAll('[data-app-store]').forEach((node) => {
      node.setAttribute('href', APP_STORE_URL);
    });

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const value = strings[key];
      if (value == null) return;
      if (key === 'heroTitle') {
        node.innerHTML = value;
      } else if (node.tagName === 'A' && key.endsWith('Href')) {
        // skip — handled below
      } else {
        node.textContent = value;
      }
    });

    const privacyLink = document.querySelector('[data-link="privacy"]');
    const termsLink = document.querySelector('[data-link="terms"]');
    const homeLink = document.querySelector('[data-link="home"]');
    if (privacyLink) privacyLink.setAttribute('href', strings.privacyHref);
    if (termsLink) termsLink.setAttribute('href', strings.termsHref);
    if (homeLink) homeLink.setAttribute('href', strings.homeHref);

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLang();
    applyLang(lang);

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        applyLang(btn.getAttribute('data-lang-btn'));
      });
    });
  });
})();
