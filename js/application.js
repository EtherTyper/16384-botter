// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  window.game = new GameManager(8, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

function bot(i) {
  window.setTimeout(function () {
    window.game.move(i);
    bot((i+1)%4);
  }, 500);
}

bot(0);
