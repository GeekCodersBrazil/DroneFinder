// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAXKmaylCso63a59Q5YnEB365Ab4n-ZdDk",
    authDomain: "drone-finder-database.firebaseapp.com",
    databaseURL: "https://drone-finder-database.firebaseio.com",
    projectId: "drone-finder-database",
    storageBucket: "drone-finder-database.appspot.com",
    messagingSenderId: "807702917906"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
