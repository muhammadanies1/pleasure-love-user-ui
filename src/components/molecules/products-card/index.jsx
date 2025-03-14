import { Image } from "antd";
import React from "react";

const ProductItemsCard = ({ imageSrc, name, price }) => {
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          height: "200px",
        }}
      >
        <Image
          preview={false}
          src={imageSrc ? imageSrc : null}
          height={200}
          alt={imageSrc ? "product-image" : "none"}
          width={"100%"}
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
      </div>
      <div
        style={{
          height: "100px",
          display: "flex",
          flexDirection: "column",
          fontWeight: "bold",
        }}
      >
        <span>{name ? name : "-"}</span>
        <span>Rp. {price ? price : "0"}</span>
      </div>
    </div>
  );
};

export default ProductItemsCard;
