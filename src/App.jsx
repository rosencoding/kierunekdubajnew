import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { FUTURE_FLAGS } from '@remix-run/router';
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
import PoznajDubajPage from './pages/PoznajDubajPage';
import AbuDhabiPage from './pages/AbuDhabiPage';
import NotFoundPage from './pages/NotFoundPage';

// Configure future flags
FUTURE_FLAGS.v7_startTransition = true;
FUTURE_FLAGS.v7_relativeSplatPath = true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route path="/" element={
        <>
          <Hero />
          <MainAttractions />
          <AttractionsList />
        </>
      } />
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
      <Route path="poznaj-dubaj" element={<PoznajDubajPage />} />
      <Route path="abu-dhabi" element={<AbuDhabiPage />} />
      <Route path="atrakcje">
        <Route path="burj-khalifa" element={<BurjKhalifaPage />} />
        <Route path="dubai-mall" element={<DubaiMallPage />} />
        <Route path="palm-jumeirah" element={<PalmJumeirahPage />} />
        <Route path="dubai-frame" element={<DubaiFramePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  useScrollToTop();

  return (
    <HelmetProvider>
      <DocumentTitleManager>
        <RouterProvider router={router} />
      </DocumentTitleManager>
    </HelmetProvider>
  );
}

export default App;
