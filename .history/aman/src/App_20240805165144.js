import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import SearchBarCont from './SearchBarCont';
import CategoryDetailsPage from './CategoriesPages';


function App() {
  return (
    <div className="">
      <Router>
      <ScrollToTop />
        <Header />
        <SearchBarCont />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/category/:name" component={CategoryDetailsPage } />
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
