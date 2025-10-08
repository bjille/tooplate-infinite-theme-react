import logo from "./assets/img/econcepts-logo.svg";
import "./App.scss";
import Navbar from "./Navbar";
import WhatWeDo from "./whatwedo";
import Testimonials from "./testimonials";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <section id="infinite" className="text-white tm-font-big tm-parallax">
        {/* <NavbarReact /> */}
        <Navbar />

        <div className="text-center tm-hero-text-container">
          <div className="tm-hero-text-container-inner">
            <h2 className="tm-hero-title">Infinite Loop</h2>
            <p className="tm-hero-subtitle">
              Bootstrap 4.0 Parallax Theme Free HTML Template by TOOPLATE
            </p>
          </div>
        </div>

        <div className="tm-next tm-intro-next">
          <a href="#whatwedo" className="text-center tm-down-arrow-link">
            <i className="fas fa-2x fa-arrow-down tm-down-arrow"></i>
          </a>
        </div>
      </section>
      <WhatWeDo />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
