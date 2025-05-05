// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'

import Layout from './components/Layout'
// import CardContainer from './components/CardContainer';
import Footer from "./components/Footer";
import Catgory from "./components/Catgory";
import ColdCatgory from "./components/ColdCatgory";
import HotCatDelevery from "./components/HotCatDelevery";
import Hotrolledcoilcat from "./components/Hotrolledcoilcat";
import HotCatCoilsDEl from "./components/HotCatCoilsDEl";
import ColdSheetDel from "./components/ColdSheetDel";
import ColdCoils from "./components/ColdCoils";

import ColdCoilsdel from "./components/ColdCoilsdel";
import PhoneCall from "./components/PhoneCall";
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";
import Product from "./components/Product";
import Section from "./components/Section";
import Strainless from "./components/Strainless";
import About from "./components/About";
import ContactFrom from "./components/ContactForm"
import { useEffect } from "react";
import HotRollSheetPage from "./components/HotRollSheetPage";
import HRCoils from "./components/HRCoils";
import CRSheets from "./components/CRSheets";
import CRCoils from "./components/CRCoils";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "hotRolled/sheet",
        element: <Catgory />,
      },
      {
        path: "hotRolled/coils",
        element: <Hotrolledcoilcat />,
      },
      {
        path:"/coldRolled/sheet",
        element:<ColdCatgory/>
      },
      {
        path:"/coldRolled/coils",
        element:<ColdCoils/>
      },
      {
        path:"/search",
        element:<SearchPage/>
      },
      {
        path:"/mildStainless",
        element:<Product/>
      },
      // {
      //   path:"/stainless",
      //   element:<Strainless/>
      // },

      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactFrom/>
      },
      {
        path:"/hrsheets",
        element:<HotRollSheetPage/>
      },{
        path:"/hrcoils",
        element:<HRCoils/>
      },{
        path:"/crsheets",
        element:<CRSheets/>
      },{
        path:"/crcoils",
        element:<CRCoils/>
      },
      
      { path: "product/:id", element: <HotCatDelevery /> },
      { path: "coilproduct/:id", element: <HotCatCoilsDEl /> },
      { path: "coldproductsheet/:id", element: <ColdSheetDel /> },
       { path: "/coldproductcoil/:id", element: <ColdCoilsdel /> },
     
      {
        index: true,
        element: <Layout />, // This will render on root "/"
      },
    ],
  },
]);

function AppLayout() {
   
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location]);

  
  
  
//   ]
//   )

  return (


  //  <Router>
  <>
  
  <Nav />
  <main className="overflow-x-hidden flex-grow ">
        <Outlet />
      </main>
   
  

  <Footer /> 
  <PhoneCall/>

</>
    // </Router>
  )
}
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App
