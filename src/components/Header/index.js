import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import { logout } from '../../services/auth';
import Confirm from '../Confirm';

import { Container, TitleWrapper, Title, SubTitle, Button } from './styles';

const Header = ({ history }) => {
  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogout = () => {
    logout();
    history.push('/signin');
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>VUTTR</Title>
        <SubTitle>Very Useful Tools to Remeber</SubTitle>
      </TitleWrapper>
      <Button onClick={() => setLogoutModal(true)}>
        <FontAwesomeIcon icon={faDoorOpen} />
      </Button>

      <Confirm
        message="Are you sure you want to logout?"
        confirm={handleLogout}
        open={logoutModal}
        close={() => setLogoutModal(false)}
      >
        Logout
      </Confirm>
    </Container>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
