// button
const enterBtn = document.getElementById("enterBtn");

// section you want to scroll to
const quoteSection = document.querySelector(".quotes");

// when button is clicked
enterBtn.addEventListener("click", function () {
  quoteSection.scrollIntoView({
    behavior: "smooth"
  });
});
