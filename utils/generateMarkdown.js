function generateMarkdown(data) {
    let stringMeUp = `

## ${data.answers.username}
# <span style="color: #459ff3;">**Project Name**</span>
# README.md Generator

# <span style="color: #459ff3;">**Table of Contents**</span>
#### ${data.answers.title}

- Project Name
- Installation
- Screenshot
- Technologies Used
​- Project Description
- Difficulties Faced
- Future Development
- License
 
# <span style="color: #459ff3;">**Contributors**</span>
${data.answers.contributors}

# <span style="color: #459ff3;">**Installation**</span>
${data.answers.installation}


# <span style="color: #459ff3;">**Screenshot** </span>
![Image of Kerry's App](./assets/image/readmeapp.gif)


# <span style="color: #459ff3;">**Technologies Used**</span>

-Node.js
-Javascript

# <span style="color: #459ff3;">**Usage**</span>

${data.answers.usage}

# <span style="color: #459ff3;">**Project Description**</span>
${data.answers.description}
# <span style="color: #459ff3;">**Difficulties Faced**</span>

-Node.js 

# <span style="color: #459ff3;">**TEST**</span>

${data.answers.Test}

# <span style="color: #459ff3;">**License**</span>
${data.answers.license}

![Github avatar](${data.answers.image})

[My Email. Please click me to send a message](mailto:${data.answers.email})

[Github repo link](${data.answers.gitLink} "Your github repo")

`; return stringMeUp;
}

module.exports = generateMarkdown;




// ![Github avatar](${data.answers.image})

// ## Username
// ## ${data.answers.username}
// # Title
// #### ${data.answers.title}
// # Table of contents:
// 1. Description
// 1. Installation
// 1. Usage
// 1. Test
// 1. Contributors
// ##### Description
// 1.)${data.answers.description}
// ##### Installation
// 2.)${data.answers.installation}
// ##### Usage
// 3.)${data.answers.usage}
// ##### Test
// 4.)${data.answers.Test}
// ##### Contributors
// 5.)${data.answers.contributors}
// ##### Licenses
// 6.)${data.answers.license}
// ##### Email
// 7.)[My Email. Please click me to send a message](mailto:${data.answers.email})

// ![Image of Kerry's App](./assets/image/readmeapp.gif)


// [Github repo link](${data.answers.gitLink} "Your github repo")