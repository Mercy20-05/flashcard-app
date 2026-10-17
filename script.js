// 1. Static Deck Dataset (At least 10 cards)
const flashcards = [
  {
    question: "What CSS property gives depth to 3D-transformed elements?",
    answer: "The 'perspective' property (or perspective() inside transform)."
  },
  {
    question: "Which CSS property hides the backside of an element during a 3D flip?",
    answer: "'backface-visibility: hidden;'"
  },
  {
    question: "What must be set on the parent to keep children positioned in 3D space?",
    answer: "'transform-style: preserve-3d;'"
  },
  {
    question: "What JavaScript method adds one or more elements to the end of an array?",
    answer: "'Array.prototype.push()'"
  },
  {
    question: "What is the difference between 'let' and 'const' in JavaScript?",
    answer: "'let' allows reassignment, while 'const' prevents reassignment."
  },
  {
    question: "Which HTML5 tag is used to specify self-contained content, like cards or posts?",
    answer: "The '<article>' or '<section>' semantic tags."
  },
  {
    question: "What does CSS 'box-sizing: border-box' do?",
    answer: "It includes padding and border in an element's total width and height."
  },
  {
    question: "How do you listen to keyboard interactions for accessibility in JS?",
    answer: "Using element.addEventListener('keydown', callback) and checking event.key."
  },
  {
    question: "What is an event listener in JavaScript?",
    answer: "A function waiting for a specific event (e.g., 'click', 'keydown') to occur."
  },
  {
    question: "Which array method creates a new array with elements that pass a test condition?",
    answer: "'Array.prototype.filter()'"
  }
];

// 2. State Tracking
let currentIndex = 0;

// 3. DOM Elements
const flashcard = document.getElementById("flashcard");
const questionEl = document.getElementById("card-question");
const answerEl = document.getElementById("card-answer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const flipBtn = document.getElementById("flip-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

// 4. Update UI Function
function renderCard() {
  // Always unflip before showing new content
  flashcard.classList.remove("is-flipped");

  const current = flashcards[currentIndex];
  questionEl.textContent = current.question;
  answerEl.textContent = current.answer;

  // Update progress indicator
  const total = flashcards.length;
  const progressPercent = ((currentIndex + 1) / total) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressText.textContent = `Card ${currentIndex + 1} of ${total}`;

  // Update button states
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === total - 1;
}

// 5. Flip Logic
function toggleFlip() {
  flashcard.classList.toggle("is-flipped");
}

// 6. Navigation Handlers
function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    renderCard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
}

// 7. Event Listeners
flashcard.addEventListener("click", toggleFlip);
flipBtn.addEventListener("click", toggleFlip);
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

// Keyboard Accessibility (Enter or Space to flip, Left/Right arrows to navigate)
window.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter") {
    // Only flip if not clicking a button directly to prevent double triggers
    if (document.activeElement.tagName !== "BUTTON") {
      e.preventDefault();
      toggleFlip();
    }
  } else if (e.key === "ArrowRight") {
    nextCard();
  } else if (e.key === "ArrowLeft") {
    prevCard();
  }
});

// Initialize first card
renderCard();