import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaBuilding, FaShoppingBag, FaUmbrellaBeach, FaHistory, FaTree, FaMapMarkerAlt, FaInstagram, FaFacebook, FaUsers, FaClock, FaSubway, FaStar, FaInfoCircle, FaCamera, FaUtensils, FaHotel, FaHome, FaShoppingCart, FaSkiing, FaLightbulb } from 'react-icons/fa';

const Dzielnice = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const districts = [
    {
      id: "downtown",
      name: "Downtown Dubai",
      images: [
        {
          url: "/images/burj-khalifa-1.jpg",
          alt: "Downtown Dubai z widokiem na Burj Khalifa, najwyższy budynek świata",
          caption: "Majestatyczny Burj Khalifa górujący nad Downtown Dubai"
        },
        {
          url: "/images/dubai-aquarium-5.jpg",
          alt: "Wnętrze Dubai Mall z widokiem na akwarium",
          caption: "Imponujące akwarium w Dubai Mall"
        },
        {
          url: "/images/burj-khalifa-3.jpg",
          alt: "Widok na Burj Khalifa",
          caption: "Burj Khalifa"
        },
        {
          url: "/images/dubai-mall-3.jpg",
          alt: "Wodospad w Dubai Mall",
          caption: "Wodospad w Dubai Mall"
        }
      ],
      icon: <FaBuilding className="w-8 h-8 text-blue-600" />,
      description: "Downtown Dubai to prestiżowe centrum nowoczesnego Dubaju, zdominowane przez najwyższy budynek świata - Burj Khalifa. Ta dynamiczna dzielnica jest sercem biznesowym i rozrywkowym miasta, gdzie znajduje się największe centrum handlowe na świecie - Dubai Mall, spektakularne Dubai Fountain z pokazami wodno-muzycznymi, oraz liczne luksusowe hotele i apartamentowce. Charakteryzuje się ultranowoczesną architekturą, z imponującymi wieżowcami tworzącymi charakterystyczną linię horyzontu miasta. Jest popularna zarówno wśród turystów, jak i zamożnych mieszkańców, oferując ekskluzywne restauracje, galerie sztuki, oraz tętniące życiem bulwary.",
      highlights: [
        {
          name: "Burj Khalifa",
          description: "Najwyższy budynek świata z platformą widokową",
          link: "/atrakcje/burj-khalifa"
        },
        {
          name: "The Dubai Mall",
          description: "Największe centrum handlowe z akwarium i lodowiskiem",
          link: "/atrakcje/dubai-mall"
        },
        {
          name: "Dubai Fountain",
          description: "Spektakularny pokaz tańczących fontann",
          link: "/atrakcje/dubai-fountain"
        }
      ],
      characteristics: [
        {
          icon: <FaHotel />,
          text: "Luksusowe apartamentowce i hotele 5-gwiazdkowe"
        },
        {
          icon: <FaShoppingBag />,
          text: "Światowej klasy centra handlowe i butiki"
        },
        {
          icon: <FaSubway />,
          text: "Doskonała komunikacja miejska i infrastruktura"
        },
        {
          icon: <FaUtensils />,
          text: "Ekskluzywne restauracje i kawiarnie"
        }
      ],
      quickTips: {
        bestTime: "Najlepszy czas na wizytę: późne popołudnie i wieczór dla najlepszej atmosfery",
        mustSee: "Pokazy Dubai Fountain – największej choreograficznej fontanny na świecie, która każdego dnia od 13:00 do 23:00 prezentuje co pół godziny spektakularne pokazy wodno-muzyczne ze strumieniami wody wystrzeliwującymi na wysokość 150 metrów.",
        atmosfera: "Kosmopolityczna i dynamiczna. Wieczorami tętni życiem, pełna restauracji i kawiarni z widokiem na marinę."
      },
      transport: "Metro - czerwona linia, stacja Burj Khalifa/Dubai Mall. Stąd możesz skorzystać z klimatyzowanych kładek prowadzących do Dubai Mall lub darmowych autobusów do głównych atrakcji.",
      funFacts: [
        {
          title: "Rekordowa wysokość",
          description: "Burj Khalifa ma dokładnie 828 metrów wysokości, a jego budowa trwała 6 lat. Ciekawostka: winda potrafi przemieścić się z parteru na najwyższe piętro w zaledwie 60 sekund!"
        },
        {
          title: "Polecana restauracja",
          description: "At.mosphere na 122. piętrze Burj Khalifa to najwyżej położona restauracja na świecie. Rezerwację warto zrobić na zachód słońca."
        },
        {
          title: "Dubai Mall w liczbach",
          description: "Centrum handlowe ma powierzchnię 350 boisk piłkarskich i odwiedza je rocznie 100 milionów osób. W akwarium pływa ponad 33 000 zwierząt morskich."
        },
        {
          title: "Wskazówka dla zwiedzających",
          description: "Bilety na Burj Khalifa kupuj online z wyprzedzeniem - są nawet o 30% tańsze niż na miejscu. Najlepsze godziny to wczesny poranek lub zachód słońca."
        }
      ],
    },
    {
      id: "marina",
      name: "Dubai Marina",
      images: [
        {
          url: "/images/dubai-marina-4.jpg",
          alt: "Dubai Marina nocą z oświetlonymi drapaczami chmur nad wodą",
          caption: "Nocna panorama Dubaj Marina"
        },
        {
          url: "images/ain-dubai-1.jpg",
          alt: "Plaża JBR z widokiem na Dubai Eye",
          caption: "Ain Dubai"
        },
        {
          url: "/images/dubai-marina-5.jpg",
          alt: "Drapacze chmur - Dubaj Marina",
          caption: "Dubaj Marina"
        },
        {
          url: "/images/dubai-marina.jpg",
          alt: "Marina Walk wieczorem",
          caption: "Wieczorny spacer wzdłuż Mariny"
        }
      ],
      icon: <FaUmbrellaBeach className="w-8 h-8 text-blue-600" />,
      description: "Dubai Marina to tętniąca życiem dzielnica, która łączy w sobie urok nadmorskiego kurortu z dynamiką nowoczesnej metropolii. Ten sztuczny kanał, otoczony imponującymi wieżowcami, tworzy największą na świecie marinę. Dzielnica słynie z malowniczej promenady Marina Walk, gdzie restauracje i kawiarnie oferują widoki na jachty i architekturę. JBR Beach przyciąga miłośników plażowania i sportów wodnych, a Bluewaters Island z gigantycznym kołem obserwacyjnym Ain Dubai dodaje kolejny wymiar do i tak już imponującego krajobrazu. Marina to również raj dla miłośników życia nocnego, z licznymi barami i klubami.",
      highlights: [
        {
          name: "JBR Beach",
          description: "Popularna plaża miejska z licznymi atrakcjami i restauracjami",
          link: "/atrakcje/jbr-beach"
        },
        {
          name: "Marina Walk",
          description: "7-kilometrowa promenada z restauracjami i sklepami",
          link: "/atrakcje/marina-walk"
        },
        {
          name: "Ain Dubai",
          description: "Największe koło obserwacyjne na świecie",
          link: "/atrakcje/ain-dubai"
        }
      ],
      characteristics: [
        {
          icon: <FaUmbrellaBeach />,
          text: "Nadmorska lokalizacja z plażami"
        },
        {
          icon: <FaBuilding />,
          text: "Nowoczesne wieżowce i apartamentowce"
        },
        {
          icon: <FaUtensils />,
          text: "Różnorodna oferta gastronomiczna"
        },
        {
          icon: <FaUsers />,
          text: "Kosmopolityczna atmosfera i życie nocne"
        }
      ],
      quickTips: {
        bestTime: "Rano na plażę, wieczorem na kolację z widokiem",
        mustSee: "Zachód słońca z The Pointe z widokiem na Atlantis i pokaz fontann",
        atmosfera: "Ekskluzywna i spokojna. Idealna dla osób szukających relaksu w luksusowym otoczeniu."
      },
      transport: "Metro - czerwona linia, stacje Dubai Marina i DMCC. Tramwaj Dubai Tram łączy marinę z systemem metra. Pieszo można zwiedzać całą dzielnicę przez klimatyzowane kładki.",
      funFacts: [
        {
          title: "Największa marina na świecie",
          description: "Dubai Marina może pomieścić ponad 500 jachtów. Kanał mariny został wykopany poprzez sprowadzenie wody z Zatoki Perskiej na pustynię."
        },
        {
          title: "Sekretne miejsce",
          description: "Pier 7 to wieżowiec z 7 różnymi restauracjami na każdym piętrze, każda z panoramicznym widokiem na marinę. Szczególnie polecamy Asia Asia na 6. piętrze."
        },
        {
          title: "Wskazówka dla fotografów",
          description: "Najlepsze zdjęcia mariny zrobisz z mostu przy stacji metra Dubai Marina lub z tarasu Observatory Bar & Grill."
        },
        {
          title: "Transport wodny",
          description: "Warto wybrać się w rejs tradycyjną łodzią dhow podczas zachodu słońca - bilety kupisz przy promenadzie Marina Walk."
        }
      ],
    },
    {
      id: "palm",
      name: "Palm Jumeirah",
      images: [
        {
          url: "/images/palm-jumeirah-1.jpg",
          alt: "Widok z lotu ptaka na Palm Jumeirah",
          caption: "Panorama Palm Jumeirah"
        },
        {
          url: "/images/atlantis-royal-3.jpg",
          alt: "Hotel Atlantis The Palm",
          caption: "Ikoniczny hotel Atlantis"
        },
        {
          url: "/images/palm-jumeirah-4.jpg",
          alt: "Widok na Palm Jumeirah",
          caption: "Widok na Palm Jumeirah"
        },
        {
          url: "/images/the-pointe-5.jpg",
          alt: "The Pointe na Palm Jumeirah",
          caption: "The Pointe wieczorem"
        }
      ],
      icon: <FaTree className="w-8 h-8 text-green-600" />,
      description: "Palm Jumeirah to sztuczna wyspa w kształcie palmy, będąca jednym z najbardziej ambitnych projektów inżynieryjnych na świecie. Ta luksusowa dzielnica Dubaju składa się z pnia, 16 liści palmy oraz otaczającego je półksiężyca, który służy jako falochron. Jest domem dla ekskluzywnych hoteli, w tym słynnego Atlantis The Palm, luksusowych apartamentowców i prywatnych willi z bezpośrednim dostępem do plaży. Wyspa oferuje mieszkańcom i gościom prywatne plaże, mariny dla jachtów, ekskluzywne restauracje i centra handlowe. Transport zapewnia nowoczesny, nadziemny Palm Monorail, łączący wyspę ze stałym lądem. Jest to symbol luksusu i bogactwa Dubaju, przyciągający zamożnych mieszkańców oraz turystów z całego świata, którzy pragną doświadczyć wyjątkowego stylu życia na sztucznej wyspie.",
      highlights: [
        {
          name: "Atlantis The Palm",
          description: "Luksusowy hotel z akwarium Lost Chambers i parkiem wodnym Aquaventure",
          link: "/atrakcje/atlantis-the-palm"
        },
        {
          name: "The Pointe",
          description: "Kompleks rozrywkowo-gastronomiczny z największą fontanną na świecie",
          link: "/atrakcje/the-pointe"
        }
      ],
      characteristics: [
        {
          icon: <FaHotel />,
          text: "Luksusowe wille i apartamenty"
        },
        {
          icon: <FaUmbrellaBeach />,
          text: "Prywatne plaże i kluby plażowe"
        },
        {
          icon: <FaUtensils />,
          text: "Ekskluzywne restauracje"
        },
        {
          icon: <FaUsers />,
          text: "Spokojne, rodzinne okolice"
        }
      ],
      quickTips: {
        bestTime: "Wcześnie rano na plażę, zachód słońca na kolację w The Pointe",
        mustSee: "Pokazy fontann w The Pointe z widokiem na Atlantis",
        atmosfera: "Ekskluzywna i spokojna. Idealna dla osób szukających relaksu w luksusowym otoczeniu."
      },
      transport: "Monorail z przystanku Gateway (przy stacji metra Dubai Marina) lub taksówka. Na samej wyspie można korzystać z Palm Monorail lub taksówek.",
      funFacts: [
        {
          title: "Inżynieryjny cud",
          description: "Do budowy Palm Jumeirah użyto tyle piasku, że wystarczyłoby na zbudowanie muru wysokiego na 2 metry między Dubajem a Szanghajem."
        },
        {
          title: "Najlepsza plaża",
          description: "Palm West Beach oferuje leżaki i parasole w przystępnych cenach, a do tego spektakularne widoki na marinę i drapacze chmur."
        },
        {
          title: "Gdzie zjeść?",
          description: "W The Pointe znajdziesz ponad 80 restauracji. Polecamy Meshico - meksykańską restaurację z widokiem na pokazy fontann i Atlantis."
        },
        {
          title: "Ciekawostka transportowa",
          description: "Monorail na Palm Jumeirah to pierwsza jednoszynowa kolej na Bliskim Wschodzie, a przejazd oferuje spektakularne widoki na wyspę."
        }
      ],
    },
    {
      id: "deira",
      name: "Deira",
      images: [
        {
          url: "/images/dubai-creek-2.jpg",
          alt: "Gold Souk w Deira",
          caption: "Tradycyjny Gold Souk"
        },
        {
          url: "/images/spice-souk-1.jpg",
          alt: "Spice Souk w Deira",
          caption: "Kolorowy Spice Souk"
        },
        {
          url: "/images/dubai-creek-1.jpg",
          alt: "Dubai Creek",
          caption: "Tradycyjne łodzie abra"
        },
        {
          url: "/images/heritage-village-1.jpg",
          alt: "Heritage Village w Deira",
          caption: "Tradycyjna architektura"
        }
      ],
      icon: <FaHistory className="w-8 h-8 text-amber-600" />,
      description: "Deira to historyczne serce Dubaju, położone po wschodniej stronie Dubai Creek. Ta tętniąca życiem dzielnica łączy tradycyjny handel z nowoczesnym biznesem. Słynie z charakterystycznych souków (tradycyjnych targowisk) - szczególnie Gold Souk (targ złota) i Spice Souk (targ przypraw), gdzie handlarze kontynuują wielowiekowe tradycje. Charakteryzuje się gęstą zabudową, wąskimi uliczkami i żywą atmosferą multikulturowego Dubaju, gdzie spotykają się różne narodowości i kultury.",
      highlights: [
        {
          name: "Gold Souk",
          description: "Tradycyjny targ złota z setkami sklepów jubilerskich",
          link: "/atrakcje/gold-souk"
        },
        {
          name: "Spice Souk",
          description: "Aromatyczny targ przypraw i ziół",
          link: "/atrakcje/spice-souk"
        },
        {
          name: "Dubai Creek",
          description: "Historyczna zatoka z tradycyjnymi łodziami abra",
          link: "/atrakcje/dubai-creek"
        }
      ],
      characteristics: [
        {
          icon: <FaHistory />,
          text: "Bogata historia i tradycja"
        },
        {
          icon: <FaShoppingBag />,
          text: "Tradycyjne targi i bazary"
        },
        {
          icon: <FaUsers />,
          text: "Autentyczna atmosfera"
        },
        {
          icon: <FaSubway />,
          text: "Dobra komunikacja"
        }
      ],
      quickTips: {
        bestTime: "Wcześnie rano lub późnym popołudniem (unikaj południowego upału)",
        mustSee: "Rejs tradycyjną łodzią abra przez Dubai Creek",
        atmosfera: "Autentyczna i tradycyjna. Tętniące życiem bazary i historyczne uliczki tworzą niepowtarzalny klimat starego Dubaju."
      },
      transport: "Metro - zielona linia, stacje Al Ras i Palm Deira. Tradycyjne łodzie abra kursują przez Dubai Creek. Wiele autobusów łączy Deirę z innymi częściami miasta.",
      funFacts: [
        {
          title: "Historyczne znaczenie",
          description: "Deira była głównym centrum handlowym Dubaju już w latach 20. XX wieku, a niektóre sklepy w Gold Souku działają od pokoleń w tych samych rodzinach."
        },
        {
          title: "Sekret Gold Souku",
          description: "Najlepsze ceny złota uzyskasz w bocznych uliczkach, z dala od głównej alei. Zawsze warto się targować - można uzyskać 30-40% zniżki."
        },
        {
          title: "Lokalna kuchnia",
          description: "Al Ustad Special Kabab to niepozorna, ale legendarna restauracja serwująca najlepsze irańskie kebaby w mieście od 1978 roku."
        },
        {
          title: "Wskazówka dla kupujących",
          description: "W Spice Souku kupuj przyprawy w głębi targowiska - są tańsze i lepszej jakości. Szafran jest nawet o 50% tańszy niż w Europie."
        }
      ],
    },
    {
      id: "jumeirah",
      name: "Jumeirah",
      images: [
        {
          url: "/images/burj-al-arab-1.jpg",
          alt: "Burj Al Arab o zachodzie słońca",
          caption: "Ikoniczny Burj Al Arab"
        },
        {
          url: "/images/madinat-jumeirah-1.jpg",
          alt: "Kanały Madinat Jumeirah",
          caption: "Malownicze Madinat Jumeirah"
        },
        {
          url: "/images/jumeirah-beach-1.jpg",
          alt: "Plaża Jumeirah",
          caption: "Plaża publiczna Jumeirah"
        },
        {
          url: "/images/jumeirah-mosque-1.jpg",
          alt: "Meczet Jumeirah",
          caption: "Piękny Meczet Jumeirah"
        }
      ],
      icon: <FaUmbrellaBeach className="w-8 h-8 text-blue-600" />,
      description: "Jumeirah to prestiżowa nadmorska dzielnica Dubaju, uznawana za jedną z najbardziej luksusowych części miasta. Rozciąga się wzdłuż wybrzeża Zatoki Perskiej i słynie z pięknych plaż z białym piaskiem oraz krystalicznie czystą wodą. Jest domem dla wielu ikonicznych obiektów, w tym słynnego hotelu Burj Al Arab w kształcie żagla oraz kompleksu Madinat Jumeirah, stylizowanego na tradycyjne arabskie miasto z systemem kanałów wodnych.",
      highlights: [
        {
          name: "Burj Al Arab",
          description: "Najbardziej luksusowy hotel świata w kształcie żagla",
          link: "/atrakcje/burj-al-arab"
        },
        {
          name: "Madinat Jumeirah",
          description: "Luksusowy kompleks w stylu arabskim z kanałami wodnymi",
          link: "/atrakcje/madinat-jumeirah"
        },
        {
          name: "Wild Wadi Waterpark",
          description: "Park wodny z ekscytującymi zjeżdżalniami",
          link: "/atrakcje/wild-wadi-waterpark"
        },
        {
          name: "Jumeirah Mosque",
          description: "Jedyny meczet w Dubaju otwarty dla niemuzułmanów",
          link: "/atrakcje/jumeirah-mosque"
        }
      ],
      characteristics: [
        {
          icon: <FaHotel />,
          text: "Luksusowe hotele i rezydencje"
        },
        {
          icon: <FaUmbrellaBeach />,
          text: "Piękne plaże publiczne"
        },
        {
          icon: <FaUtensils />,
          text: "Wysokiej klasy restauracje"
        },
        {
          icon: <FaUsers />,
          text: "Międzynarodowa społeczność"
        }
      ],
      quickTips: {
        bestTime: "Wcześnie rano na plażę, zachód słońca na zdjęcia",
        mustSee: "Zachód słońca za Burj Al Arab z publicznej plaży",
        atmosfera: "Elegancka i relaksująca. Połączenie luksusowych hoteli z spokojnymi plażami i tradycyjną architekturą."
      },
      transport: "Autobus lub taksówka - brak bezpośredniego metra. Autobusy kursują wzdłuż Jumeirah Beach Road, łącząc dzielnicę z najbliższymi stacjami metra.",
      funFacts: [
        {
          title: "Architektoniczny symbol",
          description: "Burj Al Arab zbudowano na sztucznej wyspie, a jego żaglopodobny kształt stał się symbolem nowoczesnego Dubaju. Budowa trwała 5 lat."
        },
        {
          title: "Ukryta plaża",
          description: "Sunset Beach, znana lokalnie jako Umm Suqeim Beach, oferuje najlepsze widoki na Burj Al Arab i jest całkowicie darmowa."
        },
        {
          title: "Kulinarna perełka",
          description: "Pierside Kitchen & Bar w Jumeirah to świetne miejsce na lunch z widokiem na ocean. Rezerwację najlepiej zrobić na zachód słońca."
        },
        {
          title: "Kulturalna wskazówka",
          description: "Meczet Jumeirah oferuje darmowe wycieczki z przewodnikiem 'Open Doors, Open Minds' - świetny sposób na poznanie kultury islamskiej."
        }
      ],
    },
    {
      id: "al-barsha",
      name: "Al Barsha",
      images: [
        {
          url: "/images/mall-emirates-1.jpg",
          alt: "Mall of the Emirates",
          caption: "Mall of the Emirates"
        },
        {
          url: "/images/ski-dubai-1.jpg",
          alt: "Ski Dubai",
          caption: "Kryty stok narciarski Ski Dubai"
        },
        {
          url: "/images/mall-emirates-1.jpg",
          alt: "Galeria Mall of the Emirates",
          caption: "Mall of the Emirates"
        },
        {
          url: "images/miracle-garden-4.jpg",
          alt: "Dubai Miracle Garden",
          caption: "Dubai Miracle Garden"
        }
      ],
      icon: <FaHome className="w-8 h-8 text-purple-600" />,
      description: "Al Barsha to nowoczesna dzielnica mieszkalno-biznesowa w zachodniej części Dubaju. Jest podzielona na kilka sektorów i znana głównie z ogromnego centrum handlowego Mall of the Emirates ze słynnym krytym stokiem narciarskim Ski Dubai. Dzielnica jest świetnie skomunikowana dzięki linii metra i położeniu przy Sheikh Zayed Road. Charakteryzuje się mieszanką apartamentowców, willi i przestrzeni biurowych, a także bogatą infrastrukturą w postaci szkół międzynarodowych, szpitali i restauracji. Jest popularnym miejscem zamieszkania wśród ekspatów i rodzin ze względu na spokojniejszą atmosferę niż w centrum miasta oraz relatywnie przystępne ceny najmu.",
      highlights: [
        {
          name: "Mall of the Emirates",
          description: "Jedno z największych centrów handlowych z krytym stokiem narciarskim",
          link: "/atrakcje/mall-of-emirates"
        },
        {
          name: "Ski Dubai",
          description: "Pierwszy kryty stok narciarski na Bliskim Wschodzie",
          link: "/atrakcje/ski-dubai"
        }
      ],
      characteristics: [
        {
          icon: <FaShoppingCart />,
          text: "Świetne możliwości zakupowe"
        },
        {
          icon: <FaSkiing />,
          text: "Unikalne atrakcje sportowe"
        },
        {
          icon: <FaSubway />,
          text: "Dobra komunikacja miejska"
        },
        {
          icon: <FaTree />,
          text: "Tereny rekreacyjne i parki"
        }
      ],
      quickTips: {
        bestTime: "Przez cały rok, szczególnie wieczorami na zakupy i rozrywkę",
        mustSee: "Ski Dubai i zachód słońca w Al Barsha Pond Park",
        atmosfera: "Przyjazna i nowoczesna. Doskonała równowaga między życiem miejskim a spokojnymi terenami rekreacyjnymi."
      },
      transport: "Metro - czerwona linia, stacja Mall of the Emirates. Liczne autobusy łączą dzielnicę z innymi częściami miasta. Wygodny dostęp do Sheikh Zayed Road.",
      funFacts: [
        {
          title: "Zimowy paradoks",
          description: "Ski Dubai utrzymuje temperaturę -4°C przez cały rok, podczas gdy na zewnątrz może być nawet 45°C. Zużywa tyle śniegu, że wystarczyłoby na zbudowanie muru wysokiego na 2 metry między Dubajem a Szanghajem."
        },
        {
          title: "Lokalne życie",
          description: "Al Barsha Pond Park to ulubione miejsce porannych spacerów mieszkańców. W weekendy odbywają się tu pikniki rodzinne i zajęcia jogi."
        },
        {
          title: "Gdzie zjeść?",
          description: "Common Grounds w Mall of the Emirates to popularne miejsce śniadaniowe wśród lokalnych mieszkańców, znane z doskonałej kawy i zdrowych posiłków."
        },
        {
          title: "Wskazówka dla narciarzy",
          description: "Bilety do Ski Dubai są tańsze w poniedziałki i wtorki. Warto kupić pakiet Snow Premium, który zawiera spotkanie z pingwinami."
        }
      ],
    }
  ];

  const quickStats = [
    {
      icon: <FaBuilding className="w-8 h-8 text-blue-500" />,
      title: "Nowoczesne",
      description: "Downtown i Marina"
    },
    {
      icon: <FaHistory className="w-8 h-8 text-amber-500" />,
      title: "Historyczne",
      description: "Deira i Bur Dubai"
    },
    {
      icon: <FaUmbrellaBeach className="w-8 h-8 text-teal-500" />,
      title: "Nadmorskie",
      description: "Jumeirah i Palm"
    }
  ];

  const quickTips = [
    {
      icon: <FaMapMarkerAlt className="w-8 h-8 text-blue-500" />,
      title: "Lokalizacja",
      description: "Sprawdź dokładną lokalizację dzielnicy przed wizytą - Dubaj jest rozległy"
    },
    {
      icon: <FaSubway className="w-8 h-8 text-green-500" />,
      title: "Transport",
      description: "Metro i autobusy to najwygodniejszy sposób przemieszczania się"
    },
    {
      icon: <FaClock className="w-8 h-8 text-amber-500" />,
      title: "Czas zwiedzania",
      description: "Zaplanuj minimum pół dnia na każdą główną dzielnicę"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Dzielnice Dubaju 2025 - Przewodnik | KierunekDubaj.pl</title>
        <meta name="description" content="Odkryj najciekawsze dzielnice Dubaju - od nowoczesnego Downtown po historyczną Deirę. Poznaj charakterystykę każdej dzielnicy, atrakcje i praktyczne wskazówki." />
        <meta name="keywords" content="Dubaj dzielnice, Downtown Dubai, Dubai Marina, Palm Jumeirah, Deira, Jumeirah, przewodnik po Dubaju" />
      </Helmet>

      {/* Hero Section - With Background */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/images/background-hero.jpg"
            alt="Panorama Dubaju"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 sm:text-5xl lg:text-6xl">
              Dzielnice Dubaju
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto sm:text-2xl">
              Poznaj najciekawsze części miasta i zaplanuj swoją podróż
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {districts.map((district) => (
              <a
                key={district.id}
                href={`#${district.id}`}
                className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <span className="mr-2">{district.icon}</span>
                {district.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Districts Grid */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {districts.map((district) => (
              <div
                key={district.id}
                id={district.id}
                className="bg-white rounded-xl border shadow-sm overflow-hidden"
              >
                {/* District Header */}
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={district.images[0].url}
                    alt={district.images[0].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-lg shadow-md">
                        {district.icon}
                      </div>
                      <h2 className="text-4xl font-bold text-white">{district.name}</h2>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8">
                  {/* Description */}
                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed mb-12">
                      {district.description}
                    </p>
                  </div>

                  {/* Image Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {district.images.slice(1).map((image, index) => (
                      <div key={index} className="relative rounded-lg overflow-hidden shadow-md group">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium">{image.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Main Grid */}
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <FaStar className="text-yellow-500" />
                        Główne atrakcje
                      </h3>
                      <div className="space-y-4">
                        {district.highlights.map((highlight, i) => (
                          <Link
                            key={i}
                            to={highlight.link}
                            className="block p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                          >
                            <h4 className="text-lg font-semibold text-blue-600 mb-2">{highlight.name}</h4>
                            <p className="text-gray-600">{highlight.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Co charakteryzuje dzielnicę?
                      </h3>
                      <div className="grid gap-4">
                        {district.characteristics.map((char, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="text-blue-600 text-xl">{char.icon}</div>
                            <span className="text-gray-700 font-medium">{char.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Jak dojechać */}
                  <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <FaSubway className="text-blue-600" />
                      Jak dojechać?
                    </h3>
                    <p className="text-gray-700">{district.transport}</p>
                  </div>

                  {/* Ciekawostki */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <FaLightbulb className="text-yellow-500" />
                      Ciekawostki
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {district.funFacts.map((fact, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                          <h4 className="text-lg font-semibold text-blue-600 mb-3">
                            {fact.title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {fact.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practical Information */}
                  <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                      <FaInfoCircle className="text-blue-600" />
                      Praktyczne informacje
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <FaClock className="text-blue-500" />
                          Najlepszy czas na wizytę
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{district.quickTips.bestTime}</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <FaStar className="text-blue-500" />
                          Nie przegap
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{district.quickTips.mustSee}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dzielnice;
