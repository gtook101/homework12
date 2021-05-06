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
      name: "department",
      message: "What is the department name?",
    },
  ],

  addRoles: [
    {
      type: "input",
      name: "roles",
      message: "What is the roles title?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the roles salary?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the roles id?",
    },
  ],

  addEmployees: [
    {
      type: "input",
      name: "firstname",
      message: "what is the employees first name?",
    },
    {
      type: "input",
      name: "lastname",
      message: "What is the employees last name?",
    },
    {
      type: "input",
      name: "roleid",
      message: "What is the employees role id?",
    },
    {
      type: "input",
      name: "managersid",
      message: "What is the managers id?",
    },
  ],

  //module.exports = require("managerQuestions");

  // .then((orange => {
  //   employee.push(
  //     new this.managerQuestions(
  //       orange.Name,
  //       orange.Id,
  //       orange.Email,
  //       orange.Office
  //     )
  //   );
  //   console.log(employee);
  //   managerQuestions();
  // });

  viewDepartments: () => {
    console.log("View all Departments...\n");
    connection.query("SELECT * FROM Departments", (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  },

  viewRoles: () => {
    console.log("View all Roles...\n");
    connection.query("SELECT * FROM roles", (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  },

  viewEmployees: () => {
    console.log("View all Employees...\n");
    connection.query("SELECT * FROM employees", (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  },

  updateEmployeeRoles: [
    {
      //type: "input",
      //name: "github",
      //message: "What is the eigneers github?",
    },
  ],

  // .then((orange => {
  //   employee.push(
  //     new this.managerQuestions(
  //       orange.Name,
  //       orange.Id,
  //       orange.Email,
  //       orange.GitHub
  //     )
  //   );
  //   console.log(team);
  //   managerQuestions();
  // });

  // .then((orange => {
  //   employee.push(
  //     new this.managerQuestions(
  //       orange.Name,
  //       orange.Id,
  //       orange.Email,
  //       orange.Office
  //     )
  //   );
  //   console.log(team);
  //   managerQuestions();
  // });

  // endQuestion: {
  //   type: "list",
  //   name: "end",
  //   message: "Would you like to add another employee?",
  //   choices: ["Yes", "No"],
  // },
};
