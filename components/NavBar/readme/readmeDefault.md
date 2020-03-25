<!-- STORY -->
<!-- STORY HIDE START -->
The content here won't be shown in stories.
<!-- STORY HIDE END -->


<br/>  

## Description:
Your own navigation.

## Installation:
```
$ npm install @*project*/navbar@latest
```

```
import {NavBar, NavItem} from '@*project*/navbar';
```


### Example:
```js

import React from 'react';

import {NavBar, NavItem} from '@*project*/navbar';

import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {faBox} from '@fortawesome/free-solid-svg-icons';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';


const NavbarContainer = () => {

    const handleNavbarItem1 = (e) => {
        console.log(e)
    }

    const handleNavbarItem2 = (e) => {
        console.log(e)
    }

    const handleNavbarItem3 = (e) => {
        console.log(e)
    }

    return (
            <NavBar navHeaderIcon={faBars}
                    navHeaderLabel='App Title'
                    close={false}>
                <NavItem 
                    icon={faInfo} 
                    label='Home'
                    onClick={handleNavbarItem1}/>
                <NavItem 
                    icon={faBox} 
                    label='About'
                    onClick={handleNavbarItem2}/>
                <NavItem 
                    icon={faNewspaper} 
                    label='Kontakt'
                    onClick={handleNavbarItem3}/>
            </NavBar>
    );
};

export default NavbarContainer;
```



