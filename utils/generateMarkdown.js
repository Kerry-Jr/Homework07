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