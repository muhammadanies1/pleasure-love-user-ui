import React, { useCallback, useMemo } from "react";
import MainLayouts from "../components/organisms/layouts/main";
import CarouselPromo from "../components/organisms/products-promo-carousel";
import {
  BannerPaketAman,
  BannerSlidePleasure,
  CustomIconHargaTerbaik,
  CustomIconOngkirHemat,
  CustomIconOriginalProduct,
  CustomIconPrivasiProduct,
} from "../assets/images";
import listProductsNewArrivals from "../__mock/list-products-new-arrivals";
import Product from "../components/atoms/products/main-menus/new-arrivals";
import HeaderCategoryProduct from "../components/molecules/category-products";
import ContainerProduct from "../components/atoms/products/container-product";
import listProductsPromo from "../__mock/list-products-promo";
import useDetailProduct from "../stores/useDetailProduct";
import { useNavigate } from "react-router";
import ROUTING from "../constants/routing";

const Main = () => {
  const { setDataDetail } = useDetailProduct();

  const navigate = useNavigate();

  const listNewArrivals = useMemo(() => {
    return listProductsNewArrivals;
  }, []);

  const listProductPromo = useMemo(() => {
    return listProductsPromo;
  }, []);

  const onClickDetail = useCallback(
    (detail) => {
      setDataDetail(detail);
      navigate(ROUTING.PRODUCTS.DETAIL);
    },
    [navigate, setDataDetail]
  );

  return (
    <MainLayouts>
      <div className="flex flex-col">
        <CarouselPromo />
        <div className="flex flex-col px-10 gap-10">
          <div className="flex flex-row justify-between">
            <div className="w-[100px] h-[100px] flex flex-col gap-3 items-center">
              <img src={CustomIconHargaTerbaik} alt="harga-terbaik" />
              <span className="text-xs">Harga Terbaik</span>
            </div>
            <div className="w-[100px] h-[100px] flex flex-col gap-3 items-center">
              <img src={CustomIconPrivasiProduct} alt="privasi-product" />
              <span className="text-xs">Paket Privasi & Aman</span>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="w-[100px] h-[100px] flex flex-col gap-3 items-center">
              <img src={CustomIconOriginalProduct} alt="harga-terbaik" />
              <span className="text-xs">Original & BPOM</span>
            </div>
            <div className="w-[100px] h-[100px] flex flex-col gap-3 items-center">
              <img src={CustomIconOngkirHemat} alt="privasi-product" />
              <span className="text-xs">Ongkir Satu untuk Semua</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-14 px-10">
          <HeaderCategoryProduct categoryName={"New Arrivals"} />
          <ContainerProduct>
            {listNewArrivals
              ? listNewArrivals.map((el, idx) => (
                  <Product
                    key={idx}
                    srcImage={el.image_list}
                    discount={el.discount}
                    oldPrice={el.old_price}
                    price={el.price}
                    productName={el.name_product}
                    onClick={() => onClickDetail(el)}
                  />
                ))
              : false}
          </ContainerProduct>
        </div>
        <div className="flex flex-col gap-5 px-10">
          <img src={BannerPaketAman} alt="paket-aman" className="rounded-md" />
          <img
            src={BannerSlidePleasure}
            alt="paket-slide-pleasure"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col mt-14 px-10">
          <HeaderCategoryProduct categoryName={"Promo Spesial"} />
          <ContainerProduct>
            {listProductPromo
              ? listProductPromo.map((el, idx) => (
                  <Product
                    key={idx}
                    srcImage={el.image_list}
                    discount={el.discount}
                    oldPrice={el.old_price}
                    price={el.price}
                    productName={el.name_product}
                  />
                ))
              : false}
          </ContainerProduct>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Main;
