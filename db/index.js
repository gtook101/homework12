//all connection.query stuff
module.exports = {
  viewDepartments: () => {
    console.log("View all Departments...\n");
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
      return res;
    });
  },

  viewRoles: () => {
    console.log("View all Roles...\n");
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  },

  viewEmployees: () => {
    console.log("View all Employees...\n");
    connection.query("SELECT * FROM employee", (err, res) => {
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
};
