// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require(`utils\generateMarkdown.js`);
// TODO: Create an array of questions for user input
const questions = [

];

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
        writeToFile(`readme.MD`, generateMD(answers));
        });
    }


// Function call to initialize app
init();
