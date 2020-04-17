

function generateMarkdown(data) {
let stringMeUp = `
##Username
${data.username}
  
#Title
####${data.title}
#Table of contents:
##Description
1.)${data.description}
##Installation
2.)${data.installation}
3.)${data.usage}
4.)${data.contributors}
5.)${data.license}
6.)${data.email}

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)




 
  
data.gitData.avatar_url
  

  
 
  

  

`; return stringMeUp;
}

module.exports = generateMarkdown;
