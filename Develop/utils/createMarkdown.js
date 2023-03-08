function licenseDisplay(license) {
    if (!`${license}`) {
        return " ";
    } else {
        return `${license}`
    }
}

function licenseBadge(license) {
    if (!license) {
        return " ";
    } else {
        return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](${licenseLink(license)})`
    }
}

function licenseLink(license) {
     if (license === "GNU_AGPLv3") {
        return `https://www.gnu.org/licenses/agpl-3.0`;
    }
    if (license === "GNU_GPLv3") {
        return`https://www.gnu.org/licenses/gpl-3.0`;
    }
    if (license === "GNU_LGPLv3") {
        return`https://www.gnu.org/licenses/lgpl-3.0`;
    }
    if (license === "Mozilla_Public_License_2.0") {
        return`https://opensource.org/licenses/MPL-2.0`;
    }
    if (license === "Apache_License_2.0") {
        return`https://opensource.org/licenses/Apache-2.0`;
    }
    if (license === "MIT") {
        return`https://opensource.org/licenses/MIT`;
    }
    if (license === "Boost_1.0") {
        return `https://www.boost.org/LICENSE_1_0.txt`;
    }

}

function createMarkdown(data) {
    return `# ${data.title}
${licenseBadge(data.license)}


## Table of Contents:

* [Description](#description)
* [License](#license)
* [Usage](#usage)  
* [Installation](#installation)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)


## Description
${data.description} 
## Usage
${data.usage}
## License
${licenseDisplay(data.license)}
## Installation
${data.installation}
## Contribution
${data.contribution}
## Tests
${data.test}
## Questions
${data.questions}
My GitHub: https://github.com/${data.github}  
For additional questions, please reach out to me at my email: ${data.email} 
`;
}

module.exports = createMarkdown;