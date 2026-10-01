(function () {
  const STORAGE_KEY = 'waynex-site-lang';
  const DEFAULT_LANG = 'it';
  const APP_STORE_URL = 'https://apps.apple.com/app/waynex/id6789250800';

  const copy = {
    it: {
      htmlLang: 'it',
      metaDescription:
        'Planner viaggi di gruppo: itinerari, mappa, spese di gruppo e documenti in un’unica app — anche offline. Apple Watch con Plus o Max. Waynex su iPhone, iPad e Apple Watch.',
      pageTitle: 'Waynex — Planner viaggi: itinerari, mappa, spese e documenti',
      navPrivacy: 'Privacy',
      navTerms: 'Termini',
      navScreenshots: 'App',
      navContact: 'Contatti',
      heroBadge: 'Planner viaggi · anche offline · Apple Watch (Plus/Max)',
      heroTitle: 'Viaggi, itinerari, mappa.<br>Spese e documenti in un’unica app.',
      heroLead:
        'Waynex è il planner per viaggi di gruppo: timeline, mappa, spese condivise e documenti — anche offline. Condividi con iCloud. Apple Watch con Plus o Max.',
      heroCta: 'Scarica su App Store',
      f1Title: 'Itinerari e mappa',
      f1Body:
        'Timeline, mappa e luoghi da scoprire. Tieni tutto sotto controllo prima e durante il viaggio.',
      f2Title: 'Viaggia in gruppo',
      f2Body:
        'Condividi il viaggio via iCloud. Tutti vedono lo stesso piano, aggiornato in tempo reale.',
      f3Title: 'Spese di gruppo',
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
        'Planner viaggi: itinerari, mappa, spese di gruppo, documenti e Apple Watch — schermate reali dall’app.',
      screenshotsTeaserCta: 'Vedi tutte le schermate →',
      shotsKicker: 'Anteprima app',
      shotsTitle: 'Waynex su iPhone e Apple Watch',
      shotsLead:
        'Schermate reali dall’app — viaggi, timeline, spese condivise e programma al polso.',
      shotNavTrips: 'Viaggi',
      shotNavPlan: 'Pianificazione',
      shotNavMap: 'Mappa',
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
      shotMapTitle: 'Mappa e spostamenti del giorno',
      shotMapBody:
        'Percorso del giorno sulla mappa, tappe numerate e timeline sotto. Scorri le attività e la vista segue il viaggio.',
      shotMapCaption: 'Mappa e itinerario',
      shotMapAlt: 'Mappa del giorno e timeline Waynex',
      shot3Title: 'Viaggia in gruppo',
      shot3Body:
        'Condividi il viaggio via iCloud: fino a 4 invitati con Plus (2 editor) o fino a 9 con Max. Tutti vedono lo stesso piano, aggiornato in tempo reale.',
      shot3Caption: 'Condivisione viaggio',
      shot3Alt: 'Condivisione viaggio Waynex',
      shot4Title: 'Spese divise in gruppo',
      shot4Body:
        'Registra chi ha pagato cosa e chi deve a chi. Bilanci, saldi e rimborsi restano nel viaggio — niente più fogli Excel in vacanza.',
      shot4Caption: 'Bilanci e spese',
      shot4Alt: 'Spese di gruppo Waynex',
      shot5Title: 'Documenti e PDF',
      shot5Body:
        'Biglietti, prenotazioni e report PDF del viaggio. Importa da share sheet o fotocamera e tieni tutto accanto al programma.',
      shot5Caption: 'Documenti e biglietti',
      shot5Alt: 'Documenti e programma Waynex',
      shot6Title: 'Crea con AI',
      shot6Body:
        'Genera un itinerario con la tua AI, importa il file JSON in Waynex e personalizzalo con il tuo gruppo. Disponibile con Plus e Max.',
      shot6Caption: 'Crea con AI',
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
      shotsPageTitle: 'Schermate — Waynex planner viaggi',
      shotsMetaDescription:
        'Schermate Waynex: planner viaggi con itinerari, mappa, spese di gruppo e documenti — anche offline. Apple Watch con Plus o Max.',
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
      max2: 'Fino a 5 viaggi archiviati',
      max3: 'Modifica insieme (fino a 9, 3 editor)',
      max4: 'Pensato per viaggi di gruppo',
      infoTitle: 'Un intero viaggio, sempre con voi',
      infoNote: 'Pianifica, viaggia in gruppo e crea itinerari — tutto in un’unica app.',
      info1Alt: 'Waynex: organizzate insieme, partite leggeri — itinerario, spese e biglietti offline',
      info2Alt: 'Waynex: mappa del giorno con tappe in ordine e percorso più breve',
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
        'Trip planner for groups: itineraries, map, group expenses, and documents in one app — even offline. Apple Watch with Plus or Max. Waynex for iPhone, iPad, and Apple Watch.',
      pageTitle: 'Waynex — Trip planner: itineraries, map, expenses & documents',
      navPrivacy: 'Privacy',
      navTerms: 'Terms',
      navScreenshots: 'App',
      navContact: 'Contact',
      heroBadge: 'Trip planner · offline · Apple Watch (Plus/Max)',
      heroTitle: 'Trips, itineraries, map.<br>Expenses and documents in one app.',
      heroLead:
        'Waynex is your group trip planner: timeline, map, shared expenses, and documents — even offline. Share via iCloud. Apple Watch with Plus or Max.',
      heroCta: 'Download on the App Store',
      f1Title: 'Itineraries & map',
      f1Body:
        'Timeline, map, and places to discover. Stay on top of everything before and during your trip.',
      f2Title: 'Travel as a group',
      f2Body:
        'Share the trip via iCloud. Everyone sees the same plan, updated in real time.',
      f3Title: 'Group expenses',
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
        'Trip planner: itineraries, map, group expenses, documents, and Apple Watch — real screenshots from the app.',
      screenshotsTeaserCta: 'View all screenshots →',
      shotsKicker: 'App preview',
      shotsTitle: 'Waynex on iPhone and Apple Watch',
      shotsLead:
        'Real screenshots from the app — trips, timeline, shared expenses, and your itinerary on your wrist.',
      shotNavTrips: 'Trips',
      shotNavPlan: 'Planning',
      shotNavMap: 'Map',
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
      shotMapTitle: 'Map and the day’s movements',
      shotMapBody:
        'See the day’s route on the map, with numbered stops and the timeline underneath. Scroll activities and the view follows the trip.',
      shotMapCaption: 'Map and itinerary',
      shotMapAlt: 'Waynex day map and timeline',
      shot3Title: 'Travel as a group',
      shot3Body:
        'Share the trip via iCloud: up to 4 invitees on Plus (2 editors) or up to 9 on Max. Everyone sees the same plan, updated in real time.',
      shot3Caption: 'Trip sharing',
      shot3Alt: 'Waynex trip sharing',
      shot4Title: 'Split group expenses',
      shot4Body:
        'Track who paid for what and who owes whom. Balances and repayments stay in the trip — no more vacation spreadsheets.',
      shot4Caption: 'Balances & expenses',
      shot4Alt: 'Waynex group expenses',
      shot5Title: 'Documents & PDF',
      shot5Body:
        'Tickets, bookings, and trip PDF reports. Import from the share sheet or camera and keep everything next to your itinerary.',
      shot5Caption: 'Documents & tickets',
      shot5Alt: 'Waynex documents and itinerary',
      shot6Title: 'Create with AI',
      shot6Body:
        'Generate an itinerary with your AI, import the JSON file into Waynex, and refine it with your group. Available on Plus and Max.',
      shot6Caption: 'Create with AI',
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
      shotsPageTitle: 'Screenshots — Waynex trip planner',
      shotsMetaDescription:
        'Waynex screenshots: trip planner with itineraries, map, group expenses, and documents — even offline. Apple Watch with Plus or Max.',
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
      max2: 'Up to 5 archived trips',
      max3: 'Co-edit together (up to 9, 3 editors)',
      max4: 'Built for group trips',
      infoTitle: 'A whole trip, always with you',
      infoNote: 'Plan together, travel as a group, and create itineraries — all in one app.',
      info1Alt: 'Waynex: plan together, travel light — itinerary, expenses and offline tickets',
      info2Alt: 'Waynex: day map with stops in order and the shortest route',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Use',
      privacyHref: '/en/privacy/',
      termsHref: '/en/terms/',
      screenshotsHref: '/en/screenshots/',
      homeHref: '/en/',
    },
    fr: {
      htmlLang: 'fr',
      metaDescription:
        'Planner de voyage en groupe : itinéraires, carte, dépenses partagées et documents dans une seule app — même hors ligne. Apple Watch avec Plus ou Max. Waynex pour iPhone, iPad et Apple Watch.',
      pageTitle: 'Waynex — Planner de voyage : itinéraires, carte, dépenses et documents',
      navPrivacy: 'Confidentialité',
      navTerms: 'Conditions',
      navScreenshots: 'App',
      navContact: 'Contact',
      heroBadge: 'Planner de voyage · hors ligne · Apple Watch (Plus/Max)',
      heroTitle: 'Voyages, itinéraires, carte.<br>Dépenses et documents dans une seule app.',
      heroLead:
        'Waynex est le planner des voyages en groupe : timeline, carte, dépenses partagées et documents — même hors ligne. Partage via iCloud. Apple Watch avec Plus ou Max.',
      heroCta: 'Télécharger dans l’App Store',
      f1Title: 'Itinéraires et carte',
      f1Body:
        'Timeline, carte et lieux à découvrir. Gardez tout sous contrôle avant et pendant le voyage.',
      f2Title: 'Voyagez en groupe',
      f2Body:
        'Partagez le voyage via iCloud. Tout le monde voit le même programme, mis à jour en temps réel.',
      f3Title: 'Dépenses de groupe',
      f3Body:
        'Notez les dépenses et voyez qui doit quoi à qui. Fini les tableurs en vacances.',
      f4Title: 'Documents et PDF',
      f4Body:
        'Billets, réservations et rapports PDF du voyage. Importez depuis le menu Partager ou l’appareil photo.',
      f5Title: 'Créer avec l’IA',
      f5Body:
        'Générez un itinéraire avec l’IA, importez-le dans Waynex et adaptez-le avec votre groupe.',
      f6Title: 'Apple Watch',
      f6Body:
        'Programme et checklist au poignet, synchronisés avec l’iPhone. Nécessite Waynex Plus ou Max.',
      featureSeeScreen: 'Voir l’écran →',
      featureSeeWatch: 'Voir l’Apple Watch →',
      screenshotsTeaserTitle: 'L’app en action',
      screenshotsTeaserBody:
        'Planner de voyage : itinéraires, carte, dépenses de groupe, documents et Apple Watch — vraies captures de l’app.',
      screenshotsTeaserCta: 'Voir toutes les captures →',
      shotsKicker: 'Aperçu de l’app',
      shotsTitle: 'Waynex sur iPhone et Apple Watch',
      shotsLead:
        'Vraies captures de l’app — voyages, timeline, dépenses partagées et programme au poignet.',
      shotNavTrips: 'Voyages',
      shotNavPlan: 'Planification',
      shotNavMap: 'Carte',
      shotNavSharing: 'Groupe',
      shotNavBudget: 'Dépenses',
      shotNavDocuments: 'Documents',
      shotNavAi: 'IA',
      shotNavWatch: 'Apple Watch',
      shot1Title: 'Tous vos voyages au même endroit',
      shot1Body:
        'Créez un voyage à la main ou avec l’IA. Dates, progression et destination en un coup d’œil — avec un voyage démo pour essayer tout de suite.',
      shot1Caption: 'Liste des voyages',
      shot1Alt: 'Liste des voyages Waynex',
      shot2Title: 'Planifiez jour par jour',
      shot2Body:
        'Timeline avec lieux, réservations et activités. Parcourez les jours du voyage, ouvrez la carte et restez organisé avant et pendant le voyage.',
      shot2Caption: 'Timeline du voyage',
      shot2Alt: 'Timeline du voyage Waynex',
      shotMapTitle: 'Carte et trajets du jour',
      shotMapBody:
        'Le parcours du jour sur la carte, avec étapes numérotées et timeline en dessous. Faites défiler les activités, la carte suit le voyage.',
      shotMapCaption: 'Carte et itinéraire',
      shotMapAlt: 'Carte du jour et timeline Waynex',
      shot3Title: 'Voyagez en groupe',
      shot3Body:
        'Partagez le voyage via iCloud : jusqu’à 4 invités avec Plus (2 éditeurs) ou jusqu’à 9 avec Max. Tout le monde voit le même programme, mis à jour en temps réel.',
      shot3Caption: 'Partage du voyage',
      shot3Alt: 'Partage du voyage Waynex',
      shot4Title: 'Dépenses partagées en groupe',
      shot4Body:
        'Notez qui a payé quoi et qui doit à qui. Soldes et remboursements restent dans le voyage — fini les tableurs en vacances.',
      shot4Caption: 'Soldes et dépenses',
      shot4Alt: 'Dépenses de groupe Waynex',
      shot5Title: 'Documents et PDF',
      shot5Body:
        'Billets, réservations et rapports PDF du voyage. Importez depuis le menu Partager ou l’appareil photo et gardez tout à côté du programme.',
      shot5Caption: 'Documents et billets',
      shot5Alt: 'Documents et programme Waynex',
      shot6Title: 'Créer avec l’IA',
      shot6Body:
        'Générez un itinéraire avec votre IA, importez le fichier JSON dans Waynex et adaptez-le avec votre groupe. Disponible avec Plus et Max.',
      shot6Caption: 'Créer avec l’IA',
      shot6Alt: 'Création de voyage avec l’IA Waynex',
      watchTitle: 'Apple Watch : programme et checklist au poignet',
      watchBody:
        'Timeline du jour, activités mises en avant et checklist synchronisée avec l’iPhone. Idéal en déplacement — nécessite Waynex Plus ou Max.',
      watchPoint1: 'Jours et activités du voyage en cours',
      watchPoint2: 'Checklist avec progression (ex. 9/14)',
      watchPoint3: 'Synchronisation automatique avec l’iPhone via iCloud',
      watchCaption: 'Waynex sur Apple Watch Ultra',
      watchAlt: 'Waynex sur Apple Watch Ultra — timeline Abu Dhabi',
      shotsCtaTitle: 'Essayez-le',
      shotsCtaBody:
        'Téléchargez Waynex sur l’App Store et commencez avec le voyage démo inclus.',
      shotsPageTitle: 'Captures — Waynex planner de voyage',
      shotsMetaDescription:
        'Captures Waynex : planner de voyage avec itinéraires, carte, dépenses de groupe et documents — même hors ligne. Apple Watch avec Plus ou Max.',
      plansTitle: 'Formules Waynex',
      plansNote:
        'Comparez Free, Plus et Max dans l’app. Les prix et abonnements sont ceux affichés par Apple sur votre App Store local.',
      planPopular: 'Populaire',
      plansCta: 'Voir les prix sur l’App Store',
      free1: '1 voyage personnel',
      free2: 'Planification et carte',
      free3: 'Dépenses de groupe',
      free4: 'Icônes des lieux',
      plus1: '3 voyages actifs + 3 archivés',
      plus2: 'Partage (jusqu’à 4, 2 éditeurs)',
      plus3: 'Rapport PDF',
      plus4: 'Créer et importer des voyages avec l’IA',
      plus5: 'Aperçus des lieux',
      plus6: 'App Apple Watch',
      max1: 'Tout Plus',
      max2: 'Jusqu’à 5 voyages archivés',
      max3: 'Modifiez ensemble (jusqu’à 9, 3 éditeurs)',
      max4: 'Pensé pour les voyages en groupe',
      infoTitle: 'Tout le voyage, toujours avec vous',
      infoNote: 'Planifiez, voyagez en groupe et créez des itinéraires — dans une seule app.',
      info1Alt: 'Waynex : organisez ensemble, partez léger — itinéraire, dépenses et billets hors ligne',
      info2Alt: 'Waynex : carte du jour avec étapes dans l’ordre et trajet le plus court',
      footerPrivacy: 'Politique de confidentialité (EN)',
      footerTerms: 'Conditions d’utilisation (EN)',
      privacyHref: '/en/privacy/',
      termsHref: '/en/terms/',
      screenshotsHref: '/fr/screenshots/',
      homeHref: '/fr/',
    },
    de: {
      htmlLang: 'de',
      metaDescription:
        'Reiseplaner für Gruppen: Reisepläne, Karte, Gruppenausgaben und Dokumente in einer App — auch offline. Apple Watch mit Plus oder Max. Waynex für iPhone, iPad und Apple Watch.',
      pageTitle: 'Waynex — Reiseplaner: Reisepläne, Karte, Ausgaben und Dokumente',
      navPrivacy: 'Datenschutz',
      navTerms: 'Nutzungsbedingungen',
      navScreenshots: 'App',
      navContact: 'Kontakt',
      heroBadge: 'Reiseplaner · offline · Apple Watch (Plus/Max)',
      heroTitle: 'Reisen, Reisepläne, Karte.<br>Ausgaben und Dokumente in einer App.',
      heroLead:
        'Waynex ist der Reiseplaner für Gruppen: Timeline, Karte, geteilte Ausgaben und Dokumente — auch offline. Teilen über iCloud. Apple Watch mit Plus oder Max.',
      heroCta: 'Im App Store laden',
      f1Title: 'Reisepläne und Karte',
      f1Body:
        'Timeline, Karte und Orte zum Entdecken. Behalte alles im Blick — vor und während der Reise.',
      f2Title: 'Gemeinsam reisen',
      f2Body:
        'Teile die Reise über iCloud. Alle sehen denselben Plan, in Echtzeit aktualisiert.',
      f3Title: 'Gruppenausgaben',
      f3Body:
        'Erfasse Ausgaben und sieh, wer wem was schuldet. Schluss mit Tabellen im Urlaub.',
      f4Title: 'Dokumente und PDF',
      f4Body:
        'Tickets, Buchungen und PDF-Reiseberichte. Import über das Teilen-Menü oder die Kamera.',
      f5Title: 'Mit KI erstellen',
      f5Body:
        'Erstelle einen Reiseplan mit KI, importiere ihn in Waynex und passe ihn mit deiner Gruppe an.',
      f6Title: 'Apple Watch',
      f6Body:
        'Programm und Checkliste am Handgelenk, synchronisiert vom iPhone. Erfordert Waynex Plus oder Max.',
      featureSeeScreen: 'Screenshot ansehen →',
      featureSeeWatch: 'Apple Watch ansehen →',
      screenshotsTeaserTitle: 'Die App in Aktion',
      screenshotsTeaserBody:
        'Reiseplaner: Reisepläne, Karte, Gruppenausgaben, Dokumente und Apple Watch — echte Screenshots aus der App.',
      screenshotsTeaserCta: 'Alle Screenshots ansehen →',
      shotsKicker: 'App-Vorschau',
      shotsTitle: 'Waynex auf iPhone und Apple Watch',
      shotsLead:
        'Echte Screenshots aus der App — Reisen, Timeline, geteilte Ausgaben und dein Programm am Handgelenk.',
      shotNavTrips: 'Reisen',
      shotNavPlan: 'Planung',
      shotNavMap: 'Karte',
      shotNavSharing: 'Gruppe',
      shotNavBudget: 'Ausgaben',
      shotNavDocuments: 'Dokumente',
      shotNavAi: 'KI',
      shotNavWatch: 'Apple Watch',
      shot1Title: 'Alle Reisen an einem Ort',
      shot1Body:
        'Erstelle eine Reise manuell oder mit KI. Daten, Fortschritt und Ziel auf einen Blick — mit Demo-Reise zum sofortigen Ausprobieren.',
      shot1Caption: 'Reiseliste',
      shot1Alt: 'Waynex Reiseliste',
      shot2Title: 'Tag für Tag planen',
      shot2Body:
        'Timeline mit Orten, Buchungen und Aktivitäten. Blättere durch die Reisetage, öffne die Karte und bleib organisiert — vor und während der Reise.',
      shot2Caption: 'Reise-Timeline',
      shot2Alt: 'Waynex Reise-Timeline',
      shotMapTitle: 'Karte und Wege des Tages',
      shotMapBody:
        'Die Tagesroute auf der Karte, mit nummerierten Stopps und der Timeline darunter. Scrolle durch die Aktivitäten, die Karte folgt der Reise.',
      shotMapCaption: 'Karte und Reiseplan',
      shotMapAlt: 'Waynex Tageskarte und Timeline',
      shot3Title: 'Gemeinsam reisen',
      shot3Body:
        'Teile die Reise über iCloud: bis zu 4 Eingeladene mit Plus (2 Bearbeiter) oder bis zu 9 mit Max. Alle sehen denselben Plan, in Echtzeit aktualisiert.',
      shot3Caption: 'Reise teilen',
      shot3Alt: 'Waynex Reise teilen',
      shot4Title: 'Ausgaben in der Gruppe teilen',
      shot4Body:
        'Erfasse, wer was bezahlt hat und wer wem etwas schuldet. Salden und Rückzahlungen bleiben in der Reise — Schluss mit Tabellen im Urlaub.',
      shot4Caption: 'Salden und Ausgaben',
      shot4Alt: 'Waynex Gruppenausgaben',
      shot5Title: 'Dokumente und PDF',
      shot5Body:
        'Tickets, Buchungen und PDF-Reiseberichte. Import über das Teilen-Menü oder die Kamera — alles direkt neben deinem Programm.',
      shot5Caption: 'Dokumente und Tickets',
      shot5Alt: 'Waynex Dokumente und Programm',
      shot6Title: 'Mit KI erstellen',
      shot6Body:
        'Erstelle einen Reiseplan mit deiner KI, importiere die JSON-Datei in Waynex und passe ihn mit deiner Gruppe an. Verfügbar mit Plus und Max.',
      shot6Caption: 'Mit KI erstellen',
      shot6Alt: 'Waynex Reise mit KI erstellen',
      watchTitle: 'Apple Watch: Programm und Checkliste am Handgelenk',
      watchBody:
        'Tages-Timeline, hervorgehobene Aktivitäten und eine mit dem iPhone synchronisierte Checkliste. Ideal unterwegs — erfordert Waynex Plus oder Max.',
      watchPoint1: 'Tage und Aktivitäten der aktiven Reise',
      watchPoint2: 'Checkliste mit Fortschritt (z. B. 9/14)',
      watchPoint3: 'Automatische Synchronisierung mit dem iPhone über iCloud',
      watchCaption: 'Waynex auf der Apple Watch Ultra',
      watchAlt: 'Waynex auf der Apple Watch Ultra — Timeline Abu Dhabi',
      shotsCtaTitle: 'Probier es aus',
      shotsCtaBody:
        'Lade Waynex im App Store und starte mit der enthaltenen Demo-Reise.',
      shotsPageTitle: 'Screenshots — Waynex Reiseplaner',
      shotsMetaDescription:
        'Waynex Screenshots: Reiseplaner mit Reiseplänen, Karte, Gruppenausgaben und Dokumenten — auch offline. Apple Watch mit Plus oder Max.',
      plansTitle: 'Waynex-Tarife',
      plansNote:
        'Vergleiche Free, Plus und Max in der App. Preise und Abos sind die, die Apple in deinem lokalen App Store anzeigt.',
      planPopular: 'Beliebt',
      plansCta: 'Preise im App Store ansehen',
      free1: '1 persönliche Reise',
      free2: 'Planung und Karte',
      free3: 'Gruppenausgaben',
      free4: 'Ortssymbole',
      plus1: '3 aktive + 3 archivierte Reisen',
      plus2: 'Teilen (bis zu 4, 2 Bearbeiter)',
      plus3: 'PDF-Bericht',
      plus4: 'Reisen mit KI erstellen und importieren',
      plus5: 'Ortsvorschauen',
      plus6: 'Apple Watch App',
      max1: 'Alles aus Plus',
      max2: 'Bis zu 5 archivierte Reisen',
      max3: 'Gemeinsam bearbeiten (bis zu 9, 3 Bearbeiter)',
      max4: 'Gemacht für Gruppenreisen',
      infoTitle: 'Die ganze Reise, immer dabei',
      infoNote: 'Gemeinsam planen, als Gruppe reisen und Reisepläne erstellen — alles in einer App.',
      info1Alt: 'Waynex: gemeinsam planen, leicht reisen — Reiseplan, Ausgaben und Offline-Tickets',
      info2Alt: 'Waynex: Tageskarte mit Stopps in Reihenfolge und kürzester Route',
      footerPrivacy: 'Datenschutzerklärung (EN)',
      footerTerms: 'Nutzungsbedingungen (EN)',
      privacyHref: '/en/privacy/',
      termsHref: '/en/terms/',
      screenshotsHref: '/de/screenshots/',
      homeHref: '/de/',
    },
  };

  const PATH_LANGS = ['en', 'fr', 'de'];

  function pathLang(path) {
    const clean = (path || '').replace(/\/+$/, '') || '/';
    return PATH_LANGS.find((l) => clean === `/${l}` || clean.startsWith(`/${l}/`)) || null;
  }

  function detectLang() {
    return pathLang(location.pathname) || DEFAULT_LANG;
  }

  function switchLangUrl(lang) {
    const path = location.pathname.replace(/\/+$/, '') || '/';
    const hash = location.hash || '';
    const current = pathLang(path);
    const rest = current ? path.slice(current.length + 1) || '/' : path;
    if (lang === DEFAULT_LANG) return rest + (rest.endsWith('/') ? '' : '/') + hash;
    return `/${lang}${rest === '/' ? '/' : rest + '/'}${hash}`;
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
        const lang = btn.getAttribute('data-lang-btn');
        localStorage.setItem(STORAGE_KEY, lang);
        const target = btn.getAttribute('href');
        if (target && target !== '#') return;
        event.preventDefault();
        const next = switchLangUrl(lang);
        if (next.replace(/\/+$/, '') === (location.pathname.replace(/\/+$/, '') || '/')) {
          applyLang(lang);
          return;
        }
        location.assign(next);
      });
    });
  });
})();
