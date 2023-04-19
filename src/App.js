import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header"
import Home  from "./Components/Home"

import Footer from "./Components/Footer";
import SignUp from './Components/SignUp';
import Login  from "./Components/Login"
import PrvtRoute from "./Components/PrvtRoute";
import About2 from './Components/About2';
import Blogs from './Components/Blogs'
import Contact from './Components/Contact';
import Services from './Components/Services';
import Events from './Components/Events';

function App  () {
  return (
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<PrvtRoute />}>
    <Route path="/aboutus" element={<About2 />} />
    <Route path="/services" element={<Services />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/blogs" element={<Blogs />} />
   <Route path="/events" element={<Events />} />
   </Route>
    </Routes>
     <Footer />
</BrowserRouter>
    
    </>
  )
}

export default App