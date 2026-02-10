const board = document.getElementById("board");
const imgInput = document.getElementById("imgInput");

// Quotes (personalised)
const quotes = [
  "you’re not late. you’re loading.",
  "small steps still change the timeline.",
  "this version of you is trying her best.",
  "romanticise becoming better.",
  "you are allowed to want more."
];

let quoteIndex = 0;
const quoteText = document.getElementById("quote-text");
quoteText.innerText = quotes[0];

// rotate quote every 5 minutes
setInterval(() => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteText.innerText = quotes[quoteIndex];
}, 300000);

// Add image
imgInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const div = document.createElement("div");
    div.className = "item";
    div.style.top = "50px";
    div.style.left = "50px";

    const img = document.createElement("img");
    img.src = reader.result;

    div.appendChild(img);
    makeDraggable(div);
    board.appendChild(div);
  };
  reader.readAsDataURL(file);
});

// Add text
function addText() {
  const text = prompt("write whatever you want 🌷");
  if (!text) return;

  const div = document.createElement("div");
  div.className = "item";
  div.innerText = text;
  div.style.top = "80px";
  div.style.left = "80px";

  makeDraggable(div);
  board.appendChild(div);
}

// Drag logic
function makeDraggable(el) {
  let offsetX, offsetY;

  el.onmousedown = (e) => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;

    document.onmousemove = (e) => {
      el.style.left = e.pageX - board.offsetLeft - offsetX + "px";
      el.style.top = e.pageY - board.offsetTop - offsetY + "px";
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  };
}
