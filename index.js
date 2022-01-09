const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const makeHtml = require('./src/html-maker');

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

createEmployee = () => {

    let employeeArray = [];
    let newEmployee;

    const askQuestions = () => {

        inquirer.prompt(questions)
            .then(data => {

                if (data.role === 'Engineer') {

                    newEmployee = new Engineer(data.name, data.id, data.email, data.role, data.specificInfo);

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
                        .then(employeeData => {

                            newEmployee.role = data.role
                            newEmployee.specificInfo = employeeData.specificInfo;
                            employeeArray.push(newEmployee);

                            if (employeeData.addEmployee) {
                                askQuestions();

                            } else {
                                makeHtml(employeeArray);
                            };
                        })
                } else if (data.role === 'Intern') {

                    newEmployee = new Intern(data.name, data.id, data.email, data.role, data.specificInfo);
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
                        .then(employeeData => {

                            newEmployee.role = data.role
                            newEmployee.specificInfo = employeeData.specificInfo
                            employeeArray.push(newEmployee);

                            if (employeeData.addEmployee) {
                                askQuestions();

                            } else {
                                makeHtml(employeeArray);
                            };
                        })
                } else if (data.role === 'Manager') {

                    newEmployee = new Manager(data.name, data.id, data.email, data.role, data.specificInfo)
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
                        .then(employeeData => {

                            newEmployee.role = data.role
                            newEmployee.specificInfo = employeeData.specificInfo
                            employeeArray.push(newEmployee);

                            if (employeeData.addEmployee) {
                                askQuestions();

                            } else {
                                makeHtml(employeeArray);
                            };
                        });

                } else {
                    return false;
                };
                console.table(employeeArray)
            })
    }
    askQuestions();
};

createEmployee();