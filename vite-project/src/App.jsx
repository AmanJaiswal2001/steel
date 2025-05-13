import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import './App.css';
import { useEffect } from "react";

import Nav from './components/Nav';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Catgory from './components/Catgory';
import ColdCatgory from './components/ColdCatgory';
import HotCatDelevery from './components/HotCatDelevery';
import Hotrolledcoilcat from './components/Hotrolledcoilcat';
import HotCatCoilsDEl from './components/HotCatCoilsDEl';
import ColdSheetDel from './components/ColdSheetDel';
import ColdCoils from './components/ColdCoils';
import ColdCoilsdel from './components/ColdCoilsdel';
import PhoneCall from './components/PhoneCall';
import SearchPage from './components/SearchPage';
import Product from './components/Product';
import About from './components/About';
import ContactFrom from './components/ContactForm';
import HotRollSheetPage from './components/HotRollSheetPage';
import HRCoils from './components/HRCoils';
import CRSheets from './components/CRSheets';
import CRCoils from './components/CRCoils';

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
    ],
  },
]);

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <main className="w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <PhoneCall />
    </div>
  );
}

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
