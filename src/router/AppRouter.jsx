import { Routes,Route, HashRouter } from "react-router-dom";

import React, { useContext } from 'react'
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/notFound/NotFound";
import Details from "../pages/details/Details";
import RequiredAuth from "../components/RequiredAuth/RequiredAuth";
import useAuth from "../hooks/useAuth";
import NotAuthorized from "../pages/notAuthorized/NotAuthorized";

const AppRouter = () => {

  const context=useAuth();
  return (
    <HashRouter>
    
    {context.isLoggedIn &&<Navbar/>}

    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Login/>} />

    <Route element={<RequiredAuth/>}>

       {context.isLoggedIn ? <Route path="/home" element={<Home/>} />:<Route path="/home" element={<NotAuthorized/>} /> }
      {context.isLoggedIn &&  <Route path="/home/details" element={<Details/>} />}
     { context.isLoggedIn &&  <Route path="/about" element={<About/>} />}
    </Route>
        <Route path="*" element={<NotFound/>} />

    

    </Routes>
    
    </HashRouter>
  )
}

export default AppRouter