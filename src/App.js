import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
// import Gallery from './Pages/Gallery';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
// import Footer from './Pages/Footer';
// import Maps from './Pages/Maps';
// import FAQ from './Pages/FAQ';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      {/* <Gallery/> */}
      {/* <Hero/>
      <About/>
      <Gallery/>
      <Services/>
      <Contact/>
      <FAQ/>
      <Maps/>
      <Footer/> */}
    </div>
  );
}

export default App;
