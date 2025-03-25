import { Drawer } from "antd";
import React from "react";
import useDrawerMenu from "../../../../stores/useDrawerMenu";

const DrawerMenu = () => {
  const { close, isDrawerMenuOpen } = useDrawerMenu();

  return (
    <Drawer placement="left" open={isDrawerMenuOpen} onClose={close}>
      <p className="text-white">Menuus</p>
    </Drawer>
  );
};

export default DrawerMenu;
