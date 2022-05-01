const figlet = require("figlet");
const inquirer = require("inquirer");
//const fs = require("fs").promises;
const mysql = require("mysql2");
const cTable = require("console.table");
const queries = require("./db/queries");

// conect to the mysql database
// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // TODO: Add MySQL password here
  password: "mysql123",
  database: "company_db",
});

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
    return inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all departments",
          "Add Employee",
          "Update Employee Role",
        ],
      },
    ]);
  })
  .then((answers) => {
    // if the answer is to show all the departments, then a mysql query is made to show the departments table
    if (answers.action === "View all departments") {
      db.query("SELECT * FROM department", function (err, results) {
        console.table(results);
      });
    }
    // else if 

  });
  
