import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import ScrollToTop from './ScrollToTop';
import SearchBarCont from './SearchBarCont';
import Electromenager from './Categories/Electromenager';
import SmartPhone from './Categories/SmartPhone';
import Informatique from './Categories/Informatique';
import Assistance from './Assistance';
import Motocycle from './Categories/Motocycle';
import Meubles from './Categories/Meubles';
import ProductDetail from './ProductDetail';
import Loading from './Loading';


const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Adjust time as needed to match your loading duration

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {loading && <Loading />}

      <ScrollToTop />
      <Header />
      <SearchBarCont />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/Assistance" element={<Assistance />} />
          <Route path="/category/Electroménager" element={<Electromenager />} />
          <Route path="/category/Smart Phone" element={<SmartPhone />} />
          <Route path="/category/Informatique" element={<Informatique />} />
          <Route path="/category/Motocycle" element={<Motocycle />} />
          <Route path="/category/Meubles" element={<Meubles />} />
          <Route path="/product/:id" element={<ProductDetail />} />


        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;