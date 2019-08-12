import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

import { Container, Title, Message, ButtonsWrapper, Button } from './styles';

const Confirm = ({ open, close, message, confirm, children }) => {
  const [loading, setLoading] = useState(false);

  return open ? (
    <Modal close={close}>
      <Container>
        <Title>{children}</Title>

        <Message>{message}</Message>

        <ButtonsWrapper>
          <Button
            animate
            loading={loading}
            onClick={async () => {
              setLoading(true);
              await confirm();
              setLoading(false);
            }}
          >
            Yes
          </Button>
          <Button animate color="danger" onClick={close}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </Container>
    </Modal>
  ) : null;
};

Confirm.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  confirm: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

Confirm.defaultProps = {
  message: 'Confirm operation?',
};

export default Confirm;
