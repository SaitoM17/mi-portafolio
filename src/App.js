import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

import AnimeAnalisis from "./pages/AnimeAnalisis.js";
import SuperStoreSales from "./pages/SuperStore_Sales.js";
import RamenRantings from "./pages/RamenRating.js";
import AmazonDelivery from "./pages/AmazonDelivery.js";
import PrecioTortilla from "./pages/PrecioTortillaMexico.js";
import SIEM from "./pages/SIEM.js";
import MexicoTradeStatis from "./pages/MexicoTradeStati.js";
import AutoPrice from "./pages/AutoPrice.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
            </>
          }/>
          <Route path="/Anime-analisis" element={<AnimeAnalisis />} />
          <Route path="/Automotive-price" element={<AutoPrice />} />
          <Route path="/superstore-sales" element={<SuperStoreSales />} />
          <Route path="/Ramen-ratings" element={<RamenRantings />} />
          <Route path="/Amazon-delivery" element={<AmazonDelivery />} />
          <Route path="/Precio-tortilla" element={<PrecioTortilla />} />
          <Route path="/Siem" element={<SIEM />} />
          <Route path="/Mexico-trade" element={<MexicoTradeStatis />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
