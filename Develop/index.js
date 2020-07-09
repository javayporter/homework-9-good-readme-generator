const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);



function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "title",
        message: "Enter Title"
      },
      {
        type: "input",
        name: "description",
        message: "Enter Description"
      },
      {
        type: "input",
        name: "installation",
        message: "What steps are required for installation?"
      },
      {
        type: "input",
        name: "usage",
        message: "Enter Usage Instructions"
      },
      {
        type: "list",
        name: "license",
        message: "Select a license option",
        choices: ["Apache-2.0", "Boost 1.0", "BSD 3-Clause", "BSD 2-Clause", "N/A"]
      },
      {
        type: "input",
        name: "contributing",
        message: "Who contributed to the project?"
      },
      {
        type: "input",
        name: "tests",
        message: "Enter Tests"
      },
      {
        type: "input",
        name: "questions",
        message: "Enter questions"
      },
    ]);
  }

  function generateReadMe(answers) {
      return "### GitHub Username:" + "\n\n" + answers.username +
      "\n\n" +
      "### Title:" + "\n\n" + answers.title +
      "\n\n" +
      "### Description:" + "\n\n" + answers.description +
      "\n\n" +
      "### Installation:" + "\n\n" + answers.installation +
      "\n\n" +
      "### Usage:" + "\n\n" + answers.usage +
      "\n\n" +
      "### License:" + "\n\n" + answers.license +
      "\n\n" +
      "### Contributing:" + "\n\n" + answers.contributing +
      "\n\n" +
      "### Tests:" + "\n\n" + answers.tests +
      "\n\n" +
      "### Questions:" + "\n\n" + answers.questions +
      "\n\n"
      ;
    }
      
  promptUser()
  .then(function(answers) {
    const md = generateReadMe(answers);

    return writeFileAsync("README.md", md);
  })
  .then(function() {
    console.log("Successfully generated README.md");
  })
  .catch(function(err) {
    console.log(err);
  });