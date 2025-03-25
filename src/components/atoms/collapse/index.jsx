import { Collapse } from "antd";
import React from "react";
import LayananCustomers from "./contents/layanan-customers";
import Bantuan from "./contents/bantuan";
import Info from "./contents/info";
import SocialMedias from "./contents/social-medias";

const items = [
  {
    key: "1",
    label: "Layanan Customers",
    children: <LayananCustomers />,
  },
  {
    key: "2",
    label: "Bantuan",
    children: <Bantuan />,
  },
  {
    key: "3",
    label: "Info pleasurelove",
    children: <Info />,
  },
  {
    key: "4",
    label: "Follow Our Social Medias",
    children: <SocialMedias />,
  },
];

const CollapseOthersInfo = ({ ...attrs }) => {
  return (
    <>
      <Collapse
        defaultActiveKey={["4"]}
        accordion
        ghost
        items={items}
        {...attrs}
      />
    </>
  );
};

export default CollapseOthersInfo;
