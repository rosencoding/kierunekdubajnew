import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Kiedy najlepiej odwiedzić Dubaj?',
      answer: 'Najlepszy czas na wizytę w Dubaju to okres od listopada do marca, gdy temperatury są przyjemne (20-25°C). W pozostałych miesiącach może być bardzo gorąco (powyżej 40°C). Warto unikać lipca i sierpnia, gdy upały są najbardziej dokuczliwe.'
    },
    {
      question: 'Czy potrzebuję wizy do Dubaju?',
      answer: 'Polscy obywatele otrzymują bezpłatną wizę turystyczną przy wjeździe do ZEA. Wiza jest ważna przez 30 dni. Paszport musi być ważny minimum 6 miesięcy od daty planowanego wyjazdu z Dubaju.'
    },
    {
      question: 'Ile kosztuje pobyt w Dubaju?',
      answer: 'Koszty pobytu w Dubaju mogą się znacznie różnić. Średnio należy przeznaczyć około 500-700 PLN dziennie na osobę, wliczając nocleg w średniej klasy hotelu, posiłki i transport. Dodatkowo należy uwzględnić koszty atrakcji i zakupów.'
    },
    {
      question: 'Jak poruszać się po Dubaju?',
      answer: 'W Dubaju dostępnych jest kilka opcji transportu: metro (bardzo wydajne i niedrogie), autobusy, taksówki oraz Uber. Metro jest najwygodniejszym środkiem transportu dla turystów. Można też wypożyczyć samochód, ale należy pamiętać o międzynarodowym prawie jazdy.'
    },
    {
      question: 'Jakie są zasady ubioru w Dubaju?',
      answer: 'Mimo że Dubaj jest nowoczesnym miastem, należy szanować lokalną kulturę. W miejscach publicznych należy ubierać się skromnie. Ramiona i kolana powinny być zakryte. W hotelach i na plażach zasady są bardziej liberalne. W meczetach kobiety muszą zakrywać włosy.'
    },
    {
      question: 'Czy w Dubaju można płacić kartą?',
      answer: 'Tak, karty płatnicze są powszechnie akceptowane w Dubaju. Warto mieć przy sobie również gotówkę (dirhamy) na drobne zakupy, taksówki czy targowanie się w sukach (tradycyjnych bazarach).'
    },
    {
      question: 'Jakie atrakcje są obowiązkowe podczas wizyty w Dubaju?',
      answer: 'Najpopularniejsze atrakcje to: Burj Khalifa (najwyższy budynek świata), Dubai Mall, Palm Jumeirah, Dubai Marina, tradycyjne suki (bazary), pustynne safari, oraz Dubai Frame. Warto też odwiedzić Miracle Garden i Global Village (w sezonie zimowym).'
    },
    {
      question: 'Czy w Dubaju jest bezpiecznie?',
      answer: 'Dubaj jest jednym z najbezpieczniejszych miast na świecie. Przestępczość jest na bardzo niskim poziomie. Należy jednak zachować podstawowe środki ostrożności jak w każdym dużym mieście i szanować lokalne prawo oraz zwyczaje.'
    },
    {
      question: 'Jak dojechać z Dubaju do Abu Dhabi?',
      answer: 'Do Abu Dhabi można łatwo dotrzeć na kilka sposobów. Jednym z najpopularniejszych jest podróż autobusem z dworca Ibn Battuta w Dubaju, skąd regularnie kursują autobusy do Abu Dhabi, a podróż trwa około 1,5–2 godzin. Dla osób ceniących wygodę idealnym rozwiązaniem będzie taksówka, która oferuje bezpośredni i komfortowy przejazd, zajmujący około 1,5 godziny.'
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Często Zadawane Pytania</h1>
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
  );
};

export default FAQ;
