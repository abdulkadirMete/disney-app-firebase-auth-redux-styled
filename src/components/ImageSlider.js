import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Caurousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="slide"></img>
      </Wrap>

      <Wrap>
        <img src="/images/slider-badag.jpg" alt="slide"></img>
      </Wrap>
    </Caurousel>
  );
};

export const Caurousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

export const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 4px solid transparent;
    box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.63),
      0px 16px 10px -10px rgba(0, 0, 0, 0.73);
      
      transition-duration: 300ms;

    &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
    }
  }
`;
