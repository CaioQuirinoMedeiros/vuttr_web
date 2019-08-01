import React, { useEffect } from "react";

import { Container } from "./styles";

const Modal = ({ close, children }) => {
  const clickOutsideEventListener = e => {
    if (e.target.id === "outsideModal") close();
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideEventListener);

    return () => {
      document.removeEventListener("click", clickOutsideEventListener);
    };
  });

  return <Container id="outsideModal">{children}</Container>;
};

export default Modal;
