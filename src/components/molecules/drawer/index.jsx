import { Drawer } from "antd";
import React from "react";
import useDrawerCart from "../../../stores/useDrawerCart";

const CustomDrawer = () => {
  const { isDrawerCartOpen, close } = useDrawerCart();
  return (
    <Drawer
      title="Your Cart"
      placement={"right"}
      closable={false}
      onClose={close}
      open={isDrawerCartOpen}
    >
      <p>Your Cart is empty</p>
    </Drawer>
  );
};

export default CustomDrawer;
