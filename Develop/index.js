// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = 
[
    {name:"title",
    type:"input",
    message:"What is the title of the app?",
    },
    {name:"description",
    type:"input",
    message:"Give a description of the application",
    },
    {name:"installation",
    type:"input",
    message:"Include installation instructions for application",
    },
    {name:"usage",
    type:"input",
    message:"Include usage instructions for the application",
    },
    {name:"credits",
    type:"input",
    message:"Please insert an contributers to your application",
    },
    {name:"license",
    type:"list",
    message:"Select the software license for this application",
    choices:["MIT", "Mozella", "Apache","None"]
},
    /// ad rest of questions here, refer to assignment README
];  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data)
        fs.writeFileSync("test-README.md",generateMarkdown(data))
    })

}

// Function call to initialize app
init();
