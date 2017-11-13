"use strict";

const firebaseApi = require("./firebaseApi");

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax("../db/apiKeys.json").done((data) => {
      resolve(data);
      console.log("apikeys", data);
    }).fail((error) => {
      reject(error);
    });
  });
};

const retrieveKeys = () => {
  apiKeys().then((results) => {
    firebaseApi.setKey(results.firebaseApi.apiKey);
    firebase.initializeApp(results.firebaseApi.apiKey);
  });
};

module.exports = {
  retrieveKeys
};