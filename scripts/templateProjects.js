const form = document.getElementById("projectForm");
const projectTypes = document.querySelectorAll('input[type="checkbox"][name="projectCheckbox"]');
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectThumbnail = document.getElementById("projectThumbnail");
const projectLink = document.getElementById("projectLink");

form.addEventListener("submit", function (event) {
  event.preventDefault();

    const type =projectTypes.value;
    const title = projectTitle.value;
    const description = projectDescription.value;
    const thumbnail = projectThumbnail.value;
    const link = projectLink.value;
    console.log(projectTypes);
});
