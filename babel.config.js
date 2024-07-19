module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
    ['@babel/preset-env', {targets: {node: 'current'}}],
  ],
  overrides: [
    {
      plugins: [
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.native.js',
          '.native.jsx',
          '.native.ts',
          '.native.tsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tx',
        ],
        alias: {
          '@assets': './assets',
          '@auth': './src/auth',
          '@components': './src/components',
          '@context': './src/context',
          '@dev': './_dev',
          '@data': './src/data',
          '@database': './src/database',
          '@hooks': './src/hooks',
          '@libs': './src/libs',
          '@navigation': './src/libs/Navigation',
          '@screens': './src/screens',
          '@src': './src',
          '@storage': './src/storage',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
