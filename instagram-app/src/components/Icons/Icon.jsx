import React from 'react';
import './Icon.css';
import IconsPaths from './IconPaths';
import PropTypes from 'prop-types';

const Icon = ({
  icon,
  fill = 'transparent',
  stroke = 'transparent',
  strokeWidth = '0px',
  viewBox = '0 0 512 512',
  toggleLike,
  id
}) => {
  const toggleClick = () => {
    if(!!id) {
      toggleLike(id);
    }
  }
  return (
    <div className="icon-container">
      <svg
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        viewBox={viewBox}
        onClick={toggleClick}
      >
        {IconsPaths[icon]}
      </svg>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  viewBox: PropTypes.string,
  toggleLike: PropTypes.func,
  id: PropTypes.string
}

export default Icon;
