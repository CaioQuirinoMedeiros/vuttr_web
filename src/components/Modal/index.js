import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Modal = ({ close, children }) => {
  const clickOutsideEventListener = e => {
    if (e.target.id === "outsideModal") close();
  };

  useEffect(() => {
    console.log("OPA ADICIONOU");
    document.addEventListener("mousedown", clickOutsideEventListener);

    return () => {
      console.log("OPA REMOVEU");
      document.removeEventListener("click", clickOutsideEventListener);
    };
  });

  return <Container id="outsideModal">{children}</Container>;
};

export default Modal;
