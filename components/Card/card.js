import React from 'react';
import PropTypes from 'prop-types';
import './styles/card.css';


const Card = ({
                  className,
                  onClick,
                  type,
                  height,
                  width,
                  resetBorderRadius,
                  margin,
                  id,
                  children,
                  ...others
              }) => {

    let styles = {
        height: `${height}`,
        width: `${width}`,
        margin: `${margin}`
    };

    let wrapperClassName = resetBorderRadius ? "card-wrapper-no-border" : "card-wrapper";


    let card = (
        <div
            className={wrapperClassName + ' ' + (type ? type : 'white') + ' ' + (className ? className : '')}
            onClick={onClick}
            style={styles}>
            {children}
        </div>
    )


    return card
};


Card.propTypes = {
    /**
     * Set children for the card, namely other sub elements
     **/
    children: PropTypes.node,

    /**
     * Add an additional class name for the card
     **/
    className: PropTypes.string,

    /**
     * Define the height for the card
     **/
    height: PropTypes.string,

    /**
     * An event can be triggered via the onClick, after the card get clicked
     **/
    onClick: PropTypes.func,

    /**
     * Set the border radius of the card as 0
     **/
    resetBorderRadius: PropTypes.bool,

    /**
     * Set the appearance for the card, among the available options
     **/
    type: PropTypes.oneOf([
        'greyDark',
        'white',
        'yellowStandard']).isRequired,

    /**
     * Define the width for the card
     **/
    width: PropTypes.string,

    /**
     * Define the margin for the card
     **/
    margin: PropTypes.string,

    /**
     * Set a unique id for the card
     **/
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

};

Card.defaultProps = {
    className: '',
    height: '200px',
    width: '200px',
    resetBorderRadius: false,
};

export default Card;
