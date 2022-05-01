const mysql = require("mysql2");
const cTable = require('console.table');


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


// make some classes to hold my mysql database queries

// class for department queries
class Department {
  constructor(id, department_name) {
    (this.id = id), (this.department_name = department_name);
  }
  showDepartments() {
    db.query("SELECT * FROM department", function (err, results) {
      //   console.log(results);
      console.table(results);
    });
  }
}
