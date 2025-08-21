// import React from "react";
// import Header from "./components/Header";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <Header />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

// Importa tus páginas de proyecto
import SuperStoreSales from "./pages/SuperStore_Sales.js";
// import RamenRatings from "./pages/Ramen_Ratings";

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
        {/* <Route path="/ramen-ratings" element={<RamenRatings />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
