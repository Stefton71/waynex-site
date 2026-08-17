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
      navScreenshots: 'App',
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
        'Programma e checklist a polso, sincronizzati con iPhone. Richiede Waynex Plus o Max.',
      featureSeeScreen: 'Vedi schermata →',
      featureSeeWatch: 'Vedi Apple Watch →',
      screenshotsTeaserTitle: 'Guarda l’app in azione',
      screenshotsTeaserBody:
        'Schermate ad alta risoluzione: viaggi, timeline, spese, AI e Apple Watch.',
      screenshotsTeaserCta: 'Vedi tutte le schermate →',
      shotsKicker: 'Anteprima app',
      shotsTitle: 'Waynex su iPhone e Apple Watch',
      shotsLead:
        'Schermate reali dall’app — viaggi, timeline, spese condivise e programma al polso.',
      shotNavTrips: 'Viaggi',
      shotNavPlan: 'Pianificazione',
      shotNavSharing: 'Gruppo',
      shotNavBudget: 'Spese',
      shotNavDocuments: 'Documenti',
      shotNavAi: 'AI',
      shotNavWatch: 'Apple Watch',
      shot1Title: 'Tutti i viaggi, un posto solo',
      shot1Body:
        'Crea un viaggio manuale o con l’AI. Vedi date, progresso e destinazione a colpo d’occhio — anche il viaggio demo per provare subito.',
      shot1Caption: 'Lista viaggi',
      shot1Alt: 'Lista viaggi Waynex',
      shot2Title: 'Pianifica giorno per giorno',
      shot2Body:
        'Timeline con luoghi, prenotazioni e attività. Scorri i giorni del viaggio, apri la mappa e tieni tutto organizzato prima e durante il trip.',
      shot2Caption: 'Timeline del viaggio',
      shot2Alt: 'Timeline del viaggio Waynex',
      shot3Title: 'Viaggia in gruppo',
      shot3Body:
        'Condividi il viaggio via iCloud: fino a 4 invitati con Plus (2 editor) o fino a 9 con Max. Tutti vedono lo stesso piano, aggiornato in tempo reale.',
      shot3Caption: 'Viaggi condivisi su iCloud',
      shot3Alt: 'Condivisione viaggio Waynex',
      shot4Title: 'Spese divise in gruppo',
      shot4Body:
        'Registra chi ha pagato cosa e chi deve a chi. Bilanci, saldi e rimborsi restano nel viaggio — niente più fogli Excel in vacanza.',
      shot4Caption: 'Bilanci e spese',
      shot4Alt: 'Spese di gruppo Waynex',
      shot5Title: 'Documenti e PDF',
      shot5Body:
        'Biglietti, prenotazioni e report PDF del viaggio. Importa da share sheet o fotocamera e tieni tutto accanto al programma.',
      shot5Caption: 'Programma e prenotazioni',
      shot5Alt: 'Documenti e programma Waynex',
      shot6Title: 'Crea con AI',
      shot6Body:
        'Genera un itinerario con la tua AI, importa il file JSON in Waynex e personalizzalo con il tuo gruppo. Disponibile con Plus e Max.',
      shot6Caption: 'Importazione viaggio AI',
      shot6Alt: 'Creazione viaggio con AI Waynex',
      watchTitle: 'Apple Watch: programma e checklist al polso',
      watchBody:
        'Timeline del giorno, attività in evidenza e checklist sincronizzata con iPhone. Ideale in movimento — richiede Waynex Plus o Max.',
      watchPoint1: 'Giorni e attività del viaggio attivo',
      watchPoint2: 'Checklist con progresso (es. 9/14)',
      watchPoint3: 'Sincronizzazione automatica con iPhone via iCloud',
      watchCaption: 'Waynex su Apple Watch Ultra',
      watchAlt: 'Waynex su Apple Watch Ultra — timeline Abu Dhabi',
      shotsCtaTitle: 'Provalo tu',
      shotsCtaBody:
        'Scarica Waynex dall’App Store e inizia con il viaggio demo incluso.',
      shotsPageTitle: 'Schermate — Waynex',
      shotsMetaDescription:
        'Schermate Waynex su iPhone e Apple Watch — viaggi, pianificazione, spese e companion al polso.',
      plansTitle: 'Piani Waynex',
      plansNote:
        'Confronta Free, Plus e Max nell’app. Prezzi e abbonamenti sono quelli mostrati da Apple sul tuo App Store locale.',
      planPopular: 'Popolare',
      plansCta: 'Vedi prezzi su App Store',
      free1: '1 viaggio personale',
      free2: 'Pianificazione e mappa',
      free3: 'Spese di gruppo',
      free4: 'Icone sui luoghi',
      plus1: '3 viaggi attivi + 3 archiviati',
      plus2: 'Condivisione (fino a 4, 2 editor)',
      plus3: 'Report PDF',
      plus4: 'Crea e importa viaggi con AI',
      plus5: 'Anteprime sui luoghi',
      plus6: 'Apple Watch (companion)',
      max1: 'Tutto di Plus',
      max2: 'Foto Google sui luoghi',
      max3: 'Modifica insieme (fino a 9, 3 editor)',
      max4: 'Fino a 400 foto Google al mese',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Termini di utilizzo',
      privacyHref: '/privacy/',
      termsHref: '/terms/',
      screenshotsHref: '/screenshots/',
      homeHref: '/',
    },
    en: {
      htmlLang: 'en',
      metaDescription:
        'Waynex — your group travel companion. Itineraries, places, documents, and expenses in one place.',
      pageTitle: 'Waynex — Your trip, all in one place',
      navPrivacy: 'Privacy',
      navTerms: 'Terms',
      navScreenshots: 'App',
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
        'Itinerary and checklist on your wrist, synced from iPhone. Requires Waynex Plus or Max.',
      featureSeeScreen: 'See screenshot →',
      featureSeeWatch: 'See Apple Watch →',
      screenshotsTeaserTitle: 'See the app in action',
      screenshotsTeaserBody:
        'High-resolution screenshots: trips, timeline, expenses, AI, and Apple Watch.',
      screenshotsTeaserCta: 'View all screenshots →',
      shotsKicker: 'App preview',
      shotsTitle: 'Waynex on iPhone and Apple Watch',
      shotsLead:
        'Real screenshots from the app — trips, timeline, shared expenses, and your itinerary on your wrist.',
      shotNavTrips: 'Trips',
      shotNavPlan: 'Planning',
      shotNavSharing: 'Group',
      shotNavBudget: 'Expenses',
      shotNavDocuments: 'Documents',
      shotNavAi: 'AI',
      shotNavWatch: 'Apple Watch',
      shot1Title: 'All your trips in one place',
      shot1Body:
        'Create a trip manually or with AI. See dates, progress, and destination at a glance — including a demo trip to try right away.',
      shot1Caption: 'Trip list',
      shot1Alt: 'Waynex trip list',
      shot2Title: 'Plan day by day',
      shot2Body:
        'Timeline with places, bookings, and activities. Scroll through trip days, open the map, and stay organized before and during travel.',
      shot2Caption: 'Trip timeline',
      shot2Alt: 'Waynex trip timeline',
      shot3Title: 'Travel as a group',
      shot3Body:
        'Share the trip via iCloud: up to 4 invitees on Plus (2 editors) or up to 9 on Max. Everyone sees the same plan, updated in real time.',
      shot3Caption: 'Trips shared via iCloud',
      shot3Alt: 'Waynex trip sharing',
      shot4Title: 'Split group expenses',
      shot4Body:
        'Track who paid for what and who owes whom. Balances and repayments stay in the trip — no more vacation spreadsheets.',
      shot4Caption: 'Balances & expenses',
      shot4Alt: 'Waynex group expenses',
      shot5Title: 'Documents & PDF',
      shot5Body:
        'Tickets, bookings, and trip PDF reports. Import from the share sheet or camera and keep everything next to your itinerary.',
      shot5Caption: 'Itinerary & bookings',
      shot5Alt: 'Waynex documents and itinerary',
      shot6Title: 'Create with AI',
      shot6Body:
        'Generate an itinerary with your AI, import the JSON file into Waynex, and refine it with your group. Available on Plus and Max.',
      shot6Caption: 'AI trip import',
      shot6Alt: 'Waynex AI trip creation',
      watchTitle: 'Apple Watch: itinerary and checklist on your wrist',
      watchBody:
        'Day timeline, highlighted activities, and a checklist synced from iPhone. Perfect on the go — requires Waynex Plus or Max.',
      watchPoint1: 'Days and activities for the active trip',
      watchPoint2: 'Checklist with progress (e.g. 9/14)',
      watchPoint3: 'Automatic sync with iPhone via iCloud',
      watchCaption: 'Waynex on Apple Watch Ultra',
      watchAlt: 'Waynex on Apple Watch Ultra — Abu Dhabi timeline',
      shotsCtaTitle: 'Try it yourself',
      shotsCtaBody:
        'Download Waynex from the App Store and start with the included demo trip.',
      shotsPageTitle: 'Screenshots — Waynex',
      shotsMetaDescription:
        'Waynex screenshots on iPhone and Apple Watch — trips, planning, expenses, and wrist companion.',
      plansTitle: 'Waynex plans',
      plansNote:
        'Compare Free, Plus, and Max in the app. Prices and subscriptions are whatever Apple shows in your local App Store.',
      planPopular: 'Popular',
      plansCta: 'See pricing on the App Store',
      free1: '1 personal trip',
      free2: 'Planning and map',
      free3: 'Group expenses',
      free4: 'Place icons',
      plus1: '3 active + 3 archived trips',
      plus2: 'Sharing (up to 4, 2 editors)',
      plus3: 'PDF report',
      plus4: 'Create & import trips with AI',
      plus5: 'Place previews',
      plus6: 'Apple Watch companion',
      max1: 'Everything in Plus',
      max2: 'Google place photos',
      max3: 'Co-edit together (up to 9, 3 editors)',
      max4: 'Up to 400 Google photos per month',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Use',
      privacyHref: '/en/privacy/',
      termsHref: '/en/terms/',
      screenshotsHref: '/en/screenshots/',
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

    const meta = document.querySelector('meta[name="description"]');
    if (document.body.classList.contains('screenshots-page')) {
      document.title = strings.shotsPageTitle;
      if (meta) meta.setAttribute('content', strings.shotsMetaDescription);
    } else if (strings.pageTitle) {
      document.title = strings.pageTitle;
      if (meta && strings.metaDescription) {
        meta.setAttribute('content', strings.metaDescription);
      }
    }

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

    document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
      const key = node.getAttribute('data-i18n-alt');
      const value = strings[key];
      if (value != null) node.setAttribute('alt', value);
    });

    const privacyLink = document.querySelector('[data-link="privacy"]');
    const termsLink = document.querySelector('[data-link="terms"]');
    const homeLink = document.querySelector('[data-link="home"]');
    document.querySelectorAll('[data-link="screenshots"]').forEach((link) => {
      const hash = link.getAttribute('data-shot-hash');
      link.setAttribute(
        'href',
        hash ? `${strings.screenshotsHref}#${hash}` : strings.screenshotsHref,
      );
    });
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
