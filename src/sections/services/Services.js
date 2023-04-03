import React from 'react';
import './Services.scss';
import Icon1 from '../../assets/f-icon1.png';
import Icon2 from '../../assets/f-icon2.png';
import Icon3 from '../../assets/f-icon3.png';
import Icon4 from '../../assets/f-icon4.png';



function Services() {
  return (
    <div className="Services">
      <div className="Shell">
        <div className="Section_body">
          <div className="Services_inner">
            <div className="ServiceCards">
              <div className="ServiceCard_inner">
                <img src={Icon1} alt="ServiceCardTruck" />
                <h6>Free Delivery</h6>
                <p>Free shipping on all orders</p>
              </div>
              <div className="ServiceCard_inner">
                <img src={Icon2} alt="ServiceCardTruck" />
                <h6>Free Delivery</h6>
                <p>Free shipping on all orders</p>
              </div>
              <div className="ServiceCard_inner">
                <img src={Icon3} alt="ServiceCardTruck" />
                <h6>Free Delivery</h6>
                <p>Free shipping on all orders</p>
              </div>
              <div className="ServiceCard_inner">
                <img src={Icon4} alt="ServiceCardTruck" />
                <h6>Free Delivery</h6>
                <p>Free shipping on all orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Services;
