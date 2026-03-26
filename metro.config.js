const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
const config = {
  resolver: {
    extraNodeModules: {
      "react-dom": require.resolve("react-native"),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      }
    }),
    babelTransformerPath: require.resolve(
      "react-native-svg-transformer/react-native"
    )
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"]
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
