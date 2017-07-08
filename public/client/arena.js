class Arena
{
  //the constructor replaced the createMatrix function
  constructor(w,h)
  {
      const matrix = [];
      while (h--)  {
        matrix.push(new Array(w).fill(0));
      }
      //instead of return matrix
      this.matrix = matrix;
  }

  //create matrix for the piece
  collide(player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
        //make sure the arena row exists
        if (m[y][x] !== 0 &&
            (this.matrix[y + o.y] &&
            this.matrix[y+ o.y][x + o.x]) !== 0) {
              return true;
            }
        }
    }
    return false;
  }
  clear()
  {
    this.matrix.forEach(row => row.fill(0));
  }
  //detects when a piece falls
  merge(player) {
    player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.matrix[y + player.pos.y][x + player.pos.x] = value;
        }
      });
    });
  }
  sweep()
  {
    let rowCount = 1;
    let score = 0;
    outer:  for (let y = this.matrix.length - 1; y > 0; --y) {
        for (let x = 0; x < this.matrix[y].length; ++x) {
          if (this.matrix[y][x] === 0) {
            continue outer;
          }
        }
        //this returns the new row
        //takes arena out of the bottom, refills with all 0 values,
        //and replaces it at the top using shift
        const row = this.matrix.splice(y, 1)[0].fill(0);
        this.matrix.unshift(row);
        ++y;
        score += rowCount * 10;
        rowCount*=2;
      }
      return score;
    }
}
