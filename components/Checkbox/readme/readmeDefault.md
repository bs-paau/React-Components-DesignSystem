<!-- STORY -->
<!-- STORY HIDE START -->
The content here won't be shown in stories.
<!-- STORY HIDE END -->


<br/>  

## Description
A Standard Checkbox. Also see properties.

## Installation:
```
$ npm install @*project*/checkbox@latest
```

```
import {Checkbox} from '@*project*/checkbox';
```


### Code Beispiel:
```js
import React from 'react';

import {Checkbox} from '@*project*/checkbox';


const CheckboxContainer = () => {

    const handleCheckboxValue = (value, checked) => {
        console.log(value, checked)
    }

    return (
        <Checkbox label='Checked Checkbox'
                  value='default Value'
                  onChange={handleCheckboxValue}>
        </Checkbox>
    );
};

export default CheckboxContainer;

```