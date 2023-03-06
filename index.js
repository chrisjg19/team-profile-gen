const inquirer = require("inquirer");
const fs = require("fs");
//this is where the template will go

//here are the employe exports
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require('./lib/Intern');
const employees = [];

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
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "None"],
      },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
      });
    }
    
    function addEngineer() {
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Engineer name?',
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
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?',
        },
        {
          type: 'list',
          name: 'addEmployee',
          message: 'Would you like to add another employee?',
          choices: ['Engineer', 'Intern', 'None'],
        },
      ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
      });
    }
    
    function addIntern() {
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Intern name?',
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
          type: 'input',
          name: 'school',
          message: 'What is the name of your school?',
        },
        {
          type: 'list',
          name: 'addEmployee',
          message: 'Would you like to add another employee?',
          choices: ["Engineer", "Intern", "None"],
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
      });
  }

//here will go the data to generate the employee cards




init();