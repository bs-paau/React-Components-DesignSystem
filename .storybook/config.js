import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';


addParameters({
  name: 'README addon',
  url: 'https://github.com/tuchk4/storybook-readmeBackup',
  options: {
    panelPosition: 'right',
  },
});


addDecorator(addReadme);
function loadStories() {
  require('../stories');
}

configure(loadStories, module);
