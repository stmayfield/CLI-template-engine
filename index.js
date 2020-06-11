const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

function test() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your first name: "
        },

        {
            type: "list",
            name: "role",
            message: "What is your position?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ]).then(function (data) {
        if (data.role === "Intern") {
            console.log(`Name: ${data.name}\nRole: ${data.role}`)
            const newEmployee = new Employee();
            return newEmployee.getName(data.name)
        }
    })
};

test();