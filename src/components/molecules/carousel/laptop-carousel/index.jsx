import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import React, { useMemo } from "react";
import banners from "../../../../__mock/banners-carousel";

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
  const listBanners = useMemo(() => {
    return banners;
  }, []);

  return (
    <>
      <Carousel
        arrows
        infinite={true}
        autoplay
        prevArrow={<FontAwesomeIcon icon={faCircleChevronLeft} />}
        nextArrow={<FontAwesomeIcon icon={faCircleChevronRight} />}
      >
        {listBanners && listBanners.length > 0
          ? listBanners.map((item, idx) => (
              <div key={idx}>
                <img
                  alt={item.alt}
                  width={"100%"}
                  src={item.src}
                  style={contentStyle}
                />
              </div>
            ))
          : false}
      </Carousel>
      <br />
    </>
  );
};

export default CustomCarousel;
