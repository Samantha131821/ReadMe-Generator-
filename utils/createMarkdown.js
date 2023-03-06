function licenseDisplay(license) {
    if (!`${license}`) {
        return " ";
    } else {
        return `${license}`
    }
}

function createMarkdown(data) {
    return '#${data.title}


## Table of Contents:
*[Description](#description)
