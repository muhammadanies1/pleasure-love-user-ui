import { Image } from "antd";
import React from "react";
import { LogoPLoveNoBg } from "../../../../assets";

const LogoHeader = () => {
  return (
    <div
      style={{
        cursor: "pointer",
        width: "20%",
      }}
    >
      <Image
        alt="logo-pleasure-love"
        src={LogoPLoveNoBg}
        width={"100%"}
        height={50}
        preview={false}
      />
    </div>
  );
};

export default LogoHeader;
