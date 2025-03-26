import { Collapse } from "antd";
import React from "react";
import ProductDescription from "./contents/description";
import CaraPakai from "./contents/cara-pakai";

const items = [
  {
    key: "1",
    label: <span className="text-base">Deskripsi</span>,
    children: <ProductDescription />,
  },
  {
    key: "2",
    label: <span className="text-base">Cara Pakai</span>,
    children: <CaraPakai />,
  },
];

const AccordionDescription = ({ ...attrs }) => {
  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        accordion
        ghost
        items={items}
        {...attrs}
      />
    </>
  );
};

export default AccordionDescription;
