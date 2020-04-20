function generateMarkdown(data) {
    let stringMeUp = `
![Github avatar](${data.answers.image})

## Username
## ${data.answers.username}
# Title
#### ${data.answers.title}
# Table of contents:
1. Description
1. Installation
1. Usage
1. Test
1. Contributors
##### Description
1.)${data.answers.description}
##### Installation
2.)${data.answers.installation}
##### Usage
3.)${data.answers.usage}
##### Test
4.)${data.answers.Test}
##### Contributors
5.)${data.answers.contributors}
##### Licenses
6.)${data.answers.license}
##### Email
7.)[My Email. Please click me to send a message](mailto:${data.answers.email})

![Image of Kerry's App](./assets/image/readmeapp.gif)


[Github repo link](${data.answers.gitLink} "Your github repo")
  

  
 
  

  

`; return stringMeUp;
}

module.exports = generateMarkdown;
