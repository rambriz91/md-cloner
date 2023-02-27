// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ({title, description, installation, usage, contributing, tests, license, github, linkedIn}) =>
`# ${title}

## Description

${description}

## Installation
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
${tests}
## License
${license}
## Questions

-   ${github}
-   ${linkedIn}

## License;`

// TODO: Create a function to write README file
inquirer
.prompt ([
    {
        type:'input',
        message: 'Please enter your projects title.',
        name: 'title',
    },
    {
        type:'input',
        message: 'Describe your project in detail.',
        name: 'description',
    },
    {
        type:'input',
        message: 'Provide us with instructions for installation.',
        name: 'installation',
    },
    {
        type:'input',
        message: 'Please fill out the contributing section.',
        name: 'contributing',
    },
    {
        type:'input',
        message: 'please fill out tests.',
        name: 'tests',
    },
    {
        type:'list',
        message: 'please select a license.',
        name: 'license',
        choices: ['MIT','IBM','ISC','Mozilla'],
    },
    {
        type:'input',
        message: 'Please provide your Github username.',
        name: 'github',
    },
    {
        type:'input',
        message: 'Please provide your linkedIn username.',
        name: 'linkedIn',
    },
])
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
