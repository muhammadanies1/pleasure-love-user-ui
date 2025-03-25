import React from "react";
import TabletCarousel from "../../molecules/carousel/tablet-carousel";
import CustomCarousel from "../../molecules/carousel/laptop-carousel";

const CarouselPromo = () => {
  return (
    <>
      <div className="laptop:hidden">
        <TabletCarousel />
      </div>
      <div className="hidden laptop:block bg-[#f3f3f3] h-[400px] py-12">
        <div className="px-96">
          <CustomCarousel />
        </div>
      </div>
    </>
  );
};

export default CarouselPromo;
