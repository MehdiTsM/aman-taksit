import React, { useState } from 'react';
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import SearchBarCont from './SearchBarCont';
import Electromenager from './Categories/Electromenager';
import SmartPhone from './Categories/SmartPhone';
import Informatique from './Categories/Informatique';
import Assistance from './Assistance';

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();  
    useEffect(() => {
      const unlisten = history.listen((location, action) => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 500); // Adjust timeout as needed
      });
  
      return () => {
        unlisten();
      };
    }, [history]);


  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <ScrollToTop />
        <Header />
        <SearchBarCont />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/Assistance" element={<Assistance />} />
            <Route path="/category/Electroménager" element={<Electromenager />} />
            <Route path="/category/Smart Phone" element={<SmartPhone />} />
            <Route path="/category/Informatique" element={<Informatique />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;