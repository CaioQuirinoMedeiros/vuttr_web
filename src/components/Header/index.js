import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../services/auth";

import { Container, TitleWrapper, Title, SubTitle, Button } from "./styles";

const Header = ({ history }) => {
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
      <Button bare onClick={handleLogout}>
        <FontAwesomeIcon icon={faDoorOpen} />
      </Button>
    </Container>
  );
};

export default withRouter(Header);
