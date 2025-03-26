import React from "react";
import MainLayouts from "../../../components/organisms/layouts/main";
import useDetailProduct from "../../../stores/useDetailProduct";
import { Button, Divider } from "antd";
import {
  CustomIconHargaTerbaik,
  CustomIconOngkirHemat,
  CustomIconOriginalProduct,
} from "../../../assets/images";
import AccordionDescription from "../../../components/atoms/accordion-description";
import usePushCart from "../../../stores/usePushCart";
import DrawerPushToCart from "../../../components/molecules/drawer/drawer-push-cart";

const ProductDetails = () => {
  const { detailProduct } = useDetailProduct();
  const { open } = usePushCart();

  return (
    <MainLayouts>
      <div className="flex flex-col">
        <div className=" flex justify-center w-full">
          <img
            src={detailProduct.image_list}
            alt="images-data"
            width={250}
            height={500}
          />
        </div>
        <div className="px-10 flex flex-col gap-1">
          <span className="text-lg flex flex-wrap">
            {detailProduct.name_product}
          </span>
          <p className="flex flex-row gap-1 ">
            <span className="text-lg flex flex-wrap font-bold">
              Rp {detailProduct.price}
            </span>
            {detailProduct.old_price !== 0 ? (
              <>
                <span className="text-base">
                  <s>Rp {detailProduct.old_price}</s>
                </span>
                <span className="text-base font-bold text-red bg-pink rounded px-1">
                  {detailProduct.discount}
                </span>
              </>
            ) : (
              false
            )}
          </p>
          {detailProduct.availability ? (
            <div className="border-[2px] border-green px-2 text-green text-xs font-bold w-[120px] text-center rounded">
              Stock Tersedia
            </div>
          ) : (
            false
          )}
        </div>
        <Divider />
        <div className="px-10 flex flex-row gap-5 justify-between">
          <div className="flex flex-col gap-2">
            <img src={CustomIconHargaTerbaik} width={50} alt="icon" />
            <span className="text-xs">Harga Terbaik</span>
          </div>
          <div className="flex flex-col gap-2">
            <img src={CustomIconOriginalProduct} width={50} alt="icon" />
            <span className="text-xs">Produk Original</span>
          </div>
          <div className="flex flex-col gap-2">
            <img src={CustomIconOngkirHemat} width={50} alt="icon" />
            <span className="text-xs">Gratis Ongkir</span>
          </div>
        </div>
        <Divider />
        {detailProduct.keunggulan_product ? (
          <ul className="px-10" style={{ listStyleType: "disc" }}>
            {detailProduct.keunggulan_product.map((el, idx) => (
              <li key={idx} className="text-sm font-bold">
                {el}
              </li>
            ))}
          </ul>
        ) : (
          false
        )}
      </div>
      <div className="px-3">
        <AccordionDescription />
      </div>
      {/* Sticky Button */}
      <div className="sticky bottom-0 w-full bg-white shadow-md p-4 flex justify-center gap-5">
        <Button type="default" className="w-4/5 text-lg" onClick={open}>
          + Keranjang
        </Button>
        <Button type="primary" className="w-4/5 text-lg">
          Beli Sekarang
        </Button>
      </div>
      <DrawerPushToCart />
    </MainLayouts>
  );
};

export default ProductDetails;
