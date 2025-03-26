import React from "react";

const Product = ({
  srcImage,
  productName,
  price,
  oldPrice,
  discount,
  onClick,
}) => {
  return (
    <div
      className="min-w-[150px] flex flex-col gap-1 cursor-pointer"
      onClick={onClick ? onClick : undefined}
    >
      <img src={srcImage} alt="product-image" className="w-[100px] h-[100px]" />
      <span className="font-bold text-xs">{productName}</span>
      <span className="font-bold text-sm">Rp {price}</span>
      {oldPrice ? (
        <div className="flex flex-row gap-2">
          <span className="text-xs">
            <s>Rp {oldPrice}</s>
          </span>
          <span className="text-red bg-pink text-xs font-bold px-1 rounded">
            {discount}
          </span>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default Product;
