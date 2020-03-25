import React, {useEffect, useState} from 'react';
import './styles/checkbox.css';
import PropTypes from "prop-types";


const Checkbox = ({
                    className,
                    label,
                    name,
                    value,
                    onChange,
                    disabled,
                    defaultChecked,
                    ...others
                }) => {


    const [check, setCheckbox] = useState(defaultChecked);

    let disabledLabel;
    let disabledClassName = '';
    let disabledLabelStyles = {color: "rgba(120, 118, 115, 0.5)", cursor: 'not-allowed'};

    disabled ? disabledClassName = 'checkbox-is-disabled' : '';
    disabled ? disabledLabel = disabledLabelStyles : null;

    let labelText = label ? (
        <span className={'checkbox__label'}
              style={disabledLabel}>
            {label}
        </span>
    ) : null;

    useEffect(()=>{
        onChange ? onChange(value, check) : null;
    }, [check]);

    const handleChange = () =>{
        setCheckbox(!check);
    };

    const checkbox = <label htmlFor={name} className={'checkbox'
                            + ' ' + disabledClassName + " " + (className ? className : '')}>
                            <input type="checkbox"
                                   className={'checkbox__input'}
                                   disabled={disabled}
                                   onChange={handleChange}
                                   name={name}
                                   checked={check}
                                   value={value}
                                   {...others}/>
                            {labelText}
                     </label>;

    return checkbox;
};

Checkbox.propTypes = {
    /**
     * Add an additional class name for the Checkbox
     **/
    className: PropTypes.string,

    /**
     * Define the label text for the Checkbox
     **/
    label: PropTypes.string,

    /**
     * The value property sets or returns the value of the value attribute of the Checkbox
     **/
    value: PropTypes.string,

    /**
     * Use this prop to disable the Checkbox
     **/
    disabled: PropTypes.bool,

    /**
     * An event will be triggered via the onChange, if the Checkbox is clicked
     **/
    onChange: PropTypes.func,

    /**
     * Set the Checkbox initial state
     **/
    defaultChecked: PropTypes.bool,

};

Checkbox.defaultProps = {
    className: '',
    label: '',
    value: '',
    disabled: false,
    defaultChecked: false,
};

//It is important to set the initial value(checked) of a default checkbox as false
//This is because we want to implement it as a controlled component
// without an initial state the component starts as an uncontrolled component and switches to controlled on change
//this is an anti-pattern in react

export default Checkbox;
