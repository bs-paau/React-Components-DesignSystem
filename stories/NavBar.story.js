import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import NavBar from '../components/NavBar/navBar';
import NavItem from '../components/NavBar/navItem';
import {faBars, faBox, faInfo, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import NavbarDefaultReadme from '../components/NavBar/readme/readmeDefault.md';
import NavbarUsage from '../components/NavBar/readme/USAGE.md';

storiesOf('Navbar', module)
    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content: NavbarDefaultReadme,
            sidebar: NavbarUsage,
        },
    })
    .add('Standard', () => {

        return (
            <div style={{display: 'flex', height: '100vh'}}>
                <NavBar navHeaderIcon={faBars}
                        navHeaderLabel="App Title"
                        isPositionFixed={false}
                        close={false}>
                    <NavItem icon={faInfo} label="HOME" onClick={action('navbar-item1-clicked')}/>
                    <NavItem icon={faBox} label="ABOUT" onClick={action('navbar-item2-clicked')}/>
                    <NavItem icon={faNewspaper} label="KONTAKT" onClick={action('navbar-item3-clicked')}/>
                </NavBar>
            </div>
        )
    });

