const projectTypes = document.querySelectorAll(
  'input[type="checkbox"][name="projectCheckbox"]'
);

projectTypes.forEach((projectType) => {
  projectType.addEventListener("change", function () {
    projectTypes.forEach((pt) => {
      if (pt !== this) {
        pt.checked = false;
      }
    });
  });
});

const form = document.getElementById("projectForm");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectThumbnail = document.getElementById("projectThumbnail");
const projectLink = document.getElementById("projectLink");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    let type = "";
    projectTypes.forEach((pt) => {
      if (pt.checked) {
        type = pt.value;
      }
    });

    const title = projectTitle.value;
    const description = projectDescription.value;
    const thumbnail = projectThumbnail.value;
    const link = projectLink.value;

    const generatedType = document.getElementById("generatedType");
    const generatedTitle = document.getElementById("generatedTitle");
    const generatedDescription = document.getElementById(
      "generatedDescription"
    );
    const generatedThumbnail = document.getElementById("generatedThumbnail");
    const generatedLink = document.getElementById("generatedLink");

    generatedType.textContent = type;
    generatedTitle.textContent = title;
    generatedDescription.textContent = description;
    generatedThumbnail.textContent = thumbnail;
    generatedLink.textContent = link;
  } else {
    // If the form is invalid, display a message or handle it accordingly
    alert("Please fill in all fields.");
  }
});
