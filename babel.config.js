// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
      [
          '@babel/plugin-syntax-dynamic-import'
      ],
      [
          '@babel/plugin-proposal-class-properties'
      ]
  ]
};
