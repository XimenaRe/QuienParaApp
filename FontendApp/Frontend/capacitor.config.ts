import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'quienparaApp.com.co',
  appName: 'Quien  Para  App',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3500,
      launchAutoHide: true,
      launchFadeOutDuration: 3500,
      // backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      // androidScaleType: "CENTER_CROP",
      showSpinner: true,
      // androidSpinnerStyle: "large",
      // iosSpinnerStyle: "small",
      // spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      // layoutName: "launch_screen",
      // useDialog: true,
    },
  },
};

export default config;
