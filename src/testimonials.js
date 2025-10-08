import TestimonialsImg01 from "./assets/img/testimonial-img-01.jpg";
import TestimonialsImg02 from "./assets/img/testimonial-img-02.jpg";
import TestimonialsImg03 from "./assets/img/testimonial-img-03.jpg";
import TestimonialsImg04 from "./assets/img/testimonial-img-04.jpg";

import React from "react";
function Testimonials() {
  return (
    <section id="testimonials" className="tm-section-pad-top tm-parallax-2">
      <div className="container tm-testimonials-content">
        <div className="row">
          <div className="col-lg-12 tm-content-box">
            <h2 className="text-white text-center mb-4 tm-section-title">
              Testimonials
            </h2>
            <p className="mx-auto tm-section-desc text-center">
              Nulla dictum sem non eros euismod, eu placerat tortor lobortis.
              Suspendisse id velit eu libero pellentesque interdum. Etiam quis
              congue eros.
            </p>
            <div className="mx-auto tm-gallery-container tm-gallery-container-2">
              <div className="tm-testimonials-carousel">
                <figure className="tm-testimonial-item">
                  <img
                    src={TestimonialsImg01}
                    alt=""
                    className="img-fluid mx-auto"
                  />
                  <blockquote>
                    This background image includes a semi-transparent overlay
                    layer. This section also has a parallax image effect.
                  </blockquote>
                  <figcaption>Catherine Win (Designer)</figcaption>
                </figure>

                <figure className="tm-testimonial-item">
                  <img
                    src={TestimonialsImg02}
                    alt=""
                    className="img-fluid mx-auto"
                  />
                  <blockquote>
                    Testimonial section comes with carousel items. You can use
                    Infinite Loop HTML CSS template for your websites.
                  </blockquote>
                  <figcaption>Dual Rocker (CEO)</figcaption>
                </figure>

                <figure className="tm-testimonial-item">
                  <img
                    src={TestimonialsImg03}
                    alt=""
                    className="img-fluid mx-auto"
                  />
                  <blockquote>
                    Nulla finibus ligula nec tortor convallis tincidunt.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus.
                  </blockquote>
                  <figcaption>Sandar Soft (Marketing)</figcaption>
                </figure>

                <figure className="tm-testimonial-item">
                  <img
                    src={TestimonialsImg04}
                    alt=""
                    className="img-fluid mx-auto"
                  />
                  <blockquote>
                    Curabitur rutrum pharetra lobortis. Pellentesque vehicula,
                    velit quis eleifend fermentum, erat arcu aliquet neque.
                  </blockquote>
                  <figcaption>Oliva Htoo (Designer)</figcaption>
                </figure>

                <figure className="tm-testimonial-item">
                  <img
                    src={TestimonialsImg02}
                    alt=""
                    className="img-fluid mx-auto"
                  />
                  <blockquote>
                    Integer sit amet risus et erat imperdiet finibus. Nam lacus
                    nunc, vulputate id ex eget, euismod auctor augue.
                  </blockquote>
                  <figcaption>Jacob Joker (CTO)</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tm-bg-overlay"></div>
    </section>
  );
}

export default Testimonials;
