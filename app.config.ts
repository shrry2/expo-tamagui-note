import { ConfigContext, ExpoConfig } from 'expo/config';

const IDENTIFIER = 'me.shrry2.tamanote';

const VERSION = '1.0.0';
const VERSION_CODE = 1;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Tamanote',
  slug: 'shrry2-tamanote',
  version: VERSION,
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#43ace7',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: IDENTIFIER,
    buildNumber: VERSION_CODE.toString(),
  },
  android: {
    package: IDENTIFIER,
    versionCode: VERSION_CODE,
    icon: './assets/icon.png',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon-foreground.png',
      backgroundImage: './assets/adaptive-icon-background.png',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
});
