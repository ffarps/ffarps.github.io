const emailLink = document.getElementById("emailLink");
const copyMessage = document.getElementById("copyMessage");
const numberLink = document.getElementById("numberLink");
const copyMessage2 = document.getElementById("copyMessage2");

emailLink.addEventListener("click", function (event) {
  event.preventDefault();

  const email = this.getAttribute("data-email");

  // Create a temporary element (textarea) to copy the email address
  const tempElement = document.createElement("textarea");
  tempElement.value = email;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);

  copyMessage.style.display = "block";

  // Optional: You can show an alert message here if needed
  // alert('Email copied: ' + email);
  // Hide message after 2 seconds (adjust duration as needed)
  setTimeout(function () {
    copyMessage.style.display = "none";
  }, 2000);
});

numberLink.addEventListener("click", function (event) {
  event.preventDefault();

  const number = this.getAttribute("data-number");

  // Create a temporary element (textarea) to copy the email address
  const tempElement = document.createElement("textarea");
  tempElement.value = number;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);

  copyMessage2.style.display = "block";

  setTimeout(function () {
    copyMessage2.style.display = "none";
  }, 2000);
});
