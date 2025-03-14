import { Image } from "antd";
import React, { useCallback } from "react";
import { LogoPLoveNoBg } from "../../../../assets";
import { useNavigate } from "react-router";
import ROUTING from "../../../../constants/routing";

const LogoHeader = () => {
  const navigate = useNavigate();

  const toMain = useCallback(() => {
    navigate(ROUTING.INDEX);
  }, [navigate]);

  return (
    <div
      style={{
        cursor: "pointer",
        width: "20%",
      }}
      onClick={toMain}
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
