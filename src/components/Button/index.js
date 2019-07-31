import React from "react";
import PropTypes from "styled-components";

import ReactLoading from "react-loading";
import StyledButton from "../../styles/components/Button";

const Button = ({ loading, children, ...rest }) => (
  <StyledButton {...rest}>
    {loading ? <ReactLoading width={22} height={22} type="spin" /> : children}
  </StyledButton>
);

Button.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.string
};

Button.defaultProps = {
  loading: false,
  children: "Button"
};

export default Button;
