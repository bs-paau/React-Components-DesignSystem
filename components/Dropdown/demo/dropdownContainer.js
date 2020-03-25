import React, {useState} from 'react';
import Dropdown from '../dropdown';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

let options = [
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Grapefruit', value: 'grapefruit'},
    {label: 'Orange', value: 'orange'},
    {label: 'Strawberry', value: 'strawberry'},
];

const DropDownContainer = ()=> {

    const [selection, setSelection] = useState({lable: "", value: ""});

    // the selection value returned is an object with label and value
    const handleSelection=(value)=>{
        setSelection(value);
    };

    //the contents of the dropdown
    const testDropdown = <Dropdown placeholder='Select'
                                   options={options}
                                   onSelect={handleSelection}>
                         </Dropdown>

    //the contents of the dropdown rendered part
    const showSelectItem = <div style={{marginLeft: "40px", marginTop: "-26px"}}>
                                <p  style={{fontSize: "24px"}}>The selected item label is: {selection.label}</p>
                                <p  style={{fontSize: "24px"}}>The selected item value is: {selection.value}</p>
                           </div>;

    return (
        <div style={{display: "inline-flex", marginBottom: "100px", fontFamily:"Open Sans", fontSize:"24px"}}>
            {testDropdown}
            {showSelectItem}
        </div>
    )
};

export default DropDownContainer;
