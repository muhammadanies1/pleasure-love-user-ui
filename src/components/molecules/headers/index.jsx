import React from "react";
import LogoHeader from "./logo-header";
import SearchHeader from "./search-header";
import IconUser from "../../atoms/icon-user";
import IconCart from "../../atoms/icon-cart";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "10vh",
        backgroundColor: "#afd1d2",
        alignItems: "center",
        paddingLeft: "20%",
        paddingRight: "20%",
        width: "100%",
        gap: "20px",
      }}
    >
      <LogoHeader />
      <SearchHeader />
      <div
        style={{
          width: "10%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "30px",
          height: "30px",
          alignItems: "center",
        }}
      >
        <IconUser />
        <IconCart />
      </div>
    </div>
  );
};

export default Header;
