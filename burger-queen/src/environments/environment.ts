// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*jperez*/
//Se configura la llave de firebase
export const environment = {
  production: false,
  configFirebase: {
    apiKey: "AIzaSyA-pWKS6TWTKKY7jXo-BWyJhn78oxaqvUI",
    authDomain: "burgerqueen-aca9c.firebaseapp.com",
    databaseURL: "https://burgerqueen-aca9c.firebaseio.com",
    projectId: "burgerqueen-aca9c",
    storageBucket: "burgerqueen-aca9c.appspot.com",
    messagingSenderId: "9330360316"    
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
