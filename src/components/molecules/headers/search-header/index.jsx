import Search from "antd/es/transfer/search";
import React from "react";

const SearchHeader = ({ ...attrs }) => {
  return (
    <div
      style={{
        width: "70%",
      }}
    >
      <Search placeholder="Cari disini..." {...attrs} />
    </div>
  );
};

export default SearchHeader;
