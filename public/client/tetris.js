class Tetris
{
  constructor(game)
  {
    this.element = game;
    this.canvas = this.element.querySelector("canvas");
    this.context = this.canvas.getContext("2d");
    this.context.scale(20, 20);
    this.arena = new Arena(12, 20);
    //console.table(arena);
    this.player = new Player(this);

    this.colors = [
      null,
      'red',
      'blue',
      'yellow',
      'green',
      'orange',
      'purple',
      'white'
    ]

    let lastTime = 0;
    const update = (time = 0) => {
        const changeTime = time - lastTime;
        lastTime = time;
        this.player.update(changeTime);
        this.draw();
        requestAnimationFrame(update);
    }
      update();
  }

  draw() {
    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawMatrix(this.arena.matrix, {x:0, y:0});
    this.drawMatrix(this.player.matrix, this.player.pos);
  }

  drawMatrix(matrix, offset) {
    matrix.forEach((row,y) => {
      row.forEach((value, x) => {
          if (value !== 0) {
              this.context.fillStyle = this.colors[value];
              this.context.fillRect(x + offset.x,
                               y + offset.y,
                                1, 1);
          }
      });
    });
  }

  updateScore(score) {
    this.element.querySelector('#score').innerText = score;
    //this score is a parameter that can be passed from a react component
  }
}
