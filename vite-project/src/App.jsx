import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

const Nav = lazy(() => import('./components/Nav'));
const Footer = lazy(() => import('./components/Footer'));
const PhoneCall = lazy(() => import('./components/PhoneCall'));
const Layout = lazy(() => import('./components/Layout'));
const Catgory = lazy(() => import('./components/Catgory'));
const ColdCatgory = lazy(() => import('./components/ColdCatgory'));
const HotCatDelevery = lazy(() => import('./components/HotCatDelevery'));
const Hotrolledcoilcat = lazy(() => import('./components/Hotrolledcoilcat'));
const HotCatCoilsDEl = lazy(() => import('./components/HotCatCoilsDEl'));
const ColdSheetDel = lazy(() => import('./components/ColdSheetDel'));
const ColdCoils = lazy(() => import('./components/ColdCoils'));
const ColdCoilsdel = lazy(() => import('./components/ColdCoilsdel'));
const SearchPage = lazy(() => import('./components/SearchPage'));
const Product = lazy(() => import('./components/Product'));
const About = lazy(() => import('./components/About'));
const ContactFrom = lazy(() => import('./components/ContactForm'));
const HotRollSheetPage = lazy(() => import('./components/HotRollSheetPage'));
const HRCoils = lazy(() => import('./components/HRCoils'));
const CRSheets = lazy(() => import('./components/CRSheets'));
const CRCoils = lazy(() => import('./components/CRCoils'));
const PrivacyPage = lazy(() => import('./components/PrivacyPage'));
const Blog1 = lazy(() => import('./components/Blog1'));
const Blog2 = lazy(() => import('./components/Blog2'));
const Blog3 = lazy(() => import('./components/Blog3'));

const AppLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen w-full">
          <img src="/steelpic.jpg" className=" rounded-full h-24 w-24 border-t-4 border-b-4 border-[#12396d]"></img>
          <p className="ml-4 text-[#12396d]  font-semibold text-lg">Loading...</p>
        </div>
      }
    >
      <div className="w-full overflow-x-hidden">
        <Nav />
        <main className="w-full overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
        <PhoneCall />
      </div>
    </Suspense>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Layout /> },
      { path: "hotRolled/sheet", element: <Catgory /> },
      { path: "hotRolled/coils", element: <Hotrolledcoilcat /> },
      { path: "coldRolled/sheet", element: <ColdCatgory /> },
      { path: "coldRolled/coils", element: <ColdCoils /> },
      { path: "product/:id", element: <HotCatDelevery /> },
      { path: "coilproduct/:id", element: <HotCatCoilsDEl /> },
      { path: "coldproductsheet/:id", element: <ColdSheetDel /> },
      { path: "coldproductcoil/:id", element: <ColdCoilsdel /> },
      { path: "search", element: <SearchPage /> },
      { path: "mildStainless", element: <Product /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactFrom /> },
      { path: "hrsheets", element: <HotRollSheetPage /> },
      { path: "hrcoils", element: <HRCoils /> },
      { path: "crsheets", element: <CRSheets /> },
      { path: "crcoils", element: <CRCoils /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "temp", element: <Blog1 /> },

{ path: "smooth", element: <Blog2 /> },
{ path: "basic", element: <Blog3 /> },
      
    ],
  },
]);

function App() {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17041977731/C92DCJmT7scaEIPjn74_'
      });
    }
  }, [location]);
  return <RouterProvider router={appRouter} />;
}

export default App;
