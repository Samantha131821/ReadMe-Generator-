const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/createMarkdown')


inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Title of Project',
            default: 'Title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description of project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation Instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage Information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contribution Guidelines',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Test Instructions',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Choose a License',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license',
        },
    ])
    .then((answers) =>{
        const {title, description, installation, usage, contribution, test, license} = answers;

        const readmeMD = `
        
# ${title},
\r\n
\r\n
\r\n
### ${license}
\r\n
\r\n
### ${description}
\r\n
\r\n
### ${installation}
\r\n
\r\n
### ${usage}
\r\n
\r\n
### ${contribution}
\r\n
\r\n
### ${test}
\r\n


        
        `;

        fs.writeFile("ReadME.md", readmeMD, (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('Your ReadME has been created!')
            }
        })
    });
    