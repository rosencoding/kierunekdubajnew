import React from 'react';
import { motion } from 'framer-motion';

const PolitykaPrywatnosciPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Polityka Prywatności</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Informacje ogólne</h2>
              <p>
                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych 
                użytkowników serwisu KierunekDubaj.pl. Szanujemy prawo do prywatności i dbamy 
                o bezpieczeństwo danych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Administrator danych</h2>
              <p>
                Administratorem danych jest KierunekDubaj.pl. Kontakt w sprawach związanych z ochroną 
                danych osobowych: kontakt@kierunekdubaj.pl
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Cele przetwarzania danych</h2>
              <p>
                Dane osobowe przetwarzane są w celu:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Świadczenia usług drogą elektroniczną</li>
                <li>Obsługi zapytań użytkowników</li>
                <li>Celów analitycznych i statystycznych</li>
                <li>Marketingu własnych usług</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Pliki cookies</h2>
              <p>
                Serwis wykorzystuje pliki cookies. Są to niewielkie pliki tekstowe wysyłane przez 
                serwer www i przechowywane przez oprogramowanie komputera przeglądarki.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Prawa użytkowników</h2>
              <p>
                Użytkownik ma prawo do:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu</li>
                <li>Cofnięcia zgody na przetwarzanie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Bezpieczeństwo danych</h2>
              <p>
                Dokładamy wszelkich starań, aby zapewnić bezpieczeństwo danych osobowych użytkowników. 
                Stosujemy odpowiednie zabezpieczenia techniczne i organizacyjne.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Zmiany polityki prywatności</h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w polityce prywatności. O wszelkich 
                zmianach będziemy informować użytkowników poprzez stronę internetową.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PolitykaPrywatnosciPage;
