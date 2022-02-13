//Import packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Initialize empty arrrays for storage
const teamArray = [];
const idArray = [];

// Create an array for user questions

function runApp() {

    function addManager() {
        console.log("Let's build your team!");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a manager name!";
                }
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the team manager's ID?",
                validate: answer => {

                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
                validate: answer => {

                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?",
                validate: answer => {

                }
            }

        ]).then(responses => {
            const manager = new Manager(responses.managerName, responses.managerID, responses.managerEmail, responses.managerOfficeNumber);
            teamArray.push(manager);
            idArray.push(responses.managerID);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberSelection",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I do not want to add another team member"
                ]
            }
        ]).then(userChoice => {
            if (userChoice.memberSelection == "Engineer") {
                addEngineer();
            }
            else if (userChoice.memberSelection == "Intern") {
                addIntern();
            }
            else {
                buildTeam();
            }
        });

    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is your engineer's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is your engineer's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(responses => {
            const engineer = new Engineer(responses.engineerName, responses.engineerID, responses.engineerEmail, responses.engineerGitHub);
            teamArray.push(engineer);
            idArray.push(responses.engineerID);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internID",
                message: "What is your intern's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(responses => {
            const intern = new Intern(responses.internName, responses.internID, responses.internEmail, responses.internSchool);

        });
    }

    function buildTeam() {

    }
}

