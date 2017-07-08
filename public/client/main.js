//wait for React components to load to the page
$("#gameStart").click(function() {
  const reactDiv = document.getElementById('react');
  const tetris = new Tetris(reactDiv);
//  const localTetris = tetrisManager.createPlayer();

  // const connectionManager = new ConnectionManager();
  // connectionManager.connect("ws://localhost:8000");
  const keyListener = (event) => {
      event.preventDefault();
      [
          [37, 39, 32, 40]
      ].forEach((key, index) => {
          const player = tetris.player;
          if (event.type === 'keydown') {
              if (event.keyCode === key[0]) {
                  player.move(-1);
              } else if (event.keyCode === key[1]) {
                  player.move(1);
              } else if (event.keyCode === key[2]) {
                  player.rotate(1);
              }
            }
              if (event.keyCode === key[3]) {
              if (event.type === 'keydown') {
                  if (player.dropInterval !== player.DROP_FAST) {
                      player.drop();
                      player.dropInterval = player.DROP_FAST;
                  }
              } else {
                  player.dropInterval = player.DROP_SLOW;
              }
          }
      });
  };

  document.addEventListener('keydown', keyListener);
  document.addEventListener('keyup', keyListener);
});
