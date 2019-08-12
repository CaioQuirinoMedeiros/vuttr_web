import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Modal = ({ close, children }) => {
  const clickOutsideEventListener = e => {
    if (e.target.id === 'outsideModal') close();
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutsideEventListener);

    return () => {
      document.removeEventListener('click', clickOutsideEventListener);
    };
  });

  return <Container id="outsideModal">{children}</Container>;
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
