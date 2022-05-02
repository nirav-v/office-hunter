const mysql = require("mysql2");
const cTable = require("console.table");

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
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
  });
};

viewRoles = () => {
  db.query(
    "SELECT department.id, department.department_name, role.title, role.salary FROM role JOIN department ON role.department_id = department.id ",
    function (err, results) {
      console.table(results);
    }
  );
};

viewEmployees = () => {

}



module.exports = viewDepartments;
module.exports = viewRoles;