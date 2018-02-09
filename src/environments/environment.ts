// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAFPiyNQ8Phqc7pbeDtKyLOluS-_5owZb4",
    authDomain: "weather-4b74c.firebaseapp.com",
    databaseURL: "https://weather-4b74c.firebaseio.com",
    projectId: "weather-4b74c",
    storageBucket: "weather-4b74c.appspot.com",
    messagingSenderId: "506048745959"
  }
};