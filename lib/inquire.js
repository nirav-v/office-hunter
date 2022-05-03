const inquirer = require("inquirer");

// functions for inquirer prompts
askAction = () => {
    return inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all departments",
          "Add department",
          "Add role",
            "View all roles",
          "Add employee",
          "Update employee role",
        ],
      },
    ])
    .then((answers) => {
    // if the answer is to show all the departments, then a mysql query is made to show the departments table
    if (answers.action === "View all departments") {
      return viewDepartments();
    }
    if (answers.action === "View all roles") {
      return viewRoles();
    }
    if (answers.action === "View all employees") {
      return viewEmployees();
    }
    if (answers.action === "Add department") {
      return addDepartment();
    }
    if (answers.action === "Add role") {
      return addRole();
    }
    if (answers.action === "Add employee") {
      return addEmployee();
    }
    if (answers.action === "Update employee role") {
      return updateEmployee();
    }

  })
}


module.exports = askAction;
// module.exports = addDepartment;

