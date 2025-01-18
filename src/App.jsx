import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "abu-dhabi",
        element: <AbuDhabiPage />,
      },
      {
        path: "poznaj-dubaj",
        element: <PoznajDubajPage />,
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
      }
    ],
  },
]);

const App = () => {
  useScrollToTop();
  console.log('App rendering');
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
