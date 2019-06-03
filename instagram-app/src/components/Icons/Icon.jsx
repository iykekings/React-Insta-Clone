import React from 'react';
import IconsPaths from './IconPaths';

const Icon = ({icon, fill='transparent', stroke='tranparent', strokeWidth='0px'}) => {
    return (
        <div className="icon-container">
            <svg fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
                 {IconsPaths[icon]}
            </svg>
        </div>
    )
}

export default Icon
