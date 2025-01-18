import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
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

const HomePage = () => (
  <>
    <Hero />
    <MainAttractions />
    <AttractionsList />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            path: ":postId",
            element: <Blog />
          }
        ]
      },
      {
        path: "plan-podrozy",
        element: <PlanPodrozy />
      },
      {
        path: "faq",
        element: <FAQPage />
      },
      {
        path: "podstawowe-informacje",
        element: <PodstawoweInformacje />
      },
      {
        path: "kiedy-jechac",
        element: <KiedyJechac />
      },
      {
        path: "transport",
        element: <Transport />
      },
      {
        path: "dzielnice",
        element: <Dzielnice />
      },
      {
        path: "kultura-i-zwyczaje",
        element: <KulturaIZwyczaje />
      },
      {
        path: "praktyczne-porady",
        element: <PraktycznePorady />
      },
      {
        path: "poznaj-dubaj",
        element: <PoznajDubajPage />
      },
      {
        path: "abu-dhabi",
        element: <AbuDhabiPage />
      },
      {
        path: "atrakcje/burj-khalifa",
        element: <BurjKhalifaPage />
      },
      {
        path: "atrakcje/dubai-mall",
        element: <DubaiMallPage />
      },
      {
        path: "atrakcje/palm-jumeirah",
        element: <PalmJumeirahPage />
      },
      {
        path: "atrakcje/dubai-frame",
        element: <DubaiFramePage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]);

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
