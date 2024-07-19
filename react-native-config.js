module.exports = {
  project: {
    ios: {sourceDir: 'ios'},
    android: {},
  },
  dependencies: {
    'react-native-sqlite-storage': {
      platforms: {
        ios: null, // Delegate the management to CocoaPods
        android: {
          sourceDir:
            '../node_modules/react-native-sqlite-storage/platforms/android-native',
          packageImportPath: 'import io.liteglue.SQLitePluginPackage;',
          packageInstance: 'new SQLitePluginPackage()',
        },
      },
    },
  },
};
