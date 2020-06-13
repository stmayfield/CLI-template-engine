const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

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
            return fs.appendFile("test.html", returnInternHTML(newIntern), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            });
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
            return fs.appendFile("test2.html", returnEngineerHTML(newEngineer), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            })
        });





    } else if (answers.role === "Manager") {












    }


});

returnMainHTML()

// const newEmployee = new Employee("Stephen", "49864856", "email@domain.com");

// console.log(newIntern.getName(this.data));



function returnInternHTML(data) {
    return `<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${data.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${data.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
        <li class="list-group-item">School:${data.getSchool()}</li>
    </ul>
</div>
</div>`

}

function returnEngineerHTML(data) {
    return `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data.getName()}}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${data.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${data.getGithub()}" target="_blank" rel="noopener noreferrer">${data.getGithub()}</a></li>
        </ul>
    </div>
</div>`
}


function returnMainHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${data}
                </div>
            </div>
        </div>
    </body>
    
    </html>`
}