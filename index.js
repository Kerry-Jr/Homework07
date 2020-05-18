const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api");
const generate = require("./utils/generateMarkdown");
const apache = "Licensed under [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu = "Licensed under [GNUGPLv3](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit = "Licensed under [MIT](https://spdx.org/licenses/MIT.html).";
const isc = "Licensed under [ISC](https://opensource.org/licenses/ISC).";

const none = "No license";

let answers = [];

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short decription of the project."
    },
    {
        type: "input",
        name: "installation",
        message: "How do you istall this?"
    },
    {
        type: "input",
        name: "usage",
        message: "How will this project be used?"
    },
    {
        type: "list",
        name: "license",
        message: "Are there any licenses for this project?",
        choices: [
            "Apache License 2.0",
            "GNU",
            "MIT",
            "ISC",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Do you have any contributors for this project?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "Test",
        message: "How do you test the app?"
    }

]).then(async answers => {
    if (answers.license === 'Apache License 2.0') {
        answers.license = apache;
    } else if (answers.license === 'gnu') {
        answers.license = gnu;
    } else if (answers.license === 'MIT') {
        answers.license = mit;
    } else if (answers.license === 'ISC') {
        answers.license = isc;
    } else if (answers.license === 'None') {
        answers.license = none;
    } else {
        answers.license = "This isn't licensed";
    }

    const gitData = await api.getUser(answers.username);
    const rawData = {
        answers,
        gitData
    };    
    answers.gitLink = gitData.html_url;
    answers.image = gitData.avatar_url;
  
    const mdFile = generate(rawData);
  
    console.log(answers);
    console.log('goodbye');
    console.log(answers.username);

    fs.writeFile("README.md", mdFile, err => {
        if (err) {
            console.log(err);
            throw err
        }
    })
        console.log('success');
});