import React from "react"
import PropTypes from "prop-types"

import ReactLoading from "react-loading"
import StyledButton from "../../styles/components/Button"

const Button = ({ loading, children, ...rest }) => (
  <StyledButton {...rest}>
    {loading ? <ReactLoading width={22} height={22} type="spin" /> : children}
  </StyledButton>
)

Button.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

Button.defaultProps = {
  loading: false,
  children: "Button"
}

export default Button
