# Tic Tac Toe ∞

A twist on classic Tic Tac Toe, built with plain HTML, CSS and JavaScript. Each player only gets **3 pieces**, so once they are all placed, the game keeps going by **dragging pieces** around the board until someone makes three in a row.

**Play it live:** https://aman2024nn-code.github.io/tic-tac-toe-project/

## How to play

The game has two phases.

### Phase 1: Placing pieces

1. Players take turns, starting with **X**.
2. Click an empty cell to place your piece.
3. Each player can place only **3 pieces**.

### Phase 2: Moving pieces

Once you have 3 pieces on the board, you can no longer place new ones. On your turn, **drag one of your pieces** to an empty cell.

A move is allowed if the target cell is:

- directly **above, below, left or right** of the piece (no wrapping across rows), or
- the **center cell**, if it is empty (any piece can move into the center), or
- **anywhere**, if the piece you are moving is currently **in the center**.

Invalid moves are ignored, so you can try again.

### Winning

Get **3 of your pieces in a row** (horizontal, vertical or diagonal) to win. A result message appears when the game ends. Press **Reset** to start a new game.

## Features

- Two-player local game
- Turn indicator showing whose move it is
- Drag and drop movement after all pieces are placed
- Color-coded pieces (X in blue, O in red)
- Win message and reset button

## Project structure

```
tic-tac-toe-project/
├── index.html   # Page layout and board
├── tic.css      # Styling
└── tic.js       # Game logic (turns, win check, drag and drop)
```

## Run locally

No build step or dependencies are needed.

```bash
git clone https://github.com/aman2024nn-code/tic-tac-toe-project.git
cd tic-tac-toe-project
```

Then open `index.html` in your browser. Or, if you use VS Code, right-click it and choose **Open with Live Server**.

## Deployment

The site is hosted on GitHub Pages, served straight from the `main` branch (**Settings → Pages → Deploy from a branch → `main` / root**).

## Built with

- HTML5
- CSS3
- Vanilla JavaScript (DOM events and the HTML5 Drag and Drop API)

## Author

[aman2024nn-code](https://github.com/aman2024nn-code)
