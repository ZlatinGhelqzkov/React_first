import React, { useState } from 'react';
import './App.scss';
import Logo from './assets/logo.png';
import Intro from './sections/intro/Intro';
import Services from './sections/services/Services';
import Gallery from './sections/gallery/Gallery';
import Products from './sections/products/Products';


function App() {
  const [btn, setBtn] = useState(false);

  return (

    <div className="App">
      <header className="Header">
        <div className="Shell">
          <div className="Header_inner">
            <div className="Logo">
              <img src={Logo} alt="Logo"/>
            </div>

            <div className="Nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">shop</a>
                    <div className="Nav_dropdown DrpShop">
                    <ul>
                      <li>
                        <a href="/">shop category</a>
                      </li>
                      <li>
                        <a href="/">product details</a>
                      </li>
                      <li>
                        <a href="/">product checkout</a>
                      </li>
                      <li>
                        <a href="/">shopping cart</a>
                      </li>
                      <li>
                        <a href="/">confirmation</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/">blog</a>
                  <div className="Nav_dropdown DrpBlog">
                  <ul>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Blog Details</a>
                    </li>
                  </ul>
                  </div>
                </li>
                <li>
                  <a href="/">pages</a>
                  <div className="Nav_dropdown DrpPages">
                  <ul>
                    <li>
                      <a href="/">Login</a>
                    </li>
                    <li>
                      <a href="/">Tracking</a>
                    </li>
                    <li>
                      <a href="/">Elements</a>
                    </li>
                  </ul>
                  </div>
                </li>
                <li>
                  <a href="/">contact</a>
                </li>
                <li>
                  <a href="/">
                    <i className="material-icons">shop</i>
                  </a>
                </li>
                <li>
                  <button onClick={()=> setBtn(!btn)}>
                    <i className="material-icons">search</i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className={`Search ${btn ? "open" : ""}`}>
            <input type="text" id="search" name="search" placeholder="Search Here" />
          </div>
        </div>
      </header>

      <Intro />
      <Services />
      <Gallery />
      <Products />

    </div>
  );
}

export default App;
