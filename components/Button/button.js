import React from 'react';
import PropTypes from 'prop-types';
import './styles/button.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Button = ({
                    className,
                    animation,
                    disabled,
                    type,
                    label,
                    width,
                    icon,
                    onClick,
                    ...others
                }) => {

    let layoutClass;

    if(!icon || !label) {
        layoutClass = 'iconOrLabel';
    } else layoutClass = 'iconAndLabel';

    let pulseAnimation = (
        <FontAwesomeIcon
                        size={'1x'}
                        icon={icon}
                        pulse />
    );

    let spinAnimation = (
        <FontAwesomeIcon
                        size={'1x'}
                        icon={icon}
                        spin />
    );

    let standard = (
        <FontAwesomeIcon icon={icon} />
    );

    const buttonIcon = (
        <div className={'button__icon'}>
            {animation === 'spin' ?
                spinAnimation
               : animation ==='pulse' ?
                    pulseAnimation
                : standard}
        </div>
    );

    const labelText = (
        <span className='button__label'>
            {label}
        </span>
    );

    if (width.match('standard') && !label) {
        width = '40px';
    } else if(width.match('standard') && !icon) {
        width = '217px';
    }


    const button = (
        <button
                disabled={disabled}
                className={'button' +
                        (type ? `--${type}` : '--primary') +
                        ' ' + (className ? className : '')}
                style={{width: `${width}`}}
                onClick={onClick}
                {...others}>
            <div className={'button_content-wrapper'+`-l-${layoutClass}`}>
                {icon ? buttonIcon : null}
                {label ? labelText : null}
            </div>

        </button>
    );

    return button;
};


Button.propTypes = {
    /**
     * Add an additional class name for the Button
     **/
    className: PropTypes.string,
    /**
    * Define the animation type for a button with loading icon
    **/
    animation:PropTypes.oneOf(['pulse', 'spin']),
    /**
     * Use this prop to disable the Button
     **/
    disabled: PropTypes.bool,
    /**
     * Define the icon for the Button
     **/
    icon: PropTypes.object,
    /**
     * Define the label text for the Button
     **/
    label: PropTypes.string,
    /**
     * An event can be triggered via the onClick
     **/
    onClick: PropTypes.func,
    /**
     * Set the appearance for the Button, among the available options
     **/
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'link',
        'danger',
        'radial'
    ]).isRequired,
    /**
     * Define the width of the Button
     **/
    width: PropTypes.string,
};

Button.defaultProps = {
    className: '',
    width: 'standard',
    disabled: false,
};

export default Button;
