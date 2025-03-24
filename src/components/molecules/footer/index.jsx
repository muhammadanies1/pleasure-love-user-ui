import React from "react";

const Footer = ({ ...attrs }) => {
  return (
    <div
      style={{
        height: "50px",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="text-xs text-[#121212] tablet:text-sm laptop:text-lg "
      {...attrs}
    >
      © 2025 PT Aji Inovasi Teknologi. All rights reserved.
    </div>
  );
};

export default Footer;
