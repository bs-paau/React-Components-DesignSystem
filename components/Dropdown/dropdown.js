import React, {useEffect, useState} from 'react';
import './styles/dropdown.css';
import './styles/dropdown_colours.css';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import SelectOption from './selectOption';


// The option component has been extracted to simplify the structure
// it receives the data for options, the classname and the onselect as props
// it passes the selection back to the parent

const Dropdown = ({
                    className,
                    disabled,
                    placeholder,
                    defaultSelected,
                    width,
                    options,
                    onSelect,
                    openIcon,
                    closeIcon,
                }) => {

    const [collapsed, setCollapsed] = useState(false);

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (defaultSelected) {
            options.filter(option =>{
                if(option.value === defaultSelected){
                    setSelected(option)
                }
            })
        }
    }, []);

    // toggleDropdown sets the state of the dropdown
    // if collapsed is true the dropdown is open
    // handles clicks outside of the component which closes the drop down

    const handleOutsideClick = () => {
        setCollapsed(false);
        document.removeEventListener('click', handleOutsideClick);
    };

    const toggleDropdown = () => {
        if (collapsed === false && disabled !== true) {
            setCollapsed(true);
            document.addEventListener('click', handleOutsideClick);
        } else {
            setCollapsed(false);
            document.removeEventListener('click', handleOutsideClick);
        }
    };

    // onSelect assigns the value of the selected option
    // to the state variable
    // and it closes the menu after the selection

    let handleSelect = (option) => {
        setSelected(option);
        setCollapsed(false);
        onSelect ? onSelect({label: option.label, value: option.value}) : null;
    };

    let cssClassSuffix = collapsed ? '-is-open' : '-is-closed';

    openIcon = openIcon ? openIcon : faChevronUp;
    closeIcon = closeIcon ? closeIcon : faChevronDown;

    let dropDownIcon = collapsed ? openIcon : closeIcon;

    let items = <ul className={'dropdown__list' + cssClassSuffix}>
        {options.map((option, index) =>
            <SelectOption key={index}
                          label={option.label}
                          onSelect={() => handleSelect(option)}/>
        )}
    </ul>;

    const expandButton = (
        <button disabled={disabled} className={'dropdown__button'}>
            <FontAwesomeIcon className={'dropdown__icon'}
                             icon={dropDownIcon}/>
        </button>
    );

    //value shown in the dropdown box when the menu is closed
    //this can be the default placeholder
    //or the new value chosen after the selection

    const dropDownValue = (
        <span className={'dropdown__content'}
              style={{backgroundColor: 'transparent'}}>
            {selected ? selected.label : placeholder}
        </span>
    );

    let wrapperClass;

    disabled ? wrapperClass = 'dropdown-is-disabled' : wrapperClass = 'dropdown' + cssClassSuffix;

    return (
        <div
            className={className}
            style={{
                position:'relative',
                margin:0,
                padding:0,
                fontSize:'16px',
                height:'max-content',
                minWidth:'max-content',
                width:`${width}`}}>

            <div className={wrapperClass}
                 style={{width:`100%`}}
                 onClick={toggleDropdown}>
                <div className={'dropdown__header'}>
                    {dropDownValue}
                    {expandButton}
                </div>
                {items}
            </div>
        </div>
    );
};


Dropdown.propTypes = {
    /**
     * Add an additional class name for the Dropdown
     **/
    className: PropTypes.string,

    /**
     * Use this prop to disable the Dropdown
     **/
    disabled: PropTypes.bool,

    /**
     * Define a placeholder for the Dropdown
     **/
    placeholder: PropTypes.string,

    /**
     * Set a default selected item for the Dropdown
     **/
    defaultSelected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Define the width of the Dropdown
     **/
    width: PropTypes.string,

    /**
     * Define the Dropdown items
     **/
    options: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        }),
    ).isRequired,

    /**
     * The icon will be shown while the Dropdown is opened
     **/
    openIcon: PropTypes.object,

    /**
     * The icon will be shown while the Dropdown is closed
     **/
    closeIcon: PropTypes.object,

    /**
     * An event will be triggered via the onSelect, if a Dropdown item is clicked
     **/
    onSelect: PropTypes.func
};

Dropdown.defaultProps = {
    className: '',
    disabled: false,
    options: [{label: '', value: ''}],
    width: '400px'
};

export default Dropdown;
