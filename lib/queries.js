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
  database: "company_db",
});

viewDepartments = () => {
  db.promise()
    .query("SELECT * FROM department")
    .then(([rows, fields]) => {
      console.table(rows);
    })
    .then((answers) => {
      askAction();
    });
};

viewRoles = () => {
  db.promise()
    .query(
      "SELECT department.id, department.department_name, role.title, role.salary FROM role JOIN department ON role.department_id = department.id "
    )
    .then(([rows, fields]) => {
      //displays table
      console.table(rows);
    })
    // show the actions prompt below the table
    .then((answers) => {
      askAction();
    });
};

viewEmployees = () => {
  db.promise()
    .query(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary, concat(manager.first_name, " ", manager.last_name) AS manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee as manager ON employee.manager_id = manager.id`
    )
    .then(([rows, fields]) => {
      //displays table
      console.table(rows);
    })
    // show the actions prompt below the table
    .then((answers) => {
      askAction();
    });
};

addDepartment = (answers) => {
  inquirer.prompt([
    {
      name: 'department',
      type: 'input',
      message: 'What is the department called?'
    }
  ])
  .then((answers) => {
        const department = JSON.stringify(answers.department);
        db.promise().query(`INSERT INTO department (department_name) 
        VALUES (${department})`)
    console.log(`Added ${answers.department} to the database`)
  })
  .then(() => {
      askAction();
    });
};

module.exports = viewDepartments;
module.exports = viewRoles;
