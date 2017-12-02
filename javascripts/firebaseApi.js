// "use strict";

// const dom = require("./dom");

// let firebaseKeys = "";

// const setKey = (key) => {
//   firebaseKeys = key;
//   getBlogs();
//   getProjects();
// };

// const getBlogs = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax(`${firebaseKeys.databaseURL}/blogs.json`)
//     .then((data) => {
//       dom.blogDomString(data);
//       resolve(data);
//       }).fail((error) => {
//       	reject(error);
//       });
//     });
//   };

//   const getProjects = () => {
//     return new Promise((resolve, reject) => {
//       $.ajax(`${firebaseKeys.databaseURL}/projects.json`)
//       .then((data) => {
//         console.log('projects', data);
//         dom.projectDomString(data);
//         resolve(data);
        
//       }).fail((error) => {
//         reject(error);
//       });
//     });
//   };

//   module.exports = {
//     getBlogs, getProjects, setKey
//   };
