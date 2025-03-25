import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialMedias = () => {
  return (
    <div className="flex flex-row gap-3 justify-center">
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTiktok} />
      <FontAwesomeIcon icon={faYoutube} />
    </div>
  );
};

export default SocialMedias;
