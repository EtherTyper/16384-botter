// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var game = new GameManager(8, KeyboardInputManager, HTMLActuator, LocalScoreManager);
  
  for (var i=0;; i = (i + 1) % 4){
    window.setTimeout(function () {
      game.move(i);
    }, 500);
  }
});
