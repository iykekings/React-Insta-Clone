import React from 'react';
import './Icon.css';
import IconsPaths from './IconPaths';

const Icon = ({
  icon,
  fill = 'transparent',
  stroke = 'tranparent',
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

export default Icon;
