import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../services/auth";
import Confirm from "../Confirm";

import { Container, TitleWrapper, Title, SubTitle, Button } from "./styles";

const Header = ({ history }) => {
  const [logoutModal, openLogoutModal] = useState(false);

  const handleLogout = () => {
    logout();
    history.push("/signin");
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>VUTTR</Title>
        <SubTitle>Very Useful Tools to Remeber</SubTitle>
      </TitleWrapper>
      <Button bare onClick={() => openLogoutModal(true)}>
        <FontAwesomeIcon icon={faDoorOpen} />
      </Button>

      {logoutModal && (
        <Confirm
          message="Are you sure you want to logout?"
          confirm={handleLogout}
          closeModal={() => openLogoutModal(false)}
        >
          Logout
        </Confirm>
      )}
    </Container>
  );
};

export default withRouter(Header);
