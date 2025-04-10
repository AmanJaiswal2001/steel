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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "hotRolled",
        element: <Catgory />,
      },
      {
        path: "coldRolled",
        element: <ColdCatgory />,
      },
      { path: "product/:id", element: <HotCatDelevery /> },
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
  <Outlet />
   
  

  <Footer /> 
  

</>
    // </Router>
  )
}
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App
