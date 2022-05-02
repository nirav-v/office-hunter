const figlet = require("figlet");
const inquirer = require("inquirer");
//const fs = require("fs").promises;
const mysql = require("mysql2");
const cTable = require("console.table");
const queries = require("./lib/queries");

askAction = require("./lib/inquire");

// TO make the command line intro display with figlet
new Promise((resolve, reject) => {
  figlet("Employee Manager", function (err, data) {
    if (err) {
      reject(err);
      return;
    }
    console.log(data);
    resolve();
  });
})
  .catch(() => {
    // something is wrong with figlet.
    // provide fallback welcome message
    console.log("Welcome to the Team Profile Generator");
  })
  // chain on the inquirer prompts
  .then(() => {
    // return promise to continue chaining
    return askAction();
  })
  .then((answers) => {
    // if the answer is to show all the departments, then a mysql query is made to show the departments table
    if (answers.action === "View all departments") {
      return viewDepartments();
    }
    if (answers.action === "View all roles") {
      return viewRoles();
    }
  })
  .then((answers) => {
      askAction(answers)
  })


