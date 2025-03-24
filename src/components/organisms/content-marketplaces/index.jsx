import React, { useCallback } from "react";
import ProductItemsCard from "../../molecules/products-card";
import { ProductAPDS, ProductAPFP, ProductAVST } from "../../../assets/images";
import { useNavigate } from "react-router";

const Marketplace = () => {
  const navigate = useNavigate();

  const toDetail = useCallback(() => {
    navigate("/products/detail");
  }, [navigate]);

  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            New Arrivals
          </span>
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "12px",
              textAlign: "center",
              color: "grey",
              cursor: "pointer",
            }}
          >
            Lihat Semua
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <ProductItemsCard
            imageSrc={ProductAPDS}
            name={"Anal Plug Diamond Aluminium Safe for Play"}
            price={"24.900"}
            onClick={toDetail}
          />
          <ProductItemsCard
            imageSrc={ProductAPFP}
            name={
              "Anal Plug Fox Tail Butt Plug Stainless Steel 5 Set Sex Toys Ekor BD$M"
            }
            price={"70.000"}
          />
          <ProductItemsCard
            imageSrc={ProductAVST}
            name={"Alexandria Sex Toys Vibrator Sensasi Flapping dan Vibrate"}
            price={"59.000"}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
