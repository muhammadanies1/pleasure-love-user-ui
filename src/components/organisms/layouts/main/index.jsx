import React from "react";
import Header from "../../../molecules/headers";
import Footer from "../../../molecules/footer";
import { FloatButton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const MainLayouts = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
      <FloatButton icon={<FontAwesomeIcon icon={faWhatsapp} />} />
    </div>
  );
};

export default MainLayouts;
