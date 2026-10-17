# Flashcard App (Static Deck)

An interactive, responsive flashcard application built with pure HTML5, CSS3, and JavaScript. The app lets users study predefined topics with 3D flip card animations, progress tracking, and navigation controls.

---

## 🚀 Features

- **Static Deck of 10+ Flashcards**: Curated questions and answers focused on web development fundamentals.
- **3D Card Flip Animation**: Smooth 180-degree flip transitions using CSS transforms and perspective.
- **Next & Previous Navigation**: Step sequentially through the deck with boundary disabling.
- **Progress Indicator**: Visual progress bar and numeric counter showing the current position in the deck.
- **Accessibility & Keyboard Support**:
  - `Space` or `Enter` to flip.
  - `Left Arrow` / `Right Arrow` for navigation.
  - Fully responsive on mobile, tablet, and desktop screens.

---

## 🛠️ Approach

### 1. 3D Flip Mechanism (CSS)
- **Container (`.flashcard-scene`)**: Configured with `perspective: 1000px` to create depth for the 3D space.
- **Card Wrapper (`.flashcard`)**: Styled with `transform-style: preserve-3d` and a `transition` on the `transform` property.
- **Faces (`.flashcard-front` and `.flashcard-back`)**: Positioned absolutely with `backface-visibility: hidden`. The back face is pre-rotated with `transform: rotateY(180deg)`.
- When toggled, the `.is-flipped` class applies `transform: rotateY(180deg)` to the entire wrapper, revealing the back side seamlessly.

### 2. State Tracking (JavaScript)
- An array of objects `flashcards` holds the static question and answer data.
- The `currentIndex` integer variable tracks the active card index.
- A central `renderCard()` function updates card contents, modifies the progress bar width, updates counter text, and enables/disables the `Previous` and `Next` buttons.
- On card transitions, `.is-flipped` is automatically removed so subsequent cards always start on the question face.

---

## 📦 Project Structure

```text
flashcard-app/
├── index.html       # Semantic HTML layout and 3D card structure
├── style.css        # 3D transforms, styling, and responsive layout
├── script.js        # State tracking, navigation, and event handlers
└── README.md        # Documentation and approach summary