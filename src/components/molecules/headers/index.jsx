import React from "react";
import LogoHeader from "./logo-header";
import SearchHeader from "./search-header";
import IconUser from "../../atoms/font-awesome/icon-user";
import IconCart from "../../atoms/font-awesome/icon-cart";
import IconMenu from "../../atoms/font-awesome/icon-menu";
import useDrawerMenu from "../../../stores/useDrawerMenu";
import { Avatar, Badge } from "antd";
import useCartCounter from "../../../stores/useCartCounter";

const Header = () => {
  const { open } = useDrawerMenu();
  const { countCart } = useCartCounter();

  return (
    <header className="bg-primary flex flex-row h-20 items-center px-5 gap-5 laptop:px-96">
      <LogoHeader className="hidden laptop:block cursor-pointer" />
      <SearchHeader />
      <IconUser className="hidden tablet:block" />
      <Badge count={countCart} color="white">
        <Avatar icon={<IconCart />} style={{ backgroundColor: "#afd1d2" }} />
      </Badge>
      <IconMenu className="tablet:hidden" onClick={open} />
    </header>
  );
};

export default Header;
