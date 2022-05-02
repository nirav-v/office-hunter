const mysql = require("mysql2");
const cTable = require("console.table");

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
  });
};

viewRoles = () => {
  db.promise().query(
    "SELECT department.id, department.department_name, role.title, role.salary FROM role JOIN department ON role.department_id = department.id ")
    .then ((rows, fields) => {
        console.table(rows)
    })
};

module.exports = viewDepartments;
module.exports = viewRoles;
