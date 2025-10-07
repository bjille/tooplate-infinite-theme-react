import logo from "./assets/img/econcepts-logo.svg";
import "./App.scss";
import NavbarReact from "./NavbarReact";
import WhatWeDo from "./whatwedo";
import Testimonials from "./testimonials";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <section id="infinite" class="text-white tm-font-big tm-parallax">
        <NavbarReact />

        <div class="text-center tm-hero-text-container">
          <div class="tm-hero-text-container-inner">
            <h2 class="tm-hero-title">Infinite Loop</h2>
            <p class="tm-hero-subtitle">
              Bootstrap 4.0 Parallax Theme
              Free HTML Template by TOOPLATE
            </p>
          </div>
        </div>

        <div class="tm-next tm-intro-next">
          <a href="#whatwedo" class="text-center tm-down-arrow-link">
            <i class="fas fa-2x fa-arrow-down tm-down-arrow"></i>
          </a>
        </div>
      </section>
      <WhatWeDo />
      <Testimonials />
      <Gallery />
      <Contact />
    </div >
  );
}

export default App;
