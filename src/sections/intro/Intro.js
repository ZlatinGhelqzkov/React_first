import React from 'react';
import './Intro.scss';
import Banner from '../../assets/banner-img.png';

function Intro() {
  return (
    <div className="Intro">
      <div className="Shell">
        <div className="Intro_inner">
          <div className="Intro_content">
            <h2>Nike new collection!</h2>
            <p>
              New shoes, new memories, new emotion
              This is what Nikies are build for.
              Experience perfection with each step you take, with our all new design.
              The new CloudFoam.
            </p>
            <div className="Intro_btn">
              <button>
                <i className="material-icons">close</i>
                </button>
              <span>add to bag</span>
            </div>
          </div>

          <div className="Intro_banner">
            <img src={Banner} alt="BannerShoe"/>
          </div>
        </div>
      </div>
    </div>

  );
 }

export default Intro;
