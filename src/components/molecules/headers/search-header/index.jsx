import Search from "antd/es/transfer/search";
import React from "react";

const SearchHeader = ({ ...attrs }) => {
  return <Search placeholder="Cari disini..." {...attrs} />;
};

export default SearchHeader;
