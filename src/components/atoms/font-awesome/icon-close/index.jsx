import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useDrawerMenu from "../../../../stores/useDrawerMenu";

const IconClose = ({ ...attrs }) => {
  const { close } = useDrawerMenu();

  return (
    <FontAwesomeIcon
      icon={faCircleXmark}
      style={{ cursor: "pointer" }}
      onClick={close}
      {...attrs}
    />
  );
};

export default IconClose;
