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
        'getting-started/installation',
        // Add more getting started docs here
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Ethereum: ETH',
      items: [
        'ethereum-eth/introduction',
        'ethereum-eth/node-setup',
        'ethereum-eth/staking-basics',
        'ethereum-eth/smart-contracts',
      ],
      collapsed: true,
    },
  ],
};export default sidebars;