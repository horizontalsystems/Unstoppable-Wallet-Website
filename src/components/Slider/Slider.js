import React from 'react';

import Slick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'

function Slider({ slidesToShow, slidesToScroll, children }) {
  const settings = {
    dots: true,
    slidesToShow,
    slidesToScroll,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

  return (
    <div className="Slider">
      <Slick {...settings}>
        {children}
      </Slick>
    </div>
  );
}

export default Slider
