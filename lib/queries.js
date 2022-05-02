const mysql = require("mysql2");
const cTable = require("console.table");

const inquirer = require("inquirer");
askAction = require("../lib/inquire");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // TODO: Add MySQL password here
  password: "mysql123",
  database: "company_db"
});

viewDepartments = () => {
  db.promise().query("SELECT * FROM department")
  .then (([rows, fields]) => {
    console.table(rows);
  })
  .then((answers) => {
      askAction()
  })
};

viewRoles = () => {
  db.promise().query(
    "SELECT department.id, department.department_name, role.title, role.salary FROM role JOIN department ON role.department_id = department.id ")
  .then (([rows, fields]) => {
    //displays table 
    console.table(rows);
  })
  // show the actions prompt below the table
  .then((answers) => {
      askAction()
  })
};

viewEmployees = () => {
  db.promise().query(
    "SELECT department.id, department.department_name, role.title, role.salary FROM role JOIN department ON role.department_id = department.id ")
  .then (([rows, fields]) => {
    //displays table 
    console.table(rows);
  })
  // show the actions prompt below the table
  .then((answers) => {
      askAction()
  })
};






module.exports = viewDepartments;
module.exports = viewRoles;
