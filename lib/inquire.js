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
          "Add Employee",
          "Update Employee Role",
        ],
      },
    ]);
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

