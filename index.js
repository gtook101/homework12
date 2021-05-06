const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "department_db",
});

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
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
// create writeFile function using promises instead of a callback function
//const writeFileAsync = util.promisify(fs.writeFile);
console.log(firstQuestion);
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
    firstQuestionFunc();
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
  inquirer.prompt(viewDepartments).then((answers) => {
    console.log(answers);
    firstQuestionFunc();
  });
}

function viewRolesFunc() {
  inquirer.prompt(viewRoles).then((answers) => {
    console.log(answers);
    firstQuestionFunc();
  });
}

function viewEmployeesFunc() {
  inquirer.prompt(viewEmployees).then((answers) => {
    console.log(answers);
    firstQuestionFunc();
  });
}

function updateEmployeeRoleFunc() {
  inquirer.prompt(updateEmployeeRole).then((answers) => {
    //     if (answers.end === "Yes") {
    firstQuestionFunc();
    //     }
  });
}
