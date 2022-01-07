const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require ('../lib/Employee.js');

const question = [
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
            if(!isNan(idInput)) {
                console.log('Enter a number. Letters will not be Accepted')
                return false;

            } else if (idInput.length < 6) {
                console.log('Please keep the number count below or equal to 6')
                return false;

            } else {
                return true;
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'Enter the Employee\'s email'
    }
];



