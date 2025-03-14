import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import React from "react";
import { Banners1, Banners2, Banners3 } from "../../../assets";

const contentStyle = {
  margin: 0,
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "20px",
};

const CustomCarousel = () => {
  return (
    <>
      <Carousel
        arrows
        infinite={true}
        prevArrow={<FontAwesomeIcon icon={faCircleChevronLeft} />}
        nextArrow={<FontAwesomeIcon icon={faCircleChevronRight} />}
      >
        <div>
          <img
            alt="banner-1"
            width={"100%"}
            src={Banners1}
            style={contentStyle}
          />
        </div>
        <div>
          <img
            alt="banner-2"
            width={"100%"}
            src={Banners2}
            style={contentStyle}
          />
        </div>
        <div>
          <img
            alt="banner-3"
            width={"100%"}
            src={Banners3}
            style={contentStyle}
          />
        </div>
      </Carousel>
      <br />
    </>
  );
};

export default CustomCarousel;
