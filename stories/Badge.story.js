import React from "react";
import {storiesOf} from "@storybook/react";
import Badge from "../components/Badge/badge";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
import BadgeUsage from '../components/Badge/readme/USAGE.md';
import BadgeDefaultReadme from '../components/Badge/readme/readmeDefault.md';

storiesOf('Badge', module)
    .addParameters({
        readme: {
            codeTheme: 'base16-ateliersulphurpool.light',
            content:BadgeDefaultReadme,
            sidebar:BadgeUsage
        },
    })
    .add('Standard', () => (
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
    ));
