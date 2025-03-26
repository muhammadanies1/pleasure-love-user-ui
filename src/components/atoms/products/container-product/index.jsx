import React from "react";

const ContainerProduct = ({ children }) => {
  return (
    <div className="flex flex-row gap-3 overflow-x-auto py-5">{children}</div>
  );
};

export default ContainerProduct;
