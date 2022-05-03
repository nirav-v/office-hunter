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
    
  })
}

// addDepartment = () => {
//     return inquirer.prompt([
//         {
//         name: 'department',
//         type: "text",
//         message: "What is the name of the department?"
//         }
//     ])
// }

module.exports = askAction;
// module.exports = addDepartment;

