
import galleryImg01 from "./assets/img/gallery-img-01.jpg";
import galleryImg02 from "./assets/img/gallery-img-02.jpg";
import galleryImg03 from "./assets/img/gallery-img-03.jpg";
import galleryImg04 from "./assets/img/gallery-img-04.jpg";
import galleryImg05 from "./assets/img/gallery-img-05.jpg";
import galleryImg06 from "./assets/img/gallery-img-06.jpg";

function Gallery() {
    return (
        <section id="gallery" className="tm-section-pad-top">
            <div className="container tm-container-gallery">
                <div className="row">
                    <div className="text-center col-12">
                        <h2 className="tm-text-primary tm-section-title mb-4">Gallery</h2>
                        <p className="mx-auto tm-section-desc">
                            Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="mx-auto tm-gallery-container">
                            <div className="grid tm-gallery">
                                <a href={galleryImg01}>
                                    <figure className="effect-honey tm-gallery-item">
                                        <img src={galleryImg01} alt="Image 1" className="img-fluid" />
                                        <figcaption>
                                            <h2><i>Physical Health <span>Exercise!</span></i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                                <a href={galleryImg02}>
                                    <figure className="effect-honey tm-gallery-item">
                                        <img src={galleryImg02} alt="Image 2" className="img-fluid" />
                                        <figcaption>
                                            <h2><i>Rain on Glass <span>Second Image</span></i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                                <a href={galleryImg03}>
                                    <figure className="effect-honey tm-gallery-item">
                                        <img src={galleryImg03} alt="Image 3" className="img-fluid" />
                                        <figcaption>
                                            <h2><i><span>Sea View</span> Mega City</i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                                <a href={galleryImg04}>
                                    <figure className="effect-honey tm-gallery-item">
                                        <img src={galleryImg04} alt="Image 4" className="img-fluid" />
                                        <figcaption>
                                            <h2><i>Dream Girl <span>Thoughts</span></i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                                <a href={galleryImg05}>
                                    <figure className="effect-honey tm-gallery-item">
                                        <img src={galleryImg05} alt="Image 5" className="img-fluid" />
                                        <figcaption>
                                            <h2><i><span>Workstation</span> Offices</i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                                <a href={galleryImg06}>
                                    <figure className="effect-honey tm-gallery-item">
                                        <img src={galleryImg06} alt="Image 6" className="img-fluid" />
                                        <figcaption>
                                            <h2><i>Just Above <span>The City</span></i></h2>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;