import React, { useState } from "react"
import PropTypes from "prop-types"

import Modal from "../Modal"

import { Container, Title, Message, ButtonsWrapper, Button } from "./styles"

const Confirm = ({ closeModal, message, confirm, children }) => {
  const [loading, setLoading] = useState(false)

  return (
    <Modal close={closeModal}>
      <Container>
        <Title>{children}</Title>

        <Message>{message}</Message>

        <ButtonsWrapper>
          <Button
            animate
            loading={loading}
            onClick={async () => {
              setLoading(true)
              await confirm()
              setLoading(false)
            }}
          >
            Yes
          </Button>
          <Button animate color="danger" onClick={closeModal}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </Container>
    </Modal>
  )
}

Confirm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  confirm: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

Confirm.defaultProps = {
  message: "Confirm operation?"
}

export default Confirm
