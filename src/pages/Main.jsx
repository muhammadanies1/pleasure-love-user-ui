import React from "react";
import TabletCarousel from "../components/molecules/carousel/tablet-carousel";
import CustomCarousel from "../components/molecules/carousel/laptop-carousel";
import MainLayouts from "../components/organisms/layouts/main";

const Main = () => {
  return (
    <MainLayouts>
      <div className="laptop:hidden">
        <TabletCarousel />
      </div>
      <div className="hidden laptop:block bg-[#f3f3f3] h-[400px] py-12">
        <div className="px-96">
          <CustomCarousel />
        </div>
      </div>
    </MainLayouts>
  );
};

export default Main;
