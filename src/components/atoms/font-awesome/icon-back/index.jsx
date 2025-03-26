import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconBack = ({ ...attrs }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: "white", cursor: "pointer" }}
        {...attrs}
      />
    </>
  );
};

export default IconBack;
