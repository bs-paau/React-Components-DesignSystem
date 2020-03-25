import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import ButtonReadme from '../components/Button/readme/readmeButton.md';
import ButtonLinkReadme from '../components/Button/readme/readmeButtonLink.md';
import ButtonUsage from '../components/Button/readme/USAGE.md';
import ButtonSizeReadme from '../components/Button/readme/readmeSize.md';
import {faDraftingCompass, faMagnet, faPlus, faSearch, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button/button';


storiesOf('Button', module)
    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content: ButtonReadme,
            sidebar: ButtonUsage,
        },
    })

    .add('Standard', () => (
        <div>
            <h3 className={'base-font'}>Standard</h3>
            <Button
                className={'storybook-margin'}
                type="primary"
                label={'Primary'}
                onClick={action('Primary button clicked')}>
            </Button>
            <Button
                className={'storybook-margin'}
                type="secondary"
                label={'Secondary'}
                onClick={action('Secondary button clicked')}>
            </Button>
            <Button
                className={'storybook-margin'}
                type="danger"
                label={'Danger'}
                onClick={action('Danger button clicked')}>
            </Button>
            <Button
                className={'storybook-margin'}
                type="radial"
                label={'Radial'}
                onClick={action('Radial button clicked')}>
            </Button>
            <h3 className={'base-font'}>Disabled</h3>
            <Button
                className={'storybook-margin'}
                type="primary"
                label={'Primary'}
                disabled={true}>
            </Button>
            <Button
                className={'storybook-margin'}
                type="secondary"
                label={'Secondary'}
                disabled={true}>
            </Button>
            <Button
                className={'storybook-margin'}
                type="danger"
                label={'Danger'}
                disabled={true}>
            </Button>
            <Button
                className={'storybook-margin'}
                type="radial"
                label={'Radial'}
                disabled={true}>
            </Button>
        </div>
    ))


    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content: ButtonSizeReadme,
            sidebar: ButtonUsage,
        },
    })

    .add('Special Usage', () => (
        <div>
            <h3>Custom Size</h3>
            <Button
                className={'storybook-margin'}
                type={'primary'}
                label={'width:100% of Parent'}
                icon={faDraftingCompass}
                width={'100%'}
                onClick={action('Primary button clicked')}>
            </Button>
            <h3 className={'base-font'}>Button with Icon</h3>
            <Button
                className={'storybook-margin'}
                type={'primary'}
                label={'Primary'}
                icon={faPlus}
                onClick={action('Primary button clicked')}>
            </Button>
            <Button
                className={'storybook-margin'}
                type={'secondary'}
                label={'Secondary'}
                icon={faPlus}
                onClick={action('Secondary button clicked')}>
            </Button>
            <Button
                className={'storybook-margin'}
                type={'danger'}
                label={'Danger'}
                icon={faPlus}
                onClick={action('Danger button clicked')}>
            </Button>
            <Button
                className={'storybook-margin'}
                type="radial"
                label={'Radial'}
                icon={faSearch}
                onClick={action('Radial button clicked')}>
            </Button>
            <Button
                className={'storybook-margin'}
                type={'primary'}
                onClick={action('Primary button clicked')}
                icon={faPlus}>
            </Button>
            <Button
                className={'storybook-margin'}
                type={'secondary'}
                onClick={action('Secondary button clicked')}
                icon={faPlus}>
            </Button>
            <Button
                className={'storybook-margin'}
                type={'danger'}
                onClick={action('Danger button clicked')}
                icon={faPlus}>
            </Button>
            <Button
                className={'storybook-margin'}
                type="radial"
                icon={faSearch}
                onClick={action('Radial button clicked')}>
            </Button>
            <h3 className={'base-font'}>Loading Buttons</h3>
            <div>
                <Button
                    className={'storybook-margin'}
                    type={'primary'}
                    icon={faSpinner}
                    label={'Primary'}
                    onClick={action('Please wait...')}
                    animation={'pulse'}/>

                <Button
                    className={'storybook-margin'}
                    type={'secondary'}
                    icon={faSpinner}
                    label={'Secondary'}
                    onClick={action('Please wait...')}
                    animation={'pulse'}/>

                <Button
                    className={'storybook-margin'}
                    type={'danger'}
                    label={'Danger'}
                    icon={faSpinner}
                    onClick={action('Please wait...')}
                    animation={'pulse'}/>
            </div>
            <div>
                <Button
                    className={'storybook-margin '}
                    type={'primary'}
                    label={'Primary'}
                    disabled={true}
                    icon={faSpinner}
                    animation={'pulse'}/>
                <Button
                    className={'storybook-margin '}
                    type={'secondary'}
                    label={'Secondary'}
                    icon={faSpinner}
                    disabled={true}
                    animation={'pulse'}/>
                <Button
                    className={'storybook-margin '}
                    type={'danger'}
                    icon={faSpinner}
                    label={'Danger'}
                    disabled={true}
                    animation={'pulse'}/>
            </div>
            <div>
                <Button
                    className={'storybook-margin '}
                    type={'primary'}
                    icon={faSpinner}
                    onClick={action('Please wait...')}
                    animation={'pulse'}/>
                <Button
                    className={'storybook-margin '}
                    type={'secondary'}
                    icon={faSpinner}
                    onClick={action('Please wait...')}
                    animation={'pulse'}/>

                <Button
                    className={'storybook-margin '}
                    type={'danger'}
                    icon={faSpinner}
                    onClick={action('Please wait...')}
                    animation={'pulse'}/>
            </div>
        </div>
    ))


    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content: ButtonLinkReadme,
            sidebar: ButtonUsage,
        }
    })
    .add('Link Variant', () => (
        <Button
            type={'link'}
            icon={faArrowRight}
            label={'Go to Link'}
            onClick={action('Link button clicked')}>
        </Button>
    ))
;


