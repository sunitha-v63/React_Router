import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import NotFound from "./Pages/NotFound";
import ProtectedPage from "./Pages/ProtectedPage";
import Setting from "./Pages/Setting";


function App() {
 return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />}>
          <Route path="Setting" element={<Setting/>}/>
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/protected" element={<ProtectedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
