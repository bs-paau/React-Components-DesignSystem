import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Card from '../components/Card/card';
import CardDefaultReadme from '../components/Card/readme/readmeCards.md';
import CardUsage from '../components/Card/readme/USAGE.md';


storiesOf('Card', module)

    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content: CardDefaultReadme,
            sidebar: CardUsage,
        },
    })
    .add('Standard', () => (
        <React.Fragment>
            <h3>Standard</h3>
            <Card
                className={'storybook-margin'}
                type={'greyDark'}
                onClick={action('onClick')}>
            </Card>

            <Card
                className={'storybook-margin'}
                type={'white'}
                onClick={action('onClick')}>
            </Card>

            <Card
                className={'storybook-margin'}
                type={'orangeStandard'}
                onClick={action('onClick')}>
            </Card>
            <h3>Custom Sizes</h3>
            <Card
                className={'storybook-margin'}
                type={'orangeStandard'}
                height={'400px'}
                width={'250px'}
                onClick={action('onClick')}>
            </Card>

            <Card
                className={'storybook-margin'}
                type={'greyDark'}
                height={'400px'}
                width={'400px'}
                onClick={action('onClick')}>
            </Card>

            <Card
                className={'storybook-margin'}
                type={'white'}
                height={'250px'}
                width={'100%'}
                onClick={action('onClick')}>
            </Card>
        </React.Fragment>
    ))
;