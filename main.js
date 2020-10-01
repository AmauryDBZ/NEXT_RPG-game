document.addEventListener("keydown", keyDownEvent);

let game = new Game;
game.startGame();

function keyDownEvent(e) {
  switch (e.keyCode) {
    case 32:
      game.watchStats();
    break;
  }
}
