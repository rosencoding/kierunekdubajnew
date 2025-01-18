import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import DocumentTitleManager from './components/DocumentTitleManager';
import useScrollToTop from './hooks/useScrollToTop';
import PageLayout from './components/PageLayout';

// Import components
import Hero from './components/Hero';
import MainAttractions from './components/MainAttractions';
import AttractionsList from './components/AttractionsList';
import Blog from './pages/Blog';
import PlanPodrozy from './components/PlanPodrozy';
import FAQPage from './pages/FAQPage';
import PodstawoweInformacje from './components/PodstawoweInformacje';
import KiedyJechac from './components/KiedyJechac';
import Transport from './components/Transport';
import Dzielnice from './components/Dzielnice';
import KulturaIZwyczaje from './components/KulturaIZwyczaje';
import PraktycznePorady from './components/PraktycznePorady';
import BurjKhalifaPage from './pages/BurjKhalifaPage';
import DubaiMallPage from './pages/DubaiMallPage';
import PalmJumeirahPage from './pages/PalmJumeirahPage';
import DubaiFramePage from './pages/DubaiFramePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import all attraction pages
import DubaiAquariumPage from './pages/DubaiAquariumPage';
import DubaiOperaPage from './pages/DubaiOperaPage';
import SkiDubaiPage from './pages/SkiDubaiPage';
import DubaiMarinaPage from './pages/DubaiMarinaPage';
import JumeirahMosquePage from './pages/JumeirahMosquePage';
import DubaiFountainPage from './pages/DubaiFountainPage';
import GlobalVillagePage from './pages/GlobalVillagePage';
import GoldSoukPage from './pages/GoldSoukPage';
import SpiceSoukPage from './pages/SpiceSoukPage';
import MallOfEmiratesPage from './pages/MallOfEmiratesPage';
import DeepDiveDubaiPage from './pages/DeepDiveDubaiPage';
import DubaiParksResortsPage from './pages/DubaiParksResortsPage';
import AquaventurePage from './pages/AquaventurePage';
import ButterflyGardenPage from './pages/ButterflyGardenPage';
import DubaiGardenGlowPage from './pages/DubaiGardenGlowPage';
import DubaiMuseumPage from './pages/DubaiMuseumPage';
import EtihadMuseumPage from './pages/EtihadMuseumPage';
import SheikhMohammedCentrePage from './pages/SheikhMohammedCentrePage';
import RasAlKhorPage from './pages/RasAlKhorPage';
import DesertConservationPage from './pages/DesertConservationPage';
import DubaiSafariPage from './pages/DubaiSafariPage';
import JBRBeachPage from './pages/JBRBeachPage';
import KiteBeachPage from './pages/KiteBeachPage';
import LoveLakesPage from './pages/LoveLakesPage';
import ViewPalmPage from './pages/ViewPalmPage';
import LaMerPage from './pages/LaMerPage';
import ThePointePage from './pages/ThePointePage';
import AbuDhabiPage from './pages/AbuDhabiPage';
import SheikhZayedMosquePage from './pages/abu-dhabi/sheikh-zayed-mosque';
import FerrariWorldPage from './pages/abu-dhabi/ferrari-world';
import YasWaterworldPage from './pages/abu-dhabi/yas-waterworld';
import MangroveNationalParkPage from './pages/abu-dhabi/mangrove-national-park';
import HeritageVillagePage from './pages/abu-dhabi/heritage-village';
import AlAinZooPage from './pages/abu-dhabi/al-ain-zoo';
import FalconHospitalPage from './pages/abu-dhabi/falcon-hospital';
import CapitalGatePage from './pages/abu-dhabi/capital-gate';
import YasMarinaCircuitPage from './pages/abu-dhabi/yas-marina-circuit';
import MarinaMallPage from './pages/abu-dhabi/marina-mall';
import EmiratesAutoMuseumPage from './pages/abu-dhabi/emirates-auto-museum';
import LouvreAbuDhabiPage from './pages/abu-dhabi/louvre-abu-dhabi';
import XLineDubaiMarinaPage from './pages/atrakcje/xline-dubai-marina';
import PoznajDubajPage from './pages/PoznajDubajPage';
import MuseumOfFuturePage from './pages/MuseumOfFuturePage';
import CityWalkPage from './pages/CityWalkPage';
import DubaiPage from './pages/DubaiPage';
import AttractionsPage from './pages/AttractionsPage';
import KontaktPage from './pages/KontaktPage';
import PolitykaPrywatnosciPage from './pages/PolitykaPrywatnosciPage';
import MiracleGardenPage from './pages/MiracleGardenPage';
import IMGWorldsPage from './pages/IMGWorldsPage';
import DubaiCreekPage from './pages/DubaiCreekPage';
import WildWadiPage from './pages/WildWadiPage';
import AddressSkyViewPage from './pages/atrakcje/address-sky-view';
import GreenPlanetPage from './pages/GreenPlanetPage';
import ZabeelParkPage from './pages/ZabeelParkPage';
import AlFahidiPage from './pages/AlFahidiPage';
import TextileSoukPage from './pages/TextileSoukPage';
import DubaiFestivalCityMallPage from './pages/DubaiFestivalCityMallPage';
import InfinityDesLumieresPage from './pages/InfinityDesLumieresPage';
import AtlantisTheRoyalPage from './pages/AtlantisTheRoyalPage';
import AinDubaiPage from './pages/AinDubaiPage';
import BurjAlArabPage from './pages/BurjAlArabPage';
import JumeirahBeachPage from './pages/JumeirahBeachPage';
import EmiratesPalacePage from './pages/abu-dhabi/emirates-palace';
import WarnerBrosWorldPage from './pages/abu-dhabi/warner-bros-world';
import CornichePage from './pages/abu-dhabi/corniche';
import QasrAlWatanPage from './pages/abu-dhabi/qasr-al-watan';
import ObservationDeckPage from './pages/abu-dhabi/observation-deck';
import AbuDhabiMallPage from './pages/abu-dhabi/abu-dhabi-mall';
import QasrAlHosnPage from './pages/abu-dhabi/qasr-al-hosn';
import AlAinOasisPage from './pages/abu-dhabi/al-ain-oasis';
import MadinatJumeirahPage from './pages/MadinatJumeirahPage';
import MotiongateParksPage from './pages/MotiongateParksPage';
import BollywoodParksPage from './pages/atrakcje/bollywood-parks';
import DubajSkokZeSpadochronemPage from './pages/atrakcje/dubaj-skok-ze-spadochronem';

// Import icons
import { 
  FaSubway, 
  FaLandmark, 
  FaBed, 
  FaLightbulb, 
  FaInfoCircle,
  FaUsers,
  FaInstagram,
  FaFacebook,
  FaCalendarAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

import NotFoundPage from './pages/NotFoundPage';

function App() {
  useScrollToTop();
  const location = useLocation();

  return (
    <HelmetProvider>
      <DocumentTitleManager>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <PageLayout>
                <Hero />
                <MainAttractions />
                <AttractionsList />
              </PageLayout>
            } />
            <Route path="/blog/*" element={<PageLayout><Blog /></PageLayout>} />
            <Route path="/plan-podrozy" element={<PageLayout><PlanPodrozy /></PageLayout>} />
            <Route path="/faq" element={<PageLayout><FAQPage /></PageLayout>} />
            <Route path="/podstawowe-informacje" element={<PageLayout><PodstawoweInformacje /></PageLayout>} />
            <Route path="/kiedy-jechac" element={<PageLayout><KiedyJechac /></PageLayout>} />
            <Route path="/transport" element={<PageLayout><Transport /></PageLayout>} />
            <Route path="/dzielnice" element={<PageLayout><Dzielnice /></PageLayout>} />
            <Route path="/kultura-i-zwyczaje" element={<PageLayout><KulturaIZwyczaje /></PageLayout>} />
            <Route path="/praktyczne-porady" element={<PageLayout><PraktycznePorady /></PageLayout>} />
            <Route path="/atrakcje/burj-khalifa" element={<PageLayout><BurjKhalifaPage /></PageLayout>} />
            <Route path="/atrakcje/dubai-mall" element={<PageLayout><DubaiMallPage /></PageLayout>} />
            <Route path="/atrakcje/palm-jumeirah" element={<PageLayout><PalmJumeirahPage /></PageLayout>} />
            <Route path="/atrakcje/dubai-frame" element={<PageLayout><DubaiFramePage /></PageLayout>} />
            <Route path="*" element={
              <PageLayout>
                <div className="container mx-auto px-4 py-8">
                  <h1>404 - Strona nie znaleziona</h1>
                </div>
              </PageLayout>
            } />
          </Routes>
          <Footer />
        </div>
      </DocumentTitleManager>
    </HelmetProvider>
  );
}

export default App;
