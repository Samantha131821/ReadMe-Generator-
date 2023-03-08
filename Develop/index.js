const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const createMarkdown = require('./utils/createMarkdown')


inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Title of Project',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description of project',
            name: 'description',
        },
          {
            type: 'list',
            message: 'Choose a License',
            choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'Boost_1.0', 'Unlicense'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Usage Information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Installation Instructions',
            name: 'installation',
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
            type: 'input',
            message:"Please ask questions you may have",
            name: 'questions',
          },
        {
            type: 'input',
            message:"Please add your github account name",
            name: 'github',
          },
        {
            type: 'input',
            message:"Please add your email",
            name: 'email',
          }
    
    ])
    .then((data) =>{

        fs.writeFile("ReadME.md", createMarkdown(data), (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('Your ReadME has been created!')
            }
        })

    });