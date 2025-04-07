// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'

import Layout from './components/Layout'
import CardContainer from './components/CardContainer';



function App() {
   
//   const appRouter=createBrowserRouter(
//     [{
// path:"/",
// element:<Layout/>,
// children:[
//   {
//     path:"/",
//     element:<CardContainer/>
//   },
//   // {
//   //   path:"/",
//   //   element:<CardContainer/>
//   // }
// ]


//     },
  
  
//   ]
//   )

  return (


   <Router>
  <Nav />
   
  <Layout/>
  
 

    </Router>
  )
}

export default App
