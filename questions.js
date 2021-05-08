module.exports = {
  firstQuestion: {
    type: "list",
    name: "role",
    message: "What would you like to do?",
    choices: [
      "Add Departments",
      "Add Roles",
      "Add Employees",
      "View Departments",
      "View Roles",
      "View Employees",
      "Update Employee Roles",
    ],
  },

  addDepartment: [
    {
      type: "input",
      name: "name",
      message: "What is the department name?",
    },
  ],

  addRoles: [
    {
      type: "input",
      name: "title",
      message: "What is the roles title?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the roles salary?",
    },
    {
      type: "input",
      name: "department_id",
      message: "What is the roles id?",
    },
  ],

  addEmployees: [
    {
      type: "input",
      name: "first_name",
      message: "what is the employees first name?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employees last name?",
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the employees role id?",
    },
    {
      type: "input",
      name: "managers_id",
      message: "What is the managers id?",
    },
  ],
};
