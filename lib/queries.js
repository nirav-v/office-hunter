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
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the department called?",
      },
    ])
    .then((answers) => {
      const department = JSON.stringify(answers.department);
      db.promise().query(`INSERT INTO department (department_name) 
        VALUES (${department})`);
      console.log(`Added ${answers.department} to the database`);
    })
    .then(() => {
      askAction();
    });
};

addRole = () => {
  // first display department table for the user to see
  db.promise()
    .query(`SELECT * from department`)
    .then(([rows, fields]) => {
      //displays table
      console.table(rows);
    })
    .then(() => {
      inquirer.prompt([
        {
          name: "departmentId",
          type: "input",
          message: "What is the id of the department the role is in?(please enter the corresponding number from th etable above)",
        },
        {
          name: "role",
          type: "input",
          message: "What is the name of the role?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary of the role?",
        }
      ])
      .then((answers) => {
      const role = JSON.stringify(answers.role)
      db.promise().query(`INSERT INTO role (title, salary, department_id)
  VALUES (${role}, ${answers.salary}, ${answers.departmentId})`);
    })
    .then(() => {
      askAction();
    });
    })
};


// for user to add a new employee
addEmployee = () => {
  // display department table
  db.promise()
    .query(`SELECT id, title FROM role`)
    .then(([rows, fields]) => {
      //displays table
      console.table(rows);
  db.promise()
    .query(`SELECT employee.id, concat(manager.first_name, " ", manager.last_name) AS manager
FROM employee as employee
 JOIN employee as manager
ON employee.manager_id = manager.id`)
    .then(([rows, fields]) => {
      //displays table
      console.table(rows);
    })
    .then(() => {
      inquirer.prompt([
        {
          name: "managerID",
          type: "input",
          message: "What id number does the employees role title have? (please enter the corresponding number from the first table above)",
        },
        {
          name: "roleID",
          type: "input",
          message: "What id number does the employees manager have? (please enter the corresponding number from the table above)",
        },
        {
          name: "firstName",
          type: "input",
          message: "What is the employee's first name?",
        },
        {
          name: "lastName",
          type: "input",
          message: "What is the employee's last name?",
        }
      ])
      .then((answers) => {
      const firstName = JSON.stringify(answers.firstName)
      const lastName = JSON.stringify(answers.lastName)
      db.promise().query(`INSERT INTO employee (first_name, last_name, department_id)
  VALUES (${role}, ${answers.salary}, ${answers.departmentId})`);
    })
    .then(() => {
      askAction();
    });
    })
  });
}


module.exports = viewDepartments;
module.exports = viewRoles;
