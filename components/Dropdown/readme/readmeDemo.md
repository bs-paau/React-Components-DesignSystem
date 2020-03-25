<!-- STORY -->
<!-- STORY HIDE START -->
The content here won't be shown in stories.
<!-- STORY HIDE END -->


<br/>  

## Description:
A Standard Dropdown

## Installation:
```
$ npm install @*project*/dropdown@latest
```

```
import {Dropdown} from '@*project*/dropdown';
```


### Example:
```js
import React, {useState} from 'react';

import {Dropdown} from '@*project*/dropdown';


let options = [
       {label: 'Apple', value: 'apple'},
       {label: 'Banana', value: 'banana'},
       {label: 'Grapefruit', value: 'grapefruit'},
       {label: 'Orange', value: 'orange'},
       {label: 'Strawberry', value: 'strawberry'},
];

const DropdownContainer = () => {

    const [selection, setSelection] = useState({lable: "", value: ""});

    // the selection value returned by the dropdown is an object with label and value

    const handleSelection = (value) => {
        setSelection(value);
    };

    //the contents of the dropdown
    const testDropdown = <Dropdown placeholder='Select'
                                   options={options}
                                   onSelect={handleSelection}/>

    //the contents of the dropdown rendered part
    const showSelectItem = <div style={{marginLeft: "40px", marginTop: "-26px"}}>
        <p style={{fontSize: "24px"}}>The selected item label is: {selection.label}</p>
        <p style={{fontSize: "24px"}}>The selected item value is: {selection.value}</p>
    </div>

    return (
        <div style={{display: "inline-flex", marginBottom: "100px"}}>
            {testDropdown}
            {showSelectItem}
        </div>
    )

};

export default DropdownContainer;
```

