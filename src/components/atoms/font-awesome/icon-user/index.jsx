import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import ROUTING from "../../../../constants/routing";

const IconUser = ({ ...attrs }) => {
  const navigate = useNavigate();

  const login = useCallback(() => {
    navigate(ROUTING.LOGIN);
  }, [navigate]);

  return (
    <FontAwesomeIcon
      icon={faUser}
      style={{ color: "white", cursor: "pointer" }}
      onClick={login}
      {...attrs}
    />
  );
};

export default IconUser;
