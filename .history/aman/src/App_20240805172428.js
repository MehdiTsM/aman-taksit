import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import SearchBarCont from './SearchBarCont';
import Electromenager from './Categories/Electromenager';
import SmartPhone from './SmartPhone';
import Informatique from './Informatique';


function App() {
  return (
    <div className="">
      <Router>
      <ScrollToTop />
        <Header />
        <SearchBarCont />
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route path="/a-propos" element={<About />}/>
          <Route path="/category/Electroménager" element={<Electromenager />} />
          <Route path="/category/Smart Phone" element={<SmartPhone />} />
          <Route path="/category/Informatique" element={<Informatique />} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
