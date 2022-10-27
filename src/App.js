import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      {/* <Home /> */}
      {/* <About/> */}
      <Footer/>
    </Router>
  );
}

export default App;
