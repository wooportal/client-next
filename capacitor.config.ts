import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.wooportal',
  appName: 'wooportal',
  webDir: 'dist/wooportal',
  server: {
    androidScheme: 'http'
  }
};

export default config;
