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
      { path: "product/:id", element: <HotCatDelevery /> },
      { path: "coilproduct/:id", element: <HotCatCoilsDEl /> },
    
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
  <main className=" ">
        <Outlet />
      </main>
   
  

  <Footer /> 
  

</>
    // </Router>
  )
}
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App
