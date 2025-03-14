import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconUser = ({ ...attrs }) => {
  return (
    <FontAwesomeIcon
      icon={faUser}
      style={{ color: "white", cursor: "pointer" }}
      {...attrs}
    />
  );
};

export default IconUser;
