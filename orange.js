let currentPage = 1;

function goToPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));

  const targetPage = document.getElementById(`page${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add("active");
    currentPage = pageNumber;
  }

  if (pageNumber === 5) {
    setInitialNoButtonPosition();
  }
}

// QUIZ
const questions = [
  {
    question: "Who makes my day a little brighter?",
    options: ["You", "Ikaw pa rin talga", "YOUUUU"]
  },
  {
    question: "Who has been on my mind a lot lately?",
    options: ["You", "Ikaw pa rin talga", "YOUUUU"]
  },
  {
    question: "Who do i really want to be honest with today?",
    options: ["You", "Ikaw pa rin talga", "YOUUUU"]
  }
];

let currentQuestion = 0;

function nextQuestion() {
  currentQuestion++;

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const quizBox = document.getElementById("quizBox");
  const quizResult = document.getElementById("quizResult");

  if (currentQuestion < questions.length) {
    questionEl.textContent = questions[currentQuestion].question;

    optionsEl.innerHTML = "";
    questions[currentQuestion].options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = nextQuestion;
      optionsEl.appendChild(btn);
    });
  } else {
    quizBox.classList.add("hidden");
    quizResult.classList.remove("hidden");
  }
}

// LOVE LETTER
function openLetter() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");

  envelope.classList.add("hidden");
  letter.classList.remove("hidden");
}

// MOVING NO BUTTON
function setInitialNoButtonPosition() {
  const noBtn = document.getElementById("noBtn");
  const container = document.querySelector(".final-buttons");

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  noBtn.style.left = `${containerWidth / 2 + 60}px`;
  noBtn.style.top = `${containerHeight / 2}px`;
}

document.addEventListener("DOMContentLoaded", () => {
  const noButton = document.getElementById("noBtn");

  noButton.addEventListener("mouseenter", moveNoButton);
  noButton.addEventListener("click", moveNoButton);
});

function moveNoButton() {
  const noBtn = document.getElementById("noBtn");
  const container = document.querySelector(".final-buttons");

  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = container.clientWidth - buttonRect.width;
  const maxY = container.clientHeight - buttonRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

function sayYes() {
  document.getElementById("finalMessage").classList.remove("hidden");
  createHearts();
}

function createHearts() {
  const heartsContainer = document.getElementById("heartsContainer");

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "⸜(｡˃ ᵕ ˂ )⸝♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 16) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}