import { BrowserRouter,Routes,Route } from "react-router-dom";

import React from 'react'
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/notFound/NotFound";
import Details from "../pages/details/Details";
const AppRouter = () => {

  return (
    <BrowserRouter>
    
    <Navbar/>

    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/home/details" element={<Details/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/logout" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />

    

    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter