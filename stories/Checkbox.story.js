import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Checkbox from '../components/Checkbox/checkbox';
import CheckboxDefaultReadme from '../components/Checkbox/readme/readmeDefault.md';
import CheckboxUsage from '../components/Checkbox/readme/USAGE.md';


storiesOf('Checkbox', module)

    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content: CheckboxDefaultReadme,
            sidebar: CheckboxUsage,
        },
    })
    .add('Standard', () => (
        <Checkbox
            label='Standard Checkbox'
            value="default value"
            onChange={action('onChange')}>
        </Checkbox>
    ))
;
