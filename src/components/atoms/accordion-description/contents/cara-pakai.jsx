import React from "react";
import useDetailProduct from "../../../../stores/useDetailProduct";

const CaraPakai = () => {
  const { detailProduct } = useDetailProduct();

  return <div>{detailProduct.cara_pakai}</div>;
};

export default CaraPakai;
