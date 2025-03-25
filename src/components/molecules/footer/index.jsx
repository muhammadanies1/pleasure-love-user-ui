import { Divider } from "antd";
import React from "react";
import CollapseOthersInfo from "../../atoms/collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ ...attrs }) => {
  return (
    <>
      <Divider />
      <div className="px-10 tablet:hidden">
        <CollapseOthersInfo />
      </div>
      <div className="hidden tablet:block">
        <div className="flex flex-row gap-5 tablet:px-10 laptop:px-96 justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Layanan Customers</span>
            <span>+62815-1423-4500</span>
            <span>info@pleasurelove.id</span>
            <span>Hubungi Kami</span>
            <span>Upload Resep</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Bantuan</span>
            <span>Pengiriman Privasi</span>
            <span>Kurir Kami & Biaya Pengiriman</span>
            <span>Metode Pembayaran</span>
            <span>FAQ</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Info PleasureLove</span>
            <span>Tentang Kami</span>
            <span>Syarat & Ketentuan</span>
            <span>Kebijakan Privasi</span>
            <span>Karir</span>
            <span>Program Reseller</span>
            <span>Semua Koleksi</span>
            <span>Info Obat A-Z</span>
            <span>Informasi Apotek PleasureLove</span>
          </div>
          <div className="flex flex-col gap-3">
            <span>Follow Our Social Medias</span>
            <div className="flex flex-row gap-3 justify-center">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTiktok} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div
        style={{
          height: "50px",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="text-xs text-[#121212] tablet:text-sm laptop:text-lg "
        {...attrs}
      >
        © 2025 PT Aji Inovasi Teknologi. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
