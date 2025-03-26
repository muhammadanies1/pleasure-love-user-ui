import { Button, Divider, Drawer } from "antd";
import React, { useCallback, useMemo } from "react";
import useDrawerCart from "../../../../stores/useDrawerCart";
import useCartCounter from "../../../../stores/useCartCounter";
import { useNavigate } from "react-router";
import ROUTING from "../../../../constants/routing";

const DrawerCart = () => {
  const { isDrawerCartOpen, close } = useDrawerCart();
  const { detailData } = useCartCounter();

  const navigate = useNavigate();

  const totalHarga = useMemo(() => {
    if (detailData.length === 0) {
      return 0;
    }
    return detailData.reduce((total, item) => total + item.priceTotal, 0);
  }, [detailData]);

  const GoToRingkasan = useCallback(() => {
    close();
    navigate(ROUTING.PRODUCTS.RINGKASAN);
  }, [close, navigate]);

  return (
    <Drawer
      title="Your Cart"
      placement={"right"}
      closable
      onClose={close}
      open={isDrawerCartOpen}
    >
      <div className="flex flex-col gap-5">
        {detailData.length === 0 ? (
          "Your Cart is empty"
        ) : (
          <>
            {detailData.map((el, idx) => (
              <>
                <div key={idx} className="flex flex-row">
                  <div className="w-[40%]">
                    <img
                      src={el.srcImage}
                      alt="gambar"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-[60%] flex flex-row">
                    <div className="flex flex-col justify-between">
                      <span className="text-base font-semibold">
                        {el.productName}
                      </span>
                      <span className="text-xs font-semibold">
                        Jumlah Barang: {el.jmlBeliBrg}
                      </span>
                      <span className="text-xs font-semibold">
                        Harga Sub Total: Rp {el.priceTotal}
                      </span>
                    </div>
                  </div>
                </div>
                <Divider />
              </>
            ))}
            <div className="flex flex-col justify-center items-center">
              <span className="text-lg font-bold">Total : Rp {totalHarga}</span>
            </div>
            <Button type="primary" onClick={GoToRingkasan}>
              Checkout
            </Button>
          </>
        )}
      </div>
    </Drawer>
  );
};

export default DrawerCart;
