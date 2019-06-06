import React from 'react';
import IconsPaths from './IconPaths';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = styled.div`
  height: auto;
  width: ${props => props.width || '50px'};
  padding: ${props => props.padding || '0.5rem'};
  margin: ${props => props.margin || '0px'};
  &:hover {
    background: #f2f2f2;
    border-radius: 20px;
  }
  svg {
    fill: ${props => props.fill || 'transparent'};
    stroke: ${props => props.stroke || 'transparent'};
    stroke-width: ${props => props.strokeWidth || '0px'};
  }
`;

const Icon = props => {
  const toggleClick = () => {
    if (!!props.id) {
      props.toggleLike(props.id);
    }
  };
  return (
    <IconContainer {...props}>
      <svg viewBox={props.viewBox || '0 0 512 512'}
        onClick={toggleClick}>
        {IconsPaths[props.icon]}
      </svg>
    </IconContainer>
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
};

export default Icon;
