import React from "react";

import Modal from "../Modal";

import { Container, Title, Message, ButtonsWrapper, Button } from "./styles";

const Confirm = ({ closeModal, message, confirm, children }) => (
  <Modal close={closeModal}>
    <Container>
      <Title>{children}</Title>

      <Message>{message}</Message>

      <ButtonsWrapper>
        <Button animate onClick={() => confirm()}>
          Yes
        </Button>
        <Button animate color="danger" onClick={closeModal}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </Container>
  </Modal>
);

export default Confirm;
