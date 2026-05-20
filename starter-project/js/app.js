function shake() {
  alert("hi");
}

function shake() {
  ask_question();
  reveal_fortune();
}

function ask_question() {
  // empty for now
}

  function reveal_fortune() {
     console.log("revealing!")
  document.getElementById("fortune").textContent = "hi";
 
}

function get_fortunes() {
  return [
    "It is certain",
    "Error my brain is fried",
    "uh this probably wrong...",
    "Most likely",
    "I could predict it but im too lazy.",
    "just use ai bro",
    "According to my calculations no.",
    "Yes, just kidding",
    "nah ",

    ];
}

function reveal_fortune() {
  const fortunes = get_fortunes();
  const fortune = select_fortune(fortunes);
  document.getElementById("fortune").textContent = fortune;
}

function select_fortune(fortunes) {
  return fortunes[0];
}
function select_fortune(fortunes) {
  const i = Math.floor(Math.random() * fortunes.length);
  return fortunes[i];
}


function flip_coin() {
  return pick_random(["Heads", "Tails"]);
}

function roll_die() {
  return pick_random([1, 2, 3, 4, 5, 6]);
}

const ball = document.getElementById("ball");
const btn = document.getElementById("shake-btn");

btn.addEventListener("click", () => {
  ball.classList.add("shake");

  // remove class after animation so it can shake again
  setTimeout(() => {
    ball.classList.remove("shake");
  }, 500);
});
