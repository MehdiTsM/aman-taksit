import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Loading from './Loading';
import Login from './Login';
import AdminDashboard from './AdminDashboard';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
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