import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './styles/badge.css';


const Badge = ({
                   className,
                   size,
                   icon,
                   backgroundColor,
                   color,
                   ...others
               }) => {

    let iconSize;
    size === 'small' ? iconSize = '1x' :
        size === 'smaller' ? iconSize = 'xs' :
        size === 'standard' ? iconSize = '1x'
            : iconSize = '1x';


    let renderIcon = (
        <FontAwesomeIcon
            className="badge__icon"
            icon={icon}
            size={iconSize}
        />
    );

    let styles = {
        backgroundColor:`${backgroundColor}`,
        color:`${color}`
    };

    let badgeContainer = (
        <div
            className={"badge-wrapper" + `--${size}` + " " + (className ? className : "")}
            style={styles}>
                {renderIcon}
        </div>
    );

    return badgeContainer;
};

Badge.propTypes = {
    /**
     * Add an additional class name for the Badge
     **/
    className: PropTypes.string,
    /**
     * Modify the background color for the Badge icon
     **/
    backgroundColor:PropTypes.string,
    /**
     * Modify the icon color for the Badge
     **/
    color:PropTypes.string,
    /**
     * Define a icon for the Badge
     **/
    icon: PropTypes.object,
    /**
     * Define a size for the Badge
     **/
    size: PropTypes.oneOf([
        'standard',
        'small',
        'smaller'
    ]),
};

Badge.defaultProps = {
    className: '',
    size: 'standard',
};

export default Badge;
