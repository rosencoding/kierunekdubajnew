import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import PoznajDubajPage from './pages/PoznajDubajPage';
import AbuDhabiPage from './pages/AbuDhabiPage';
import NotFoundPage from './pages/NotFoundPage';

const HomePage = () => {
  console.log('HomePage rendering');
  return (
    <>
      <Hero />
      <MainAttractions />
      <AttractionsList />
    </>
  );
};

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => {
  console.log('App rendering');
  
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="abu-dhabi" element={<AbuDhabiPage />} />
            <Route path="poznaj-dubaj" element={<PoznajDubajPage />} />
            <Route path="blog" element={<Blog />}>
              <Route path=":postId" element={<Blog />} />
            </Route>
            <Route path="plan-podrozy" element={<PlanPodrozy />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="podstawowe-informacje" element={<PodstawoweInformacje />} />
            <Route path="kiedy-jechac" element={<KiedyJechac />} />
            <Route path="transport" element={<Transport />} />
            <Route path="dzielnice" element={<Dzielnice />} />
            <Route path="kultura-i-zwyczaje" element={<KulturaIZwyczaje />} />
            <Route path="praktyczne-porady" element={<PraktycznePorady />} />
            <Route path="atrakcje/burj-khalifa" element={<BurjKhalifaPage />} />
            <Route path="atrakcje/dubai-mall" element={<DubaiMallPage />} />
            <Route path="atrakcje/palm-jumeirah" element={<PalmJumeirahPage />} />
            <Route path="atrakcje/dubai-frame" element={<DubaiFramePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
