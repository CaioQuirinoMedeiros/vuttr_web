import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    close: PropTypes.func
  };

  static defaultProps = {
    close: () => {}
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.clickOutsideEventListener);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.clickOutsideEventListener);
  }

  clickOutsideEventListener = e => {
    const { close } = this.props;
    if (e.target.id === "outsideModal") close();
  };

  render() {
    const { children } = this.props;
    return <Container id="outsideModal">{children}</Container>;
  }
}
