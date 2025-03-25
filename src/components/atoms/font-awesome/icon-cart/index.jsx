import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useDrawerCart from "../../../../stores/useDrawerCart";
import DrawerCart from "../../../molecules/drawer/drawer-cart";

const IconCart = ({ ...attrs }) => {
  const { open } = useDrawerCart();

  return (
    <>
      <FontAwesomeIcon
        icon={faCartPlus}
        style={{ color: "white", cursor: "pointer" }}
        onClick={open}
        {...attrs}
      />
      <DrawerCart />
    </>
  );
};

export default IconCart;
