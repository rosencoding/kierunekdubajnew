import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaMapMarkedAlt, FaLandmark, FaCalendarAlt, FaPlane, FaMoneyBillWave, FaChevronDown, FaFacebook } from 'react-icons/fa';
import SEO from '../components/SEO';
import usePageTitle from '../hooks/usePageTitle';

const FAQPage = () => {
  usePageTitle('FAQ - KierunekDubaj.pl');
  const [activeIndex, setActiveIndex] = useState(null);

  const seoData = {
    title: "FAQ - Najczęściej zadawane pytania | KierunekDubaj.pl",
    description: "Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące podróży do Dubaju. Praktyczne informacje, porady i wskazówki dla turystów.",
    keywords: [
      "FAQ Dubaj",
      "pytania Dubaj",
      "informacje Dubaj",
      "porady Dubaj",
      "wskazówki podróż Dubaj",
      "co warto wiedzieć Dubaj",
      "przygotowanie do podróży Dubaj"
    ]
  };

  const faqs = [
    {
      question: 'Jaki internet najlepiej wybrać w Dubaju?',
      answer: <>
W Dubaju najlepiej korzystać z internetu poprzez kartę eSIM Revolut, która pozwala szybko aktywować internet mobilny bez potrzeby zakupu fizycznej karty SIM. To wygodne rozwiązanie, które sprawdzi się od razu po przylocie. Alternatywnie można kupić lokalną kartę SIM od jednego z popularnych operatorów, takich jak Etisalat, du lub Virgin Mobile. Są one łatwo dostępne na lotnisku oraz w wielu punktach sprzedaży w mieście i oferują atrakcyjne pakiety internetowe.</>
    },
    {
      question: 'Kiedy najlepiej odwiedzić Dubaj?',
      answer: <>Najlepszy czas na wizytę w Dubaju to okres od listopada do marca, gdy temperatury są przyjemne (20-25°C). W pozostałych miesiącach może być bardzo gorąco (powyżej 40°C). Warto unikać lipca i sierpnia, gdy upały są najbardziej dokuczliwe. Szczegółowe informacje o pogodzie i najlepszym czasie na podróż znajdziesz w sekcji <Link to="/kiedy-jechac" className="text-gold-500 hover:text-gold-600">Kiedy jechać</Link>.</>
    },
    {
      question: 'Czy potrzebuję wizy do Dubaju?',
      answer: <>Polscy obywatele otrzymują bezpłatną wizę turystyczną przy wjeździe do ZEA. Wiza jest ważna przez 30 dni. Paszport musi być ważny minimum 6 miesięcy od daty planowanego wyjazdu z Dubaju. Więcej informacji o wymogach wjazdowych znajdziesz w sekcji <Link to="/praktyczne-porady" className="text-gold-500 hover:text-gold-600">Praktyczne porady</Link>.</>
    },
    {
      question: 'Ile kosztuje pobyt w Dubaju?',
      answer: <>Koszty pobytu w Dubaju mogą się znacznie różnić. Średnio należy przeznaczyć około 500-700 PLN dziennie na osobę, wliczając nocleg w średniej klasy hotelu, posiłki i transport. Dodatkowo należy uwzględnić koszty atrakcji i zakupów. Szczegółowe informacje o cenach i kosztach znajdziesz w sekcji <Link to="/podstawowe-informacje" className="text-gold-500 hover:text-gold-600">Podstawowe informacje</Link>.</>
    },
    {
      question: 'Jak poruszać się po Dubaju?',
      answer: <>W Dubaju dostępnych jest kilka opcji transportu: metro (bardzo wydajne i niedrogie), autobusy, taksówki oraz Uber. Metro jest najwygodniejszym środkiem transportu dla turystów. Można też wypożyczyć samochód, ale należy pamiętać o międzynarodowym prawie jazdy. Szczegółowe informacje o komunikacji znajdziesz w sekcji <Link to="/transport" className="text-gold-500 hover:text-gold-600">Transport</Link>.</>
    },
    {
      question: 'Jakie są zasady ubioru w Dubaju?',
      answer: <>Mimo że Dubaj jest nowoczesnym miastem, należy szanować lokalną kulturę. W miejscach publicznych należy ubierać się skromnie. Ramiona i kolana powinny być zakryte. W hotelach i na plażach zasady są bardziej liberalne. W meczetach kobiety muszą zakrywać włosy. Więcej o lokalnych zwyczajach przeczytasz w sekcji <Link to="/kultura-i-zwyczaje" className="text-gold-500 hover:text-gold-600">Kultura i zwyczaje</Link>.</>
    },
    {
      question: 'Czy w Dubaju można płacić kartą?',
      answer: <>Tak, karty płatnicze są powszechnie akceptowane w Dubaju. Warto mieć przy sobie również gotówkę (dirhamy) na drobne zakupy, taksówki czy targowanie się w sukach (tradycyjnych bazarach). Więcej informacji o płatnościach znajdziesz w sekcji <Link to="/praktyczne-porady" className="text-gold-500 hover:text-gold-600">Praktyczne porady</Link>.</>
    },
    {
      question: 'Jakie atrakcje są obowiązkowe podczas wizyty w Dubaju?',
      answer: <>Najpopularniejsze atrakcje to: <Link to="/atrakcje/burj-khalifa" className="text-gold-500 hover:text-gold-600">Burj Khalifa</Link> (najwyższy budynek świata), <Link to="/atrakcje/dubai-mall" className="text-gold-500 hover:text-gold-600">Dubai Mall</Link>, <Link to="/atrakcje/palm-jumeirah" className="text-gold-500 hover:text-gold-600">Palm Jumeirah</Link>, <Link to="/atrakcje/dubai-marina" className="text-gold-500 hover:text-gold-600">Dubai Marina</Link>, tradycyjne suki (bazary), pustynne safari, oraz <Link to="/atrakcje/dubai-frame" className="text-gold-500 hover:text-gold-600">Dubai Frame</Link>. Warto też odwiedzić <Link to="/atrakcje/miracle-garden" className="text-gold-500 hover:text-gold-600">Miracle Garden</Link> i <Link to="/atrakcje/global-village" className="text-gold-500 hover:text-gold-600">Global Village</Link> (w sezonie zimowym). Pełną listę atrakcji znajdziesz w sekcji <Link to="/atrakcje" className="text-gold-500 hover:text-gold-600">Atrakcje</Link>.</>
    },
    {
      question: 'Czy w Dubaju jest bezpiecznie?',
      answer: <>Dubaj jest jednym z najbezpieczniejszych miast na świecie. Przestępczość jest na bardzo niskim poziomie. Należy jednak zachować podstawowe środki ostrożności jak w każdym dużym mieście i szanować lokalne prawo oraz zwyczaje. Więcej informacji o bezpieczeństwie znajdziesz w sekcji <Link to="/praktyczne-porady" className="text-gold-500 hover:text-gold-600">Praktyczne porady</Link>.</>
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] -mt-16">
          <div className="absolute inset-0">
            <img
              src="/images/background-hero.jpg"
              alt="FAQ - Dubaj"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                  Najczęściej zadawane pytania
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-100 max-w-3xl mx-auto"
                >
                  Znajdź odpowiedzi na najważniejsze pytania dotyczące podróży do Dubaju
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link 
                to="/praktyczne-porady" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaInfoCircle />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Praktyczne porady</h3>
                  <p className="text-sm text-gray-600">Wskazówki dla podróżnych</p>
                </div>
              </Link>

              <Link 
                to="/transport" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaMapMarkedAlt />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Transport</h3>
                  <p className="text-sm text-gray-600">Jak poruszać się po mieście</p>
                </div>
              </Link>

              <Link 
                to="/kultura-i-zwyczaje" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaLandmark />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Kultura i zwyczaje</h3>
                  <p className="text-sm text-gray-600">Poznaj lokalne tradycje</p>
                </div>
              </Link>

              <Link 
                to="/kiedy-jechac" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaCalendarAlt />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Kiedy jechać</h3>
                  <p className="text-sm text-gray-600">Najlepszy czas na wizytę</p>
                </div>
              </Link>

              <Link 
                to="/dzielnice" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaMapMarkedAlt />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Dzielnice</h3>
                  <p className="text-sm text-gray-600">Poznaj części miasta</p>
                </div>
              </Link>

              <Link 
                to="/podstawowe-informacje" 
                className="group flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span className="text-2xl text-gold-500 mr-4 group-hover:scale-110 transition-transform">
                  <FaInfoCircle />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Podstawowe informacje</h3>
                  <p className="text-sm text-gray-600">Co warto wiedzieć</p>
                </div>
              </Link>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Masz pytania o Dubaj?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Dołącz do naszego forum o Dubaju na Facebooku i wymieniaj się doświadczeniami oraz poradami z innymi podróżnikami!
              </p>
              <a 
                href="https://facebook.com/groups/atrakcjedubaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-colors group"
              >
                <FaFacebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>Dołącz do grupy na Facebooku</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section id="faq" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Najczęściej zadawane pytania
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 py-4 text-gray-600 border-t">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQPage;
