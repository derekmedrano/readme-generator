// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generatemarkdown');

// Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description for your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How is your project installed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is your project used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a license.',
        name: 'license',
        choices: ["MIT", "Apache", "GNU General Public License"]
    },
    {
        type: 'input',
        message: 'How can users contribute to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How do you run the tests for your application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(function(res){
        const markdown = generateMarkdown(res);
        writeToFile("./output/readme.md", markdown);
    })
}

// Function call to initialize app
init();
