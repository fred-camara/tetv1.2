//class for a piece

class Player
{
  constructor(tetris)
  {
    this.DROP_SLOW = 1000;
    this.DROP_FAST = 100;
    this.tetris = tetris;
    this.arena = tetris.arena;
    this.dropCounter = 0;
    this.dropInterval = this.DROP_SLOW;
    this.pos = {x: 0, y: 0};
    this.matrix = null;
    this.score = 0;

    this.reset();
  }

  createPiece(type)
  {
      if (type === "T") {
          return [
              [0, 0, 0],
              [1, 1, 1],
              [0, 1, 0],
          ];
      } else if (type === 'O') {
        return [
            [2,2],
            [2,2]
        ]
      } else if (type === 'L') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3]
        ]
    }  else if (type === 'J') {
        return [
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0]
        ]
    } else if (type === 'I') {
        return [
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0]
        ]
    }  else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0]
        ]
    } else if (type === 'Z') {
        return [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0],
        ]
    }
  }
  drop() {
    this.pos.y++;
    if (this.arena.collide(this)) {
      this.pos.y--;
      this.arena.merge(this);
      this.reset();
      this.score += this.arena.sweep(this);
      this.tetris.updateScore(this.score);
    }
    this.dropCounter = 0;
  }

  move(dir) {
    this.pos.x += dir;
    if (this.arena.collide(this)) {
      this.pos.x -= dir;
    }
  }

  reset() {
      const pieces = 'ILJOTSZ';
      // | 0 is a flooring method
      this.matrix = this.createPiece(pieces[pieces.length * Math.random() | 0]);
      this.pos.y = 0;
      this.pos.x = (this.arena.matrix[0].length / 2 | 0) -
                    (this.matrix[0].length / 2 | 0);

      if (this.arena.collide(this)) {
        this.arena.clear();
        this.storeScore();
        alert("Game Over " + document.getElementById("userName").innerText + "!");
        location.reload();
        // this.score = 0;
        // this.tetris.updateScore(this.tetris.score);
      }
  };

  rotate(dir) {
    const pos = this.pos.x;
    let offset = 1;
    this.rotateMatrix(this.matrix, dir);
    //check collision in the while loop
    while (this.arena.collide(this)) {
      this.pos.x += offset;
      //this is complicated --
      offset = -(offset + (offset > 0 ? 1 : -1));
      if ( offset > this.matrix[0].length) {
        //move it back in the other direction
        this.rotateMatrix(this.matrix, -dir);
        this.pos.x = pos;
        return;
      }
    };
  }

  rotateMatrix(matrix, dir) {
    //transpose the game
    for (let y = 0; y < matrix.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [
          matrix[x][y],
          matrix[y][x],
        ] = [
          matrix[y][x],
          matrix[x][y],
        ];
      }
    }
    //revese each matrix item
    if (dir > 0) {
      matrix.forEach(row => row.reverse());
    } else {
      matrix.reverse();
    }
  }

  storeScore() {
    var name = document.getElementById("userName").innerText;
    var score = document.getElementById("score").innerText;
    $.ajax({
      url: '/api/leaderboard',
      type: 'POST',
      async: false,
      data: {
        name: name,
        score: score
      },
      success: function(response) {
        console.log(response);
      }
    });
  }

  update(changeTime) {
      this.dropCounter += changeTime;
      if (this.dropCounter > this.dropInterval) {
        this.drop();
      }
  }
}
