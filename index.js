//"front end" inquirer, displaying stuff in the console
const connection = require("./db/connection.js");

const {
  firstQuestion,
  addDepartment,
  addRoles,
  addEmployees,
  viewDepartments,
  viewRoles,
  viewEmployees,
  updateEmployeeRoles,
} = require("./questions.js");
const inquirer = require("inquirer");
const firstQuestionFunc = () => {
  inquirer.prompt(firstQuestion).then((answer) => {
    if (answer.role === "Add Departments") {
      //fire the ask manager questions
      addDepartmentFunc();
    } else if (answer.role === "Add Roles") {
      //fire the ask engineer questions
      addRolesFunc();
    } else if (answer.role === "Add Employees") {
      //fire the ask intern questions
      addEmployeesFunc();
    } else if (answer.role === "View Departments") {
      //fire the ask intern questions
      viewDepartmentsFunc();
    } else if (answer.role === "View Roles") {
      //fire the ask intern questions
      viewRolesFunc();
    } else if (answer.role === "View Employees") {
      //fire the ask intern questions
      viewEmployeesFunc();
    } else if (answer.role === "Update Employees Role") {
      //fire the ask intern questions
      updateEmployeesRoleFunc();
    }
  });
};

firstQuestionFunc();

function addDepartmentFunc() {
  inquirer.prompt(addDepartment).then((answers) => {
    console.log(answers);
    forEach(({id, name}) => {
      console.log(`${id} | ${name}`);
      firstQuestionFunc();
    });
  });
}

function addRolesFunc() {
  inquirer.prompt(addRoles).then((answers) => {
    console.log(answers);
    firstQuestionFunc();
  });
}

function addEmployeesFunc() {
  inquirer.prompt(addEmployees).then((answers) => {
    console.log(answers);
    firstQuestionFunc();
  });
}

function viewDepartmentsFunc() {
  console.log("view all Departments...\n");
  connection.query("SELECT * FROM names", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function viewRolesFunc() {
  console.log("view all Roles...\n");
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function viewEmployeesFunc() {
  console.log("view all Employees...\n");
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function updateEmployeeRoleFunc() {
  inquirer.prompt(updateEmployeeRole).then((answers) => {
    //     if (answers.end === "Yes") {
    firstQuestionFunc();
    //     }
  });
}
