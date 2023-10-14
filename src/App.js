import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';
// import ProductFilters from './components/ProductFilters';

function App() {
  return (
    <div className="App">
      <Menu />
      <SideMenu />
      <div id='content'>
        <Home />
        <About />
        <Products />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
