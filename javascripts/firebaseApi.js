"use strict";

const dom = require("./dom");

let firebaseKey = "";

const setKey = (key) => {
  firebaseKey = key;
};

const getBlogs = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/blogs.json`)
    .then((data) => {
      dom.blogDomString(data);
      resolve(data);
      }).fail((error) => {
      	reject(error);
      });
    });
  };

  const getProjects = () => {
    return new Promise((resolve, reject) => {
      $.ajax(`${firebaseKey.databaseURL}/projects.json`)
      .then((data) => {
        console.log('projects', data);
        dom.projectDomString(data);
        resolve(data);
        
      }).fail((error) => {
        reject(error);
      });
    });
  };

  module.exports = {
    getBlogs, getProjects, setKey
  };
