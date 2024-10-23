"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const DetailsSlider = ({ image }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  console.log(image)

  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        {image.map((item) => (
         
          
          <>
            <div
              style={{ position: "relative", width: "100%", height: "500px" }}
            >
              <Image
                src={`http://localhost:8000${item}`}
                fill
                style={{ objectFit: "cover" }}
                alt="Product Image"
              />
            </div>
          </>
        ))}
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {image.map((item) => (
          <>
            <Image
              src={`http://localhost:8000${item}`}
              height={200}
              width={200}
              alt="Product Image"
            />
          </>
        ))}
      </Slider>
    </div>
  );
};

export default DetailsSlider;
