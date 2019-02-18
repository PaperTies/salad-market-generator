const presets = [
  [
    '@babel/env',
    {
      targets: {
        chrome: '67',
      },
      useBuiltIns: 'usage',
    },
  ],
];

const plugins = [['@babel/plugin-proposal-pipeline-operator', { proposal: 'smart' }]];

module.exports = { presets, plugins };
