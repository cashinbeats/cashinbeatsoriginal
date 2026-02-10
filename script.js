const quotes = [
  "You are not late. You are loading.",
  "Dreams don’t need permission.",
  "Soft things can be powerful.",
  "You’re becoming someone you once needed.",
  "Create even when it feels messy.",
  "You don’t need clarity to begin."
];

let index = 0;
const quoteText = document.getElementById("quote-text");

function changeQuote() {
  quoteText.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = quotes[index];
    quoteText.style.opacity = 1;
    index = (index + 1) % quotes.length;
  }, 400);
}

changeQuote();
setInterval(changeQuote, 5 * 60 * 1000); // every 5 minutes
