import { Button, Divider, Drawer, InputNumber } from "antd";
import React, { useCallback } from "react";
import usePushCart from "../../../../stores/usePushCart";
import useDetailProduct from "../../../../stores/useDetailProduct";
import useCounter from "../../../../stores/useCounter";
import useCartCounter from "../../../../stores/useCartCounter";
import { useNavigate } from "react-router";
import ROUTING from "../../../../constants/routing";

const DrawerPushToCart = () => {
  const { isDrawerPushCartOpen, close } = usePushCart();
  const { detailProduct } = useDetailProduct();
  const { addToCart, addDataToDetailData } = useCartCounter();
  const { bears, increasePopulation, decreasePopulation, resetCount } =
    useCounter();

  const navigate = useNavigate();

  const actionBtnKeranjang = useCallback(() => {
    let objCart = {
      productName: detailProduct.name_product,
      priceTotal: bears * detailProduct.price,
      srcImage: detailProduct.image_list,
      jmlBeliBrg: bears,
    };
    addDataToDetailData(objCart);
    addToCart(bears);
    close();
    navigate(ROUTING.INDEX);
    setTimeout(() => {
      resetCount();
    }, 2000);
  }, [
    addDataToDetailData,
    addToCart,
    bears,
    close,
    detailProduct.image_list,
    detailProduct.name_product,
    detailProduct.price,
    navigate,
    resetCount,
  ]);

  return (
    <Drawer
      title={null}
      placement="bottom"
      closable
      onClose={close}
      open={isDrawerPushCartOpen}
      height={"50%"}
      style={{
        borderTopRightRadius: "8px",
        borderTopLeftRadius: "8px",
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row min-h-24">
          <div className="basis-1/2">
            <img src={detailProduct.image_list} alt="product-image" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="basis-1/2 flex flex-col gap-1">
              <span>{detailProduct.name_product}</span>
              <span>Rp {detailProduct.price}</span>
            </div>
            <div className="flex gap-2">
              <Button size="large" onClick={decreasePopulation}>
                -
              </Button>
              <InputNumber
                size="large"
                width={30}
                defaultValue={bears}
                value={bears}
                min={1}
              />
              <Button size="large" onClick={increasePopulation}>
                +
              </Button>
            </div>
          </div>
        </div>
        <Divider />
        <Button type="primary" onClick={actionBtnKeranjang}>
          + Keranjang
        </Button>
      </div>
    </Drawer>
  );
};

export default DrawerPushToCart;
