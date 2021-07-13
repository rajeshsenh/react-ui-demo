import React, { Component } from "react";
import PropTypes from 'prop-types';


class Button extends Component {
  render() {
    const { children, disabled } = this.props;
    return <button disabled={disabled}>{children}</button>;
  }
};

Button.propTypes = {
  content: PropTypes.string,
}

export default Button;
