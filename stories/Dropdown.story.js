import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import DropdownDefaultReadme from '../components/Dropdown/readme/readmePlaceholder.md';
import DropdownExampleReadme from '../components/Dropdown/readme/readmeDemo.md';
import DropdownUsage from '../components/Dropdown/readme/USAGE.md';
import Dropdown from "../components/Dropdown/dropdown";
import DropDownContainer from "../components/Dropdown/demo/dropdownContainer";

let options = [
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Grapefruit', value: 'grapefruit'},
    {label: 'Orange', value: 'orange'},
    {label: 'Strawberry', value: 'strawberry'},
];


storiesOf('Dropdown', module)

    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content: DropdownDefaultReadme,
            sidebar: DropdownUsage
        },
    })
    .add('Standard', () => (
        <Dropdown
            placeholder={"Select Options"}
            onSelect={action('onSelect')}
            options={options}>
        </Dropdown>
    ))


    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content: DropdownExampleReadme,
            sidebar: DropdownUsage
        }
    })
    .add('demo', () => (
        <DropDownContainer/>
    ));
