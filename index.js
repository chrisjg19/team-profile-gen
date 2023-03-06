const inquirer = require("inquirer");
const fs = require("fs");
//this is where the template will go

//here are the employe exports
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require('./lib/Intern');



//here will go the questions. probably will need to create 4. one for initial question and 3 for each type of employee
function init() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Manager name?',
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is your ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'What is your office number?',
    }
])

}



//here will go the data to generate the employee cards




init();