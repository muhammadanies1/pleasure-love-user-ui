import React from "react";

const HeaderCategoryProduct = ({ categoryName }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-lg font-bold">
          <u>{categoryName}</u>
        </span>
        <span className="cursor-pointer text-xs">
          <u>Lihat Semua</u>
        </span>
      </div>
    </>
  );
};

export default HeaderCategoryProduct;
