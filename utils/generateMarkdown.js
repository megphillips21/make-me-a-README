// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
 
  return `
  # ${data.Title}
  # ${data.Creator}
  ## Table of Contents
> - [Description](#Description)
> - [Contributors](#Contributors)
> - [Usage](#Usage)
> - [Installation](#Installation)
> - [Test](#Testing)
> - [License](#License)
> - [Deployment](#Deployment)
> - [Questions](#Questions)

  ## Description
  >${data.Description}
  ## Contributors
  >${data.Contribute}
  ## Usage 
  >${data.Usage}
  ## Installation
  >${data.Install}
  ## Testing
  >${data.Test}
  ## License
  >${data.License}
  ## Deployment
 
  ### Questions
  >If you have any further questions about the application:
  >Email: ${data.Email}
  >
  >GitHub: www.github.com/${data.Gituser}
  
`;
}

module.exports = generateMarkdown;
