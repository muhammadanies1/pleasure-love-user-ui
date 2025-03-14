import { Button, Image } from "antd";
import React from "react";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <div>Coba Yah</div>
        <div>
          <Image
            alt="gambar-produk"
            src={
              "../assets/products/vibrator-wanita-wireless/9ba6ca66-df23-4df7-86da-f2c45ad00d9d.jpg"
            }
            width={500}
            height={500}
          />
        </div>
        <Button type="primary">Primary</Button>
      </div>
    </div>
  );
};

export default Main;
