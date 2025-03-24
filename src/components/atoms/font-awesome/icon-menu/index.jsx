import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconMenu = ({ ...attrs }) => {
  return (
    <FontAwesomeIcon
      icon={faBars}
      style={{ color: "white", cursor: "pointer" }}
      {...attrs}
    />
  );
};

export default IconMenu;
