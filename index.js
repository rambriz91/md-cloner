// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const badges = require('./Develop/utils/badges')
// TODO: Create an array of questions for user input
const questions = ({title, description, installation, usage, contributing, tests, license, github, email}) =>
`# ${title} 
${badges}

## Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Badges](#badges)
- [Features](#features)
- [Contributers](#contributers)
- [Test](#test)
- [Questions](#questions)
- [License](#license)
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
For any additional questions please feel free to contact me at one of the following links below.
-   Github Username:${github}
-   https://github.com/${github}
-   Email:${email}`

// Prompts
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
        message: 'Provide us with instructions for usage.',
        name: 'usage',
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
        message: 'Please provide your email.',
        name: 'email',
    },
])
.then((data) =>
fs.writeFile('README.md', questions(data), (err) => {
    err ? console.log(err) : console.log('Sucess!')
}));
