// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ({title, description, installation, usage, contributing, tests, license, github, email, badge, licenseTxt}) =>
`# ${title} 
${badge}

## Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
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
${licenseTxt}
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
        message: 'Please provide instructions on how developers can contribute to your project.',
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
.then((data) => {
    data.badge = generateMarkdown.renderLicenseBadge(data.license),
    data.licenseTxt = generateMarkdown.renderLicenseText(data.license),
    fs.writeFile('README.md', questions(data), (err) => {
    err ? console.log(err) : console.log('Success!')
    })});

// function renderLicenseBadge(license) {
//     let badge ='';
//     if (license === 'MIT') {
//       badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//     }
//     else if (license === 'IBM') {
//       badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
//     }
//     else if (license === 'ISC') { 
//       badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
//     }
//     else if (license === 'Mozilla') {
//       badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
//     }
//     else { 
//       badge = ''
//     }
//     return badge;
//   }

//   function renderLicenseText(license) {
//     if (license === 'MIT') {
//       licenseTxt = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
//       'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.'
//       'THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
//     }
//     else if (license === 'IBM') {
//       licenseTxt = 'THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENTS ACCEPTANCE OF THIS AGREEMENT.'
//     }
//     else if (license === 'ISC') {
//       licenseTxt = 'THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.'
//     }
//     else if (license === 'Mozilla') {
//       licenseTxt = 'This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0'
//     }
//     else {
//         licenseTxt = ''
//     }
//     return licenseTxt;
//   }
