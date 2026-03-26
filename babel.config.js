module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
        },
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    ],
    'react-native-worklets/plugin',
  ],
};
