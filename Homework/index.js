const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser1 = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your manager\'s name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What\'s your manager\'s id?',
    },
   
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter your office Number',
    },

  
  ]);
};

const promptUser2 = () => {
  inquirer.prompt([
      { 
        type: 'list',
        name: 'employee',
        message: 'What role do you want to add?', 
        choices: ['Engineer', 'Intern', 'None'],
      },
      
    ])
    .then ((answers) => {
        if (answers.employee === 'Engineer') {
            promptEngineer()
            .then((answers) => {
                const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
                teamArray.push(engineer)
                return promptUser2()

            })
        
        } else if (answers.employee === 'Intern') {
            promptIntern()
            .then((answers) => {
                const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
                teamArray.push(intern)
                return promptUser2();
        })
    } else {
        console.log(teamArray)
    }
});
}

const promptEngineer = () => {
    return inquirer.prompt([
      { 
        type: 'input',
        name: 'name',
        message: 'What is engineer\'s name?', 
      
      },
      {
        type: 'input',
        name: 'id',
        message: 'What\'s engineer\'s id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
      },
      
    ]);
};

const promptIntern = () => {
    return inquirer.prompt([
      { 
        type: 'input',
        name: 'name',
        message: 'What is intern\'s name?', 
      
      },
      {
        type: 'input',
        name: 'id',
        message: 'What\'s intern\'s id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter your school name',
      },
      
    ]);
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>My Team</title>
</head>
<body>
  <header>
  <h1>My Team</h1>
  </header>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${answers.manager.name}</h1>
    <p class="occupation">Manager</p>
    <ul class="list-group">
      <li class="list-group-item">ID: ${answer.Manager.id}</li>
      <li class="list-group-item">Email: ${answers.manager.email}</li>
      <li class="list-group-item">Email: ${answers.manager.officeNumber}</li>
    </ul>
  </div>

  <div class="container">
    <h1 class="display-4">${answers.engineer.name}</h1>
    <p class="occupation">Engineer</p>
    <ul class="list-group">
      <li class="list-group-item">ID: ${answer.engineer.id}</li>
      <li class="list-group-item">Email: ${answers.engineer.email}</li>
      <li class="list-group-item">Email: ${answers.manager.github}</li>
    </ul>
  </div>

  <div class="container">
    <h1 class="display-4">${answers.intern.name}</h1>
    <p class="occupation">Engineer</p>
    <ul class="list-group">
      <li class="list-group-item">ID: ${answer.intern.id}</li>
      <li class="list-group-item">Email: ${answers.intern.email}</li>
      <li class="list-group-item">Email: ${answers.intern.school}</li>
    </ul>
  </div>

</div>
</body>
</html>`;

// Bonus using writeFileAsync as a promise
const teamArray = [];

const init = () => {
  promptUser1()
    .then((answers) => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
        teamArray.push(manager)
    
    promptUser2()
    

    

    })
 


};

init();
