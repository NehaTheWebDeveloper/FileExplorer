import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import MainLayout from './Layout/MainLayout';
const PageRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path="" element={<MainLayout><Dashboard/></MainLayout>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes