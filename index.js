const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const makeHtml = require('./src/html-maker');

let teamArray = [];

const questions = [
    {
        type: 'text',
        name: 'name',
        message: 'To begin, what is the Employee\'s name?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the Employee\'s role for the job?',
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'input',
        name: 'id',
        message: 'What ID NUMBER would you like to give to the Employee?',

        validate: idInput => {

            if (idInput.length > 6) {
                console.log(' <<ERROR>> PLEASE KEEP THE NUMBER COUNT BELOW OR EQUAL TO 6')
                return false;

            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Employee\'s email?'
    }
];

askQuestions = () => {
    inquirer
        .prompt(questions).then(data => {
            switch (data.role) {
                case 'Engineer':
                    const newEngineer = new Engineer(data.name, data.id, data.email, data.role, data.specificInfo);
                    engineerQuest(newEngineer);
                    break;

                case 'Intern':
                    const newIntern = new Intern(data.name, data.id, data.email, data.role, data.specificInfo);
                    internQuest(newIntern);
                    break;

                case 'Manager':
                    const newManager = new Manager(data.name, data.id, data.email, data.role, data.specificInfo);
                    managerQuest(newManager);
                    break;
            }
        })
}

engineerQuest = newEngineer => {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'specificInfo',
                message: 'What is your Github user?'
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another Employee?',
                default: false,
            }
        ])
        .then(engineerData => {

            newEngineer.specificInfo = engineerData.specificInfo
            teamArray.push(newEngineer);

            if (engineerData.addEmployee) {
                askQuestions();

            } else {
                makeHtml(teamArray);
            };
        });
}

internQuest = newIntern => {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'specificInfo',
                message: 'What school is the Intern going to?'
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another Employee?',
                default: false,
            }
        ])
        .then(internData => {

            newIntern.specificInfo = internData.specificInfo
            teamArray.push(newIntern);

            if (internData.addEmployee) {
                askQuestions();

            } else {
                makeHtml(teamArray);
            };
        });
}

managerQuest = newManager => {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'specificInfo',
                message: 'What is the Manager\'s office number?'
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another Employee?',
                default: false,
            }
        ])
        .then(managerData => {

            newManager.specificInfo = managerData.specificInfo
            teamArray.push(newManager);

            if (managerData.addEmployee) {
                askQuestions();

            } else {
                makeHtml(teamArray);
            };
        });
}

askQuestions();