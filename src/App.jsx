import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AttractionsList from './components/AttractionsList';
import MainAttractions from './components/MainAttractions';
import Blog from './pages/Blog';
import PlanPodrozy from './components/PlanPodrozy';
import FAQPage from './pages/FAQPage';
import Footer from './components/Footer';
import PodstawoweInformacje from './components/PodstawoweInformacje';
import KiedyJechac from './components/KiedyJechac';
import Transport from './components/Transport';
import Dzielnice from './components/Dzielnice';
import KulturaIZwyczaje from './components/KulturaIZwyczaje';
import PraktycznePorady from './components/PraktycznePorady';
import { ItineraryProvider } from './contexts/ItineraryContext';
import DocumentTitleManager from './components/DocumentTitleManager';
import usePageTitle from './hooks/usePageTitle';
import useScrollToTop from './hooks/useScrollToTop';
import PageLayout from './components/PageLayout';

// Import all attraction pages
import BurjKhalifaPage from './pages/BurjKhalifaPage';
import DubaiMallPage from './pages/DubaiMallPage';
import PalmJumeirahPage from './pages/PalmJumeirahPage';
import DubaiFramePage from './pages/DubaiFramePage';
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

function AppContent() {
  useScrollToTop();

  return (
    <PageLayout>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <MainAttractions />
            </>
          } />
          <Route path="/abu-dhabi" element={<AbuDhabiPage />} />
          <Route path="/atrakcje" element={<AttractionsPage />} />
          <Route path="/dubaj" element={<DubaiPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<Blog />} />
          <Route path="/plan-podrozy" element={<PlanPodrozy />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/podstawowe-informacje" element={<PodstawoweInformacje />} />
          <Route path="/kiedy-jechac" element={<KiedyJechac />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/dzielnice" element={<Dzielnice />} />
          <Route path="/kultura-i-zwyczaje" element={<KulturaIZwyczaje />} />
          <Route path="/praktyczne-porady" element={<PraktycznePorady />} />
          <Route path="/poznaj-dubaj" element={<PoznajDubajPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosciPage />} />

          {/* Individual Attraction Routes */}
          <Route path="/atrakcje/burj-khalifa" element={<BurjKhalifaPage />} />
          <Route path="/atrakcje/dubai-mall" element={<DubaiMallPage />} />
          <Route path="/atrakcje/palm-jumeirah" element={<PalmJumeirahPage />} />
          <Route path="/atrakcje/dubai-frame" element={<DubaiFramePage />} />
          <Route path="/atrakcje/dubai-aquarium" element={<DubaiAquariumPage />} />
          <Route path="/atrakcje/dubai-opera" element={<DubaiOperaPage />} />
          <Route path="/atrakcje/ski-dubai" element={<SkiDubaiPage />} />
          <Route path="/atrakcje/dubai-marina" element={<DubaiMarinaPage />} />
          <Route path="/atrakcje/jumeirah-mosque" element={<JumeirahMosquePage />} />
          <Route path="/atrakcje/dubai-fountain" element={<DubaiFountainPage />} />
          <Route path="/atrakcje/global-village" element={<GlobalVillagePage />} />
          <Route path="/atrakcje/motiongate" element={<MotiongateParksPage />} />
          <Route path="/atrakcje/gold-souk" element={<GoldSoukPage />} />
          <Route path="/atrakcje/spice-souk" element={<SpiceSoukPage />} />
          <Route path="/atrakcje/mall-of-emirates" element={<MallOfEmiratesPage />} />
          <Route path="/atrakcje/deep-dive-dubai" element={<DeepDiveDubaiPage />} />
          <Route path="/atrakcje/dubai-parks-resorts" element={<DubaiParksResortsPage />} />
          <Route path="/atrakcje/aquaventure" element={<AquaventurePage />} />
          <Route path="/atrakcje/butterfly-garden" element={<ButterflyGardenPage />} />
          <Route path="/atrakcje/dubai-garden-glow" element={<DubaiGardenGlowPage />} />
          <Route path="/atrakcje/dubai-museum" element={<DubaiMuseumPage />} />
          <Route path="/atrakcje/etihad-museum" element={<EtihadMuseumPage />} />
          <Route path="/atrakcje/madinat-jumeirah" element={<MadinatJumeirahPage />} />
          <Route path="/atrakcje/sheikh-mohammed-centre" element={<SheikhMohammedCentrePage />} />
          <Route path="/atrakcje/ras-al-khor" element={<RasAlKhorPage />} />
          <Route path="/atrakcje/desert-conservation" element={<DesertConservationPage />} />
          <Route path="/atrakcje/dubai-safari" element={<DubaiSafariPage />} />
          <Route path="/atrakcje/jbr-beach" element={<JBRBeachPage />} />
          <Route path="/atrakcje/kite-beach" element={<KiteBeachPage />} />
          <Route path="/atrakcje/love-lakes" element={<LoveLakesPage />} />
          <Route path="/atrakcje/view-palm" element={<ViewPalmPage />} />
          <Route path="/atrakcje/la-mer" element={<LaMerPage />} />
          <Route path="/atrakcje/the-pointe" element={<ThePointePage />} />
          <Route path="/atrakcje/miracle-garden" element={<MiracleGardenPage />} />
          <Route path="/atrakcje/img-worlds" element={<IMGWorldsPage />} />
          <Route path="/atrakcje/dubai-creek" element={<DubaiCreekPage />} />
          <Route path="/atrakcje/wild-wadi" element={<WildWadiPage />} />
          <Route path="/atrakcje/address-sky-view" element={<AddressSkyViewPage />} />
          <Route path="/atrakcje/xline-dubai-marina" element={<XLineDubaiMarinaPage />} />
          <Route path="/atrakcje/green-planet" element={<GreenPlanetPage />} />
          <Route path="/atrakcje/zabeel-park" element={<ZabeelParkPage />} />
          <Route path="/atrakcje/al-fahidi" element={<AlFahidiPage />} />
          <Route path="/atrakcje/textile-souk" element={<TextileSoukPage />} />
          <Route path="/atrakcje/dubai-festival-city-mall" element={<DubaiFestivalCityMallPage />} />
          <Route path="/atrakcje/infinity-des-lumieres" element={<InfinityDesLumieresPage />} />
          <Route path="/atrakcje/atlantis-the-royal" element={<AtlantisTheRoyalPage />} />
          <Route path="/atrakcje/ain-dubai" element={<AinDubaiPage />} />
          <Route path="/atrakcje/burj-al-arab" element={<BurjAlArabPage />} />
          <Route path="/atrakcje/jumeirah-beach" element={<JumeirahBeachPage />} />
          <Route path="/atrakcje/city-walk" element={<CityWalkPage />} />
          <Route path="/atrakcje/museum-of-future" element={<MuseumOfFuturePage />} />
          <Route path="/atrakcje/bollywood-parks" element={<BollywoodParksPage />} />
          <Route path="/atrakcje/dubaj-skok-ze-spadochronem" element={<DubajSkokZeSpadochronemPage />} />

          {/* Abu Dhabi Attractions */}
          <Route path="/abu-dhabi/sheikh-zayed-mosque" element={<SheikhZayedMosquePage />} />
          <Route path="/abu-dhabi/ferrari-world" element={<FerrariWorldPage />} />
          <Route path="/atrakcje/yas-waterworld" element={<YasWaterworldPage />} />
          <Route path="/abu-dhabi/mangrove-national-park" element={<MangroveNationalParkPage />} />
          <Route path="/abu-dhabi/heritage-village" element={<HeritageVillagePage />} />
          <Route path="/abu-dhabi/al-ain-zoo" element={<AlAinZooPage />} />
          <Route path="/abu-dhabi/falcon-hospital" element={<FalconHospitalPage />} />
          <Route path="/abu-dhabi/capital-gate" element={<CapitalGatePage />} />
          <Route path="/abu-dhabi/yas-marina-circuit" element={<YasMarinaCircuitPage />} />
          <Route path="/abu-dhabi/marina-mall" element={<MarinaMallPage />} />
          <Route path="/abu-dhabi/emirates-palace" element={<EmiratesPalacePage />} />
          <Route path="/abu-dhabi/warner-bros-world" element={<WarnerBrosWorldPage />} />
          <Route path="/abu-dhabi/corniche" element={<CornichePage />} />
          <Route path="/abu-dhabi/qasr-al-watan" element={<QasrAlWatanPage />} />
          <Route path="/abu-dhabi/observation-deck" element={<ObservationDeckPage />} />
          <Route path="/abu-dhabi/abu-dhabi-mall" element={<AbuDhabiMallPage />} />
          <Route path="/abu-dhabi/qasr-al-hosn" element={<QasrAlHosnPage />} />
          <Route path="/abu-dhabi/al-ain-oasis" element={<AlAinOasisPage />} />
          <Route path="/abu-dhabi/emirates-auto-museum" element={<EmiratesAutoMuseumPage />} />
          <Route path="/abu-dhabi/louvre-abu-dhabi" element={<LouvreAbuDhabiPage />} />
        </Routes>
        <Footer />
      </div>
    </PageLayout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ItineraryProvider>
        <DocumentTitleManager />
        <Helmet>
          <meta name="google-site-verification" content="F6Lb6dQqoyYufmrte8-8s1LIM5lIDahURjdBan-T1vY" />
          <script async defer src="https://widget.getyourguide.com/dist/pa.umd.production.min.js" data-gyg-partner-id="19WQ75B"></script>
          <script async src="https://widget.getyourguide.com/dist/activities.min.js"></script>
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XQ2N5KC7J1"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XQ2N5KC7J1');
            `}
          </script>
        </Helmet>
        <AppContent />
      </ItineraryProvider>
    </HelmetProvider>
  );
}

export default App;
