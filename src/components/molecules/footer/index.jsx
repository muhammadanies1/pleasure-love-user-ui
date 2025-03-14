import React from "react";

const Footer = ({ ...attrs }) => {
  return (
    <div
      style={{
        height: "5vh",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...attrs}
    >
      © 2025 PT Aji Inovasi Teknologi. All rights reserved.
    </div>
  );
};

export default Footer;
