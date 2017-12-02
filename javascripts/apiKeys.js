// "use strict";

// const firebaseApi = require("./firebaseApi");
// const events = require("./events");

// const apiKeys = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax("../db/apiKeys.json").done((data) => {
//       resolve(data);
//       console.log("apikeys", data);
//     }).fail((error) => {
//       reject(error);
//     });
//   });
// };

// const retrieveKeys = () => {
//   apiKeys().then((results) => {
//     firebaseApi.setKey(results.firebaseKeys);
//     firebase.initializeApp(results.firebaseKeys);
//     // firebaseApi.getBlogs();
//     // firebaseApi.getProjects();
//     events.doThisWhenClick();
//   });
// };

// module.exports = {
//   retrieveKeys
// };