// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'https://api.openweathermap.org/data/2.5/',
  apiKey:'6c63d4d475dc412195d08cd95d6ed7fa',
  firebase:{
  apiKey: "AIzaSyBcfyoK3LmECZ6XClK6NkPZA2-KnskO9Ro",
  authDomain: "weather-app-a0187.firebaseapp.com",
  projectId: "weather-app-a0187",
  storageBucket: "weather-app-a0187.appspot.com",
  messagingSenderId: "224367210931",
  appId: "1:224367210931:web:8c8349c3046c86697d9bc6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
