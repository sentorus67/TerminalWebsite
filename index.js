const inquirer=require('inquirer');
const fs=require('fs');
const colors=require('colors');


inquirer
    .prompt([
        {
            type:'input',
            message: 'should be the Title?',
            name: 'title'
        }, {
            type:'input',
            message: 'Enter a description for the Readme',
            name: 'description'
        },  {
            type:'input',
            message: 'Explain how to install this project',
            name: 'installation'
        },  {
            type:'input',
            message: 'explain how to use this project',
            name: 'usage'
        },  {
            type:'input',
            message: 'provide proper credentials?',
            name: 'credits'
        },  {
            type:'input',
            message: 'What is your name?',
            name: 'name'
        },  {
            type:'input',
            message: 'provide a link to appropriate business emeail or website',
            name: 'link'
        },  {
            type:'list',
            message: 'What license will be used?',
            name: 'license',
            choices: ['unlicense','mit','apache-2.0','mpl-2.0','agpl-3.0'],
        },
    ])
    .then((response) =>
    {
        const readmeTemplate=
`The following readme was generated using index.js and an execution of a node Terminal.

 ${response.license}
        
# ${response.title}
        
## Description  
    ${response.description}
                
## Table of Contents
   -Installation-guide [link](#Installation guide)
    -usage [link](#Usage)
    -credits [link](#Credits)
    -license [link](#License)
    -Questions [link](#Questions)
        
 ## Installation guide
    ${response.installation}
        
## Usage    
    ${response.usage}
    
## Credits
   ${response.credits}
        
## License
    This project is licensed with ${response.license}. To learn about further accessbility options, visit https://choosealicense.com/licenses/${response.license}/
        
## Questions
    for Further questions contact ${response.name} at the following site ${response.link}
         
        `;
    
        fs.writeFile('README.md',readmeTemplate,(err) =>
        err ? console.error(err) : console.log('The file has been constructed')
        );
    }
    
);

// The following is are default responses to test the function of the project.


// (insert License) - mit 

// # (Insert Project Title) - TerminalWebsite

// ## Description  
//     (Insert description) - blah blah blah, Yadda yadda yadda
        
// ## Table of Contents
//     -installation guide
//     -usage
//     -credits
//     -license

// ## Installation guide
//     (Insert Installation guide) -
//     The creation of this file required the installation of the following packages: colors and inquirer.
//     in order to utilize the packages to install enter the following commands with a terminal:
//     npm init -y
//     npm install inquirer@8.2.4
//     npm install colors

// ## Usage    
//     (Insert Usage Information) -
//     This repository is meant to demonstarte the ability of using a terminal. After installation open a terminal and enter the following command.
//     node index.js
//     The Terminal will then ask for informtation that will alter the information below within the next section.

// ## Credits
//     (Insert Credits) -
//     This Readme file was created by Jemeric Thomas.
//     project uses inquirer, colors, and node as a terminal.

// ## License
//     This project is licensed with (insert license). To learn about further accessbility options, visit https://choosealicense.com/licenses/(insert license)/

// ## Questions
//     for Further questions contact (Insert Name) at the following email (Insert EmailLink)

//     `;


// fs.writeFile('README.md',readmeTemplate,(err) =>
// err ? console.error(err) : console.log('')
// );