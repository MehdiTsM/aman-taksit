import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'


function App() {
  return (
    <div className="">
      <Router>
      <ScrollToTop />
        <Header />
        <SearchBarCont />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/a-propos" element={<About />}/>
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
