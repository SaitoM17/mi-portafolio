import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

import SuperStoreSales from "./pages/SuperStore_Sales.js";
import RamenRantings from "./pages/RamenRating.js";
import AmazonDelivery from "./pages/AmazonDelivery.js";
import PrecioTortilla from "./pages/PrecioTortillaMexico.js";
import SIEM from "./pages/SIEM.js";
import MexicoTradeStatis from "./pages/MexicoTradeStati.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Projects />
            <Contact />
          </>
        }/>
        <Route path="/superstore-sales" element={<SuperStoreSales />} />
        <Route path="/Ramen-ratings" element={<RamenRantings />} />
        <Route path="/Amazon-delivery" element={<AmazonDelivery />} />
        <Route path="/Precio-tortilla" element={<PrecioTortilla />} />
        <Route path="/Siem" element={<SIEM />} />
        <Route path="/Mexico-trade" element={<MexicoTradeStatis />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
