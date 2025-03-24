import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconCart = ({ ...attrs }) => {
  return (
    <FontAwesomeIcon
      icon={faCartPlus}
      style={{ color: "white", cursor: "pointer" }}
      {...attrs}
    />
  );
};

export default IconCart;
