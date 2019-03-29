'use strict';

const open = require('open');

exports = module.exports = (app) => {
  return {
    label: 'Help',
    submenu: [
      {
        label: 'Online Documentation',
        click: () => open('https://support.office.com/en-us/outlook?omkt=en-001')
      },
      {
        label: 'Github Project',
        click: () => open('https://github.com/rzandonai/outlook-for-linux')
      },
      { type: 'separator' },
      {
        label: `Version ${app.getVersion()}`,
        enabled: false
      }
    ]
  };
};