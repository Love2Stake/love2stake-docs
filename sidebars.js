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
  // Manually defined sidebar structure
  guideSidebar: [
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/overview',
        // Add more getting started docs here
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Cardano: ADA',
      link: { type: 'generated-index', description: 'A guide to cardano' },
      items: [
      ],
    },
  ],
};

export default sidebars;