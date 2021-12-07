// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title: (required) ',
        name: 'Title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('We know you project has a title... Try again');
                return false;
            }
        }

    },
    {
        type: 'input',
        message: 'Creator Name',
        name: 'Creator',
        validate: creatorInput => {
            if (creatorInput) {
                return true;
            }
            else {
                console.log('We know you project has a title... Try again');
                return false;
            }
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'Email'
    },
    {
        type: 'input',
        message: 'GitHub Username: ',
        name: 'Gituser'
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Installation steps: ',
        name: 'Install'
    },
    {
        type: 'input',
        message: 'Usage: ',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'Tests: ',
        name: 'Test'
    },
    {
        type: 'input',
        message: 'Deployment Link',
        name: 'Deployment'
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Are there any contributers you would like to credit?',
        default: true
    },
    {

        type: 'input',
        message: 'Contributors: ',
        name: 'Contribute',
        when: ({ confirmContribute }) => {
            if (confirmContribute) {
                return true;
            }
            else {
                return false;
            }
        }
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            console.log(error);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        // generateMD(answers);
        writeToFile('README.md', generateMD(answers));
    });
}


// Function call to initialize app
init();
