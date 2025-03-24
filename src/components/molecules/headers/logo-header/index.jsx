import { Image } from "antd";
import React, { useCallback } from "react";
import { LogoPLoveNoBg } from "../../../../assets/images";
import { useNavigate } from "react-router";
import ROUTING from "../../../../constants/routing";

const LogoHeader = ({ ...attrs }) => {
  const navigate = useNavigate();

  const toMain = useCallback(() => {
    navigate(ROUTING.INDEX);
  }, [navigate]);

  return (
    <div onClick={toMain} {...attrs}>
      <Image
        alt="logo-pleasure-love"
        src={LogoPLoveNoBg}
        width={"100%"}
        height={45}
        preview={false}
      />
    </div>
  );
};

export default LogoHeader;
