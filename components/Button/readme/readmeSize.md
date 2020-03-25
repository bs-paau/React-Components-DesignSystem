<!-- STORY -->
<!-- STORY HIDE START -->
The content here won't be shown in stories.
<!-- STORY HIDE END -->


<br/>  

## Description:
Use a button with custom size, loading option, with icons.
See also properties.

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
import {faDraftingCompass} from '@fortawesome/free-solid-svg-icons';


const ButtonContainer = () => {

    return (
        <Button
            type='primary'
            label='width:100% of Parent'
            icon={faDraftingCompass}
            width='100%'
            onClick={() => alert('onClick')}>
        </Button>
    );
};

export default ButtonContainer;

```

