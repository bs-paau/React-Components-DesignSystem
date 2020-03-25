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
import React from 'react';

import {Dropdown} from '@*project*/dropdown';


let options = [
       {label: 'Apple', value: 'apple'},
       {label: 'Banana', value: 'banana'},
       {label: 'Grapefruit', value: 'grapefruit'},
       {label: 'Orange', value: 'orange'},
       {label: 'Strawberry', value: 'strawberry'},
];

const DropdownContainer = () => {

    const handleSelect = (e) => {
        console.log(e)
    }

    return (
        <Dropdown placeholder='Sample-Label'
                  onSelect={handleSelect}
                  options={options}/>
    );
};

export default DropdownContainer;
```
