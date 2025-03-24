import { Carousel } from "antd";
import React, { useMemo } from "react";
import banners from "../../../../__mock/banners-carousel";

const contentStyle = {
  margin: 0,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const TabletCarousel = () => {
  const listBanners = useMemo(() => {
    return banners;
  }, []);

  return (
    <>
      <Carousel infinite={true} autoplay dots={false}>
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

export default TabletCarousel;
