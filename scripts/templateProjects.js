const checkedTypes = [];

const projectTypes = document.querySelectorAll(
  'input[type="checkbox"][name="projectCheckbox"]'
);
projectTypes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkedTypes.push(this.value);
    } else {
      const index = checkedTypes.indexOf(this.value);
      if (index !== -1) {
        checkedTypes.splice(index, 1);
      }
    }
    //console.log(checkedTypes);
  });
});

//store img
const projectThumbnail = document.getElementById("projectThumbnail");

projectThumbnail.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const thumbnailPreview = document.getElementById("thumbnailPreview");

  const reader = new FileReader();
  reader.onload = function (e) {
    thumbnailPreview.src = e.target.result;

    const imageData = e.target.result;
    const imageName = file.name;
    localStorage.setItem = file.name;
  };

  reader.readAsDataURL(file);
});

const form = document.getElementById("projectForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const projectTitle = document.getElementById("projectTitle").value;
  const projectDescription =
    document.getElementById("projectDescription").value;
  const projectLink = document.getElementById("projectLink").value;

  console.log(checkedTypes);
  console.log(projectTitle);
  console.log(projectDescription);
  console.log(projectLink);

  //create new page?
  const newPageContent = `
    <html>
    <head>
      <title>${projectTitle} ${checkedTypes} Project </title>
      <!-- Add your stylesheets, meta tags, etc. here -->
      <meta charset="UTF-8" />
      <!-- <link rel="stylesheet" href="../styles/createProject.css" />-->
    </head>
    <body>
      <h1>${projectTitle}</h1>
      <h2>${checkedTypes} Project</h2>
      <p>${projectDescription}</p>
      <img src="${projectThumbnail}" alt="Project Thumbnail">
      <br>
      <a href="${projectLink}" target="_blank">Link to Project</a>
      <!-- Add more content as needed -->
    </body>
    </html>
  `;

  // const newWindow = window.open();
  // newWindow.document.write(newPageContent);
});
