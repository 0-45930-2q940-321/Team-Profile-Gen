const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const questions = [
    {
        type: 'text',
        name: 'name',
        message: 'To begin enter the Employee\'s name.'
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
        message: 'What Id Number would you like to give to the Employee?',

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
        message: 'Enter the Employee\'s email'
    }
];

createEmployee = () => {

    let employeeArray = [];

    const askQuestions = () => {

        inquirer.prompt(questions)
            .then(data => {

                if (data.role === 'Engineer') {
                    let createdEngineer;

                    createdEngineer = new Engineer(data.name, data.id, data.email, data.role);

                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'github',
                                message: 'What is your Github user?'
                            },
                            {
                                type: 'confirm',
                                name: 'addEmployee',
                                message: 'Would you like to add another Employee?',
                                default: false,
                            }
                        ])
                        .then(data => {

                            employeeArray.push(createdEngineer);
                            console.table(employeeArray);

                            if (data.addEmployee) {
                                askQuestions();

                            } else {
                                return false;
                            };
                        })
                } else if (data.role === 'Intern') {
                    let createdIntern;

                    createdIntern = new Intern(data.name, data.id, data.email, data.role);
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'school',
                                message: 'What school is the Intern going to?'
                            },
                            {
                                type: 'confirm',
                                name: 'addEmployee',
                                message: 'Would you like to add another Employee?',
                                default: false,
                            }
                        ])
                        .then(data => {

                            employeeArray.push(createdIntern);
                            console.table(employeeArray);

                            if (data.addEmployee) {
                                askQuestions();

                            } else {
                                return false;
                            };
                        })
                } else if (data.role === 'Manager') {
                    let createdManager;

                    createdManager = new Manager(data.name, data.id, data.email, data.role)
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'officeNum',
                                message: 'What is the Manager\'s office number?'
                            },
                            {
                                type: 'confirm',
                                name: 'addEmployee',
                                message: 'Would you like to add another Employee?',
                                default: false,
                            }
                        ])
                        .then(data => {

                            employeeArray.push(createdManager);
                            console.table(employeeArray);

                            if (data.addEmployee) {
                                askQuestions();

                            } else {
                                return false;
                            };
                            
                        }) ;

                        console.table(employeeArray);
                        
                } else {
                    return false;
                };
                console.table(employeeArray);
            });
    }
    askQuestions();
};

createEmployee();