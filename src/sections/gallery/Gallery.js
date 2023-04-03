import React from 'react';
import './Gallery.scss';
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';


function Gallery() {
  return (
    <div className="Gallery">
      <div className="Shell">
        <div className="Section_body">
          <div className="Gallery_inner">
                <div className="Masonry">

                  <div className="FadeAction">
                    <img src={c1} alt="ProductSales"/>
                    <div className="FadeContent c1">
                      <h1>Sneakers for Sports</h1>
                    </div>
                  </div>

                  <div className="FadeAction">
                    <img src={c2} alt="ProductSales" />
                    <div className="FadeContent c2">
                      <h1>Sneakers for Sports</h1>
                    </div>
                  </div>

                  <div className="FadeAction">
                    <img src={c3} alt="ProductSales" />
                    <div className="FadeContent c3">
                      <h1>Sneakers for Sports</h1>
                    </div>
                  </div>

                  <div className="FadeAction">
                    <img src={c4} alt="ProductSales" />
                    <div className="FadeContent c4">
                      <h1>Sneakers for Sports</h1>
                    </div>
                  </div>
                </div>

                <div className="MasonryAside">
                  <div className="FadeAction">
                    <img src={c5} alt="ProductSales"/>
                    <div className="FadeContent c5">
                      <h1>Sneakers for Sports</h1>
                    </div>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </div>



  );
}

export default Gallery;
