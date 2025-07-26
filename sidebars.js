// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  documentationSidebar: [
    {
      type: 'html',
      value: '<div style="margin: 0.5rem;"></div>',
    },
    // {
    //   type: 'category',
    //   label: 'Getting Started',
    //   link: {
    //     type: 'doc',
    //     id: 'getting-started/index',
    //   },
    //   items: [
    //     'getting-started/using-love2automate'
    //   ],
    // },
    'getting-started',
    {
      type: 'category',
      label: 'How to Set Up a Cardano Stake Pool',
      link: {
        type: 'doc',
        id: 'how-to-set-up-a-cardano-stake-pool/index',
      },
      items: [
        {
          type: 'category',
          label: 'Installation',
          items: [
            'how-to-set-up-a-cardano-stake-pool/installation/prerequisites'
          ],
        },
      ],
    },
    {
      type: 'html',
      value: '<div style="height: 1px; background-color: var(--ifm-color-emphasis-300); margin: 1rem 1rem;"></div>',
    },
    'about-us',
    'donations',
    'disclaimer',
  ],

  // Add new sidebar here
};

export default sidebars;
