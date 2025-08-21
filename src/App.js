import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

import SuperStoreSales from "./pages/SuperStore_Sales.js";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
