function mainHtml() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generated Cards</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
<!-- // need to correct this with the correct path -->
    <link rel="stylesheet" href="./assets/css/style.css" />
</head>
<body>
  <header>
    <nav class="navbar" id="navbar">
        <span class="navbar" id="navbar-text">Meet the team!</span>
    </nav>
</header>

  <div class="container">
    <div class="row justify-content-center">
        ${employees}
    </div>
</div>

    <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <!-- //need to update this with the correct src -->
  <script src="./assets/js/script.js"></script>
</body>
</html>`;
}

function managerCard(manager) {
  return ` <div class="card" id="manager-card">
  
  <div class="card-body">
  <div class="card-header">Manager</div>
  <h4 class="card-title">${manager.name}</h4>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${manager.id}</li>
      <li class="list-group-item"><a href="mailto:${manager.mail}">Email: ${manager.mail}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
</div>`;
}


function engineerCard(engineer) {
  return ` <div class="card" id="engineer-card">
  
  <div class="card-body">
  <div class="card-header">Engineer</div>
  <h4 class="card-title">${engineer.name}</h4>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${engineer.id}</li>
      <li class="list-group-item"><a href="mailto:${engineer.email}">Email: ${engineer.id}</a></li>
      <li class="list-group-item"><a href="https://github.com/${engineer.github}"> ${engineer.github}</a></li>
    </ul>
  </div>
</div>`;
}


function internCard(intern) {
  return ` <div class="card" id="intern-card">
  
  <div class="card-body">
  <div class="card-header">Intern</div>
  <h4 class="card-title">${intern.name}</h4>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${intern.id}</li>
      <li class="list-group-item"><a href="mailto:${intern.email}">Email: ${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>
</div>`;
}



module.exports = teamCardHTML;