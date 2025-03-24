import React from "react";
import Header from "../components/molecules/headers";
import Footer from "../components/molecules/footer";
import TabletCarousel from "../components/molecules/carousel/tablet-carousel";
import CustomCarousel from "../components/molecules/carousel/laptop-carousel";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="laptop:hidden">
        <TabletCarousel />
      </div>
      <div className="hidden laptop:block bg-[#f3f3f3] h-[400px] py-12">
        <div className="px-96">
          <CustomCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
