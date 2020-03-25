<!-- STORY -->
<!-- STORY HIDE START -->
The content here won't be shown in stories.
<!-- STORY HIDE END -->


<br/>  

## Description:

## Installation:
```
$ npm install @*project*/badge@latest
```

```
import {Badge} from '@*project*/badge';
```


### Example:
```js
import React from 'react';

import {Badge} from '@*project*/badge';
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";

const BadgeContainer = () => {

    return (
            <div>
                <Badge
                    icon={faAddressBook}
                    backgroundColor={'rgb(44, 57, 76)'}
                    color={'white'}/>
                    <br/>
                    <br/>
                <Badge
                    icon={faAddressBook}
                    size={'small'}/>
                    <br/>
                    <br/>
                <Badge
                    icon={faAddressBook}
                    size={'smaller'}/>
            </div>
    );
};

export default BadgeContainer;
```
