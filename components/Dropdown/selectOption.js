import React from 'react';
import './styles/dropdown.css';
import './styles/dropdown_colours.css';


const SelectOption = ({
                        index,
                        label,
                        onSelect
                    }) => {

    const handleClick = () => {
        onSelect(label, index);
    };


    let listItem = (
        <li className={'dropdown__option'}
            key={index}
            onClick={() => handleClick()}>
            {label}
        </li>
    );

    return listItem;
};

export default SelectOption;
