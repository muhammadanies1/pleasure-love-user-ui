import React, { useCallback, useMemo } from "react";
import MainLayouts from "../../components/organisms/layouts/main";
import { Button, Divider } from "antd";
import useCartCounter from "../../stores/useCartCounter";
import { useNavigate } from "react-router";
import ROUTING from "../../constants/routing";

const RingkasanProduk = () => {
  const { detailData } = useCartCounter();
  const navigate = useNavigate();

  const toPembayaran = useCallback(() => {
    navigate(ROUTING.PEMBAYARAN);
  }, [navigate]);

  const totalHarga = useMemo(() => {
    if (detailData.length === 0) {
      return 0;
    }
    return detailData.reduce((total, item) => total + item.priceTotal, 0);
  }, [detailData]);

  return (
    <MainLayouts>
      <div className="flex flex-col">
        <span className="text-lg font-bold px-10 mt-5">
          Ringkasan Pembelian
        </span>
        <Divider />
        <div className="flex flex-col gap-3 px-10 justify-center">
          {detailData.map((el, idx) => (
            <>
              <div className="flex flex-col" key={idx}>
                <img src={el.srcImage} width={100} height={100} alt="gambar" />
                <span>{el.productName}</span>
                <span className="text-xs font-semibold">
                  Harga Sub Total: Rp {el.priceTotal}
                </span>
                <span className="text-xs font-semibold">
                  Jumlah Barang: {el.jmlBeliBrg}
                </span>
              </div>
              <Divider />
            </>
          ))}
        </div>
        <div className="flex justify-center font-bold">
          Total : Rp {totalHarga}
        </div>
        <div className="flex justify-center px-10 mt-5">
          <Button className="w-full" type="primary" onClick={toPembayaran}>
            Checkout
          </Button>
        </div>
      </div>
    </MainLayouts>
  );
};

export default RingkasanProduk;
