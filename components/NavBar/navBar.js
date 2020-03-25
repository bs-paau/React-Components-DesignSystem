import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles/navBar.css';
import '../../Themes/typography.css';
import './styles/navItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

let navLogo;

const NavBar = ({
                    className,
                    navHeaderIcon,
                    navHeaderLabel,
                    darkMode,
                    close,
                    isPositionFixed,
                    positionFixed,
                    children,
                    ...other
                }) => {

    const [navbarClose, setNavbarClose] = useState(close);
    const [activeNavItem, setActiveNavItem] = useState(0);

    const handleClickHeaderIcon = () => {
        setNavbarClose(!navbarClose)
    };

    let navbarToggleClass = "";
    let navbar;

    const headerIcon = <div className={'header-toggle-wrapper'} onClick={handleClickHeaderIcon}>
                           <span className="nav-header-icon">
                                <FontAwesomeIcon icon={navHeaderIcon}/>
                           </span>
                       </div>;

    const headerLabel = navbarClose ? <div className={'nav-header-label'}></div> :
                                      <div className={'nav-header-label'}>{navHeaderLabel}</div>;

    const navBarPositionStyle = isPositionFixed ? 'fixed' : 'absolute';

    if (navbarClose) {
        navLogo = null;
    } else {
        if (darkMode) {
            navLogo = <img className='navbar-logo' src={''}/>
        } else {
            navLogo = <img className='navbar-logo' src={''}/>
        }
    }

    if (navbarClose) {
        navbarToggleClass = 'close'
    } else navbarToggleClass = 'open';

    const navItems = React.Children.map(children, (child, index) => {
        return <div key={index} className={index} onClick={() => setActiveNavItem(index)}>
                    {React.cloneElement(child, {
                        isNavbarClose: navbarClose,
                        itemActive: (index === activeNavItem)
                    }, null)}
               </div>
    });

    navbar = (
            <div style={{position: navBarPositionStyle}}
                 className={(className ? className : "") + ' ' + "navbar-wrapper-" + navbarToggleClass}>
                <div className={'nav-header'}>
                    {headerIcon}
                    {headerLabel}
                </div>
                <ul className={'navitem-group-wrapper'} style={{padding: '0', margin: '0'}}>
                    {navItems}
                </ul>
            </div>
        );

    return navbar;
};


NavBar.propTypes = {
    /**
     * Set children for the Navbar, namely the NavItems
     **/
    children: PropTypes.node,

    /**
     * Add an additional class name for the NavBar
     **/
    className: PropTypes.string,

    /**
     * Define is the NavBar position fixed or not
     **/
    isPositionFixed: PropTypes.bool,

    /**
     * Define the icon for the NavBar header
     **/
    navHeaderIcon: PropTypes.object,

    /**
     * Define the label text for the NavBar header
     **/
    navHeaderLabel: PropTypes.string,

    /**
     * Control the NavBar is close or open. The default state is closed
     **/
    close: PropTypes.bool,
};

NavBar.defaultProps = {
    className: '',
    close: true,
    isPositionFixed: true
};

export default NavBar;
