import React from "react";
import useDetailProduct from "../../../../stores/useDetailProduct";

const ProductDescription = () => {
  const { detailProduct } = useDetailProduct();

  return (
    <div className="flex flex-col gap-3">
      <span>{detailProduct.deskripsi}</span>
      <p className="flex flex-col gap-3">
        <span className="font-bold">Manfaat Produk</span>
        <ol style={{ listStyleType: "decimal" }} className="px-5">
          {detailProduct.manfaat_product.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ol>
      </p>
      <p className="flex flex-col gap-3">
        <span className="font-bold">Nomor Izin Edar (NIE)</span>
        <span>{detailProduct.nomor_izin_edar}</span>
      </p>
      <p className="flex flex-col gap-3">
        <span className="font-bold">Kemasan</span>
        <span>{detailProduct.jenis_kemasan}</span>
      </p>
      <p className="flex flex-col gap-3">
        <span className="font-bold">Tanggal Kadaluwarsa</span>
        <span>{detailProduct.tanggal_kedaluwarsa}</span>
      </p>
      <p className="flex flex-col gap-3">
        <span className="font-bold">Nama Produsen</span>
        <span>{detailProduct.nama_produsen}</span>
      </p>
    </div>
  );
};

export default ProductDescription;
