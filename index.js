//Import packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



// Create an array for user questions
const questions = [
    {
        type: 'input',
        name: ''
    }
]
