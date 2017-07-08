// class TetrisManager
// {
//   constructor(reactDiv)
//   {
//     this.reactDiv = reactDiv;
//     this.gameDiv = this.reactDiv.querySelector('parent');
//     console.log(this.gameDiv);
//     this.instances = new Set;
//   }
//
//   createPlayer()
//   {
//     const game = this.gameDiv;
//     const tetris = new Tetris(game);
//     this.instances.add(tetris);
//     return tetris;
//   }
//   removePlayer(tetris)
//   {
//     this.instances.delete(tetris);
//     this.document.body.removeChild(tetris);
//   }
// }
