const quotes = [
  {
    text: "you are not behind. you are just becoming.",
    author: "your future self"
  },
  {
    text: "it’s okay to rest. healing is also productivity.",
    author: "your therapist friend"
  },
  {
    text: "you don’t need to be perfect to be powerful.",
    author: "me, reminding you again"
  },
  {
    text: "soft heart. strong mind. unstoppable soul.",
    author: "still you"
  },
  {
    text: "you are allowed to grow at your own pace.",
    author: "bestie energy"
  }
  const enterBtn = document.getElementById("enterBtn");
const quoteSection = document.querySelector(".quotes");

enterBtn.addEventListener("click", () => {
  quoteSection.scrollIntoView({ behavior: "smooth" });
});

];

let index = 0;

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

function showQuote() {
  quoteText.textContent = `"${quotes[index].text}"`;
  quoteAuthor.textContent = `— ${quotes[index].author}`;
  index = (index + 1) % quotes.length;
}

showQuote();
setInterval(showQuote, 5000);
