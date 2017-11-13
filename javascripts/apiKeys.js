"use strict";

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

module.exports = {
  apiKeys
};