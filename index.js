const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const render = require("./lib/htmlRenderer");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team.html");

const teamMembers = [];

function returnMainHTML() {
    fs.writeFileSync(outputPath, render(teamMembers))
}

function start() {

    inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter your first name: "
            },

            {
                type: "input",
                name: "lastName",
                message: "Enter your last name: "
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
            },
            {
                type: "input",
                name: "id",
                message: "Enter Your Employee ID (EID): "
            },

            {
                type: "input",
                name: "email",
                message: "Enter your email address: "
            },
        ]
    ).then(function (answers) {
        const employee = answers;
        if (answers.role === "Intern") {
            inquirer.prompt(
                [
                    {
                        type: "input",
                        name: "school",
                        message: "Enter the school you are currently attending: "
                    }
                ]
            ).then(function (intern) {
                const newIntern = new Intern(employee.name, employee.id, employee.email, intern.school);
                teamMembers.push(newIntern);
                start()
            })
        } else if (answers.role === "Engineer") {
            inquirer.prompt(
                [
                    {
                        type: "input",
                        name: "github",
                        message: "Enter your Github username: "
                    }
                ]
            ).then(function (engineer) {
                const newEngineer = new Engineer(employee.name, employee.id, employee.email, engineer.github);
                teamMembers.push(newEngineer);
                start()
            });

        } else if (answers.role === "Manager") {

            inquirer.prompt(
                [
                    {
                        type: "input",
                        name: "office",
                        message: "Please provide your office #: "
                    }
                ]
            ).then(function (manager) {
                const newManager = new Manager(employee.name, employee.id, employee.email, manager.office);
                teamMembers.push(newManager);
                start()
            });
        }
    });
    returnMainHTML()
}

start()






