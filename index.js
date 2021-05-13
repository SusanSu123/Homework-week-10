const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

const teamArray = [];

function promptTeamManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your manager\'s name?',
            default: 'John Smith',
          },
          {
            type: 'input',
            name: 'id',
            message: 'What\'s your manager\'s id?',
            default: '01'
          },
         
          {
            type: 'input',
            name: 'email',
            message: 'What is your manager\'s email address?',
            default: 'johnsmith@123.com'
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your manager\'s office Number',
            default: '8888 8888',
          }
    ]).then(answers => {
        console.log(answers)
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(manager)
        createEmployee()
    })
}

function createEmployee(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee?',
            choices: ["Engineer", "Intern", "None"],
        }
          
    ]).then(answers => {
        console.log(answers);
        if(answers.employeeType  == "Engineer"){
            createEngineer();
        }
        else if(answers.employeeType == "Intern"){
            createIntern();
        }
        else{
            generateTeam();
        }
        // create manager
        //creatEmployee()
    })
}

function createEngineer(){
    inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: 'What is engineer\'s name?', 
            default: 'Sam Joe',
          
          },
          {
            type: 'input',
            name: 'id',
            message: 'What\'s engineer\'s id?',
            default: '02'
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            default: 'samjoe@123.com',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
            default: 'samjoe',
    
          },
          
    ])
    .then(answers => {
        console.log(answers);
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
        teamArray.push(engineer)
        createEmployee();
    })
}



function createIntern() {
    inquirer.prompt([
        { 
          type: 'input',
          name: 'name',
          message: 'What is intern\'s name?', 
          default: 'Ann Smith',
        
        },
        {
          type: 'input',
          name: 'id',
          message: 'What\'s intern\'s id?',
          default: '03',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
          default: 'annsmith@123.com',
        },
        {
          type: 'input',
          name: 'school',
          message: 'Enter your school name',
          default: 'MIT'
        },
        
      ])
      .then(answers => {
        console.log(answers);
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        teamArray.push(intern)
        createEmployee();
    })
  }




function generateTeam(){
    // createHTMLfilehereusing teamArry
   var managerHtml = generateManager(teamArray.filter( t=> t.getRole() === "Manager")[0]);
   //var aa = teamArray.filter( t=> t.getRole() === "Engineer");
  // console.log('engineers: ',aa)
   var engineerHtml = generateEngineers(teamArray.filter( t=> t.getRole() === "Engineer"));
   var internHtml = generateIntern(teamArray.filter( t=> t.getRole() === "Intern"));

  var html =  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>My Team</title>
</head>

<body>
  <header>
    <div class="col-12 text-center bg-danger mb-5 py-3 display-4 text-white">My Team</div>
  </header>

  <div class="row " id="cards">

  ${managerHtml}

  ${engineerHtml}

  ${internHtml}


</div>

</body>

</html>`


 fs.writeFile("./index.html", html, function(error){
   console.log('error',error)
 })

}


function generateManager(manager){
  //<i class="fas fa-mug-hot"></i> 
    return ` <div class="col-3">
    <div class="card mx-auto  mb-3" style="max-width: 18rem;">
      <h3 class="card-header bg-primary text-white">${manager.name}<br> <i class="fa fa-coffee"></i>Manager</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
        <li class="list-group-item">Email: ${manager.officeNumber}</li>
      </ul>
    </div> 
  </div>`

}

function generateEngineers(engineers){
//<i class="fas fa-glasses"></i>
     var engineerHtml = "";
    engineers.forEach(element => {
        engineerHtml += `  <div class="col-3">
        <div class="card mx-auto  mb-3" style="max-width: 18rem;">
         <h3 class="card-header bg-primary text-white">${element.name}<br><i class="fa fa-laptop"></i>Engineer</h3>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${element.id}</li>
            <li class="list-group-item">Email: ${element.email}</li>
            <li class="list-group-item">Email: ${element.github}</li>
         </ul>
        </div>
      </div>`
    });
    return engineerHtml;
    
}

function generateIntern(interns){
//<i class="fas fa-user-graduate"></i>
    var internHtml = "";
   interns.forEach(element => {
       internHtml += ` <div class="col-3">
       <div class="card mx-auto  mb-3" style="max-width: 18rem;">
        <h3 class="card-header bg-primary text-white">${element.name}<br><i class="fa fa-graduation-cap"></i>Intern</h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${element.id}</li>
            <li class="list-group-item">Email: ${element.email}</li>
            <li class="list-group-item">Email: ${element.school}</li>
        </ul>
       </div>
     </div>`
   });
   return internHtml;
   
}


promptTeamManager();

