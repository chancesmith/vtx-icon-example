import React from "react";
import PropTypes from "prop-types";

const Icon = props => (
  <svg width={props.width} height={props.height} viewBox="0 0 40 40">
    <path d={props.icon} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

Icon.defaultProps = {
  width: "40",
  height: "40"
};

export default Icon;
