var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",
  database: "employee_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId); 
    showAll();
    myFunction();
  });

  function myFunction() {
    myVar = setTimeout(runData, 100);
  }

  function showAll() {
    var query = "SELECT e.id AS employee_id, first_name, last_name, title, salary, d.name AS department_name FROM employee AS e JOIN role AS r ON r.id = role_id JOIN department AS d ON department_id = d.id;";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].employee_id + " | " + res[i].first_name + " | " + res[i].last_name + " | " + res[i].salary + " | " + res[i].department_name);
        }
    }
    )};

function runData() {

    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View department",
                "View employees",
                "View roles",
                "Add departments",
                "Add roles",
                "Add employees",
                "Update employee roles"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {

                case "View department":
                    viewDepartment();
                    break;

                case "View employees":
                    viewEmployees();
                    break;

                case "View roles":
                    viewRole();
                    break;

                case "Add departments":
                    addDepartment();
                    break;

                case "Add roles":
                    addRoles();
                    break;

                case "Add employees":
                    addEmployees();
                    break;

                case "Update employee roles":
                    updateEmployee();
                    break;

            }
        });
}


  

function viewDepartment() {
    var query = "SELECT name FROM department";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].name);
        }
        runData();
    });
}
function viewEmployees() {
    var query = "SELECT first_name, last_name FROM employee";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].first_name + " " + res[i].last_name);
        }
        runData();
    });
}
function viewRole() {
    var query = "SELECT title FROM role";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].title);
        }
        runData();
    });
}

function addDepartment() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View department",
                "View employees",
                "View roles",
                "Add departments",
                "Add roles",
                "Add employees",
                "Update employee roles"
            ]
        })
    var query = "SELECT title FROM role";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].title);
        }
        runData();
    });
}