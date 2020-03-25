<!-- STORY -->
<!-- STORY HIDE START -->
The content here won't be shown in stories.
<!-- STORY HIDE END -->


<br/>  

## Description:
Use buttons as link.

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
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


const ButtonContainer = () => {

    return (
        <Button type='link'
                icon={faArrowRight}
                label='Go to Link'
                onClick={() => alert('onClick')}>
        </Button>
    );
};

export default ButtonContainer;
```
