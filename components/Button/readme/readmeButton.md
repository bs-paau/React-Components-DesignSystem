<!-- STORY -->
<!-- STORY HIDE START -->
The content here won't be shown in stories.
<!-- STORY HIDE END -->


<br/>  

## Description:
Use button as Primary, Secondary, Danger, Disabled or Radial.
See also Properties.

## Installation:
```
$ npm install @*projectname*/button@latest
```

```
import {Button} from '@*projectname*/button';
```


### Example:
```js
import React from 'react';

import {Button} from '@*projectname*/button';


const ButtonContainer = () => {

    return (
        <Button type='primary'
                label='Primary'
                onClick={() => alert('onClick')}>
        </Button>
    );
};

export default ButtonContainer;
```
