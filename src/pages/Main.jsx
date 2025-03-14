import { Button } from "antd";
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

        <Button type="primary">Primary</Button>
      </div>
    </div>
  );
};

export default Main;
