// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
   
 
  
  
  
//   ]
//   )

  return (


  //  <Router>
  <>
  <Nav />
  <main className="overflow-x-hidden ">
        <Outlet />
      </main>
   
  

  <Footer /> 
  {/* <PhoneCall/> */}

</>
    // </Router>
  )
}
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App
