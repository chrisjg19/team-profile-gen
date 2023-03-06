const inquirer = require("inquirer");
const fs = require("fs");
//this is where the template will go

//here are the employe exports
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require('./lib/Intern');
const teamCardHtml = require('./src/teamCardHtml');
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
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        addEmployee();
      });
    };

    function addEmployee() {
        inquirer.prompt([
            {
                type: "list",
                name: "addEmployee",
                message: "Would you like to add another employee?",
                choices: ["Engineer", "Intern", "None"],
              },
        ]).then((answers) => {
            switch (answers.addEmployee) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateTeam();
            }
        })

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
      ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        addEmployee();
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
      
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
        addEmployee();
      });
  }

//here will go the data to generate the employee cards?

// function generateTeam(){

// }

function generateTeam() {
    const cards = employees.map(employee => {
      switch (employee.getRole()) {
        case "Manager":
          return `
            <div class="col-md-4 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h3>${employee.name}</h3>
                  <h4>Manager</h4>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                  </ul>
                </div>
              </div>
            </div>
          `;
        case "Engineer":
          return `
            <div class="col-md-4 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h3>${employee.name}</h3>
                  <h4>Engineer</h4>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank" rel="noopener">${employee.github}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          `;
        case "Intern":
          return `
            <div class="col-md-4 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h3>${employee.name}</h3>
                  <h4>Intern</h4>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                  </ul>
                </div>
              </div>
            </div>
          `;
      }
    });
    
    const html = teamCardHtml(cards.join('\n'));

fs.writeFileSync('./dist/index.html', html, 'utf-8');
console.log('Employee Cards Generated!')

}

init();