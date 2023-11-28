const tags = document.querySelectorAll(".tag");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("selected");
  });
});
