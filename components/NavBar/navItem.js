import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './styles/navItem.css';
import '../../Themes/typography.css';

const NavItem = ({
                     icon,
                     isNavbarClose,
                     label,
                     href,
                     onClick,
                     navItemWrapperClassName,
                     navItemClassName,
                     navItemIconBeforeClassName,
                     navItemLabelClassName,
                     children,
                     itemActive,
                     ...others
                 }) => {

    let itemActiveClass;

    // const navItemIconBefore = <div className={'LBC-nav-item-icon-before'+' '+(navItemIconBeforeClassName ? navItemIconBeforeClassName : "")}></div>;
    const navItemIcon = <div className={'nav-item-icon-wrapper'}><FontAwesomeIcon icon={icon}/></div>;

    const navItemLabel = isNavbarClose ? <div className={'nav-item-label'}></div> :
                                         <div className={'nav-item-label'}>{label}</div>;

    let navItemCloseClassName = null;

    if (isNavbarClose) {
        navItemCloseClassName = '-close';
    } else navItemCloseClassName = '-open';

    if (itemActive === true) {
        itemActiveClass = 'active-navItem'
    } else itemActiveClass = 'inactive-navItem';

    const navItem =
        <li className={'nav-item-wrapper' + ' ' + itemActiveClass}>
            <a href={href}>
                <button className={'nav-item' + navItemCloseClassName}
                        onClick={onClick}>
                    <div className={'navitem-content-wrapper'}>
                        {navItemIcon}
                        {navItemLabel}
                        {children}
                    </div>
                </button>
            </a>
        </li>;

    return navItem;
};


NavItem.propTypes = {
    /**
     * Set children for the NavItem, namely other sub elements
     **/
    children: PropTypes.node,

    /**
     * Add an additional class name for the NavItem
     **/
    navItemClassName: PropTypes.string,

    /**
     * Add an additional class name for the NavItem label
     **/
    navItemLabelClassName: PropTypes.string,

    /**
     * Add an additional class name for the NavItem icon
     **/
    navItemIconBeforeClassName: PropTypes.string,

    /**
     * Add an url to an item
     **/
    href: PropTypes.string,

    /**
     * An event can be triggered via the onClick after an item get clicked
     **/
    onClick: PropTypes.func,

    /**
     * Define the icon for the NavItem
     **/
    icon: PropTypes.object,

    /**
     * Define the label text for the NavItem
     **/
    label: PropTypes.string,

};

NavItem.defaultProps = {
    navItemClassName: '',
    navItemIconBeforeClassName: '',
    label: '',
    href: '',

};

export default NavItem;
