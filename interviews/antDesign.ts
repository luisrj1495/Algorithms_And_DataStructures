type DirectionsType = "NORTH" | "SOUTH" | "EAST" | "WEST";
type DirectionMapType = { [D in DirectionsType]?: number };

class Ant {
  row = 0;
  column = 0;
  private movesHistory: string[] = [];
  direction: number = 0;
  prettyDirection: DirectionsType = "NORTH";

  private COLUMN_MOVES: DirectionMapType = {
    EAST: 1,
    WEST: -1,
  };
  private ROW_MOVES: DirectionMapType = {
    NORTH: -1,
    SOUTH: 1,
  };

  private DIRECTIONS: DirectionsType[] = ["NORTH", "EAST", "SOUTH", "WEST"];

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.addMoveHistory(this.row, this.column);
  }

  private addMoveHistory(row: number, column: number) {
    this.movesHistory.push(`${row},${column}`);
  }

  getMoveHistory() {
    return this.movesHistory.join("|");
  }

  move() {
    const currentDirection = this.DIRECTIONS[this.direction];
    const row = this.ROW_MOVES[currentDirection] || 0;
    const column = this.COLUMN_MOVES[currentDirection] || 0;

    console.log({
      currentDirection,
      row,
      column,
    });

    this.row += row;
    this.column += column;

    console.log("newRow", {
      row: this.row,
      column: this.column,
    });
    this.addMoveHistory(this.row, this.column);
  }

  rotate(ceilColor: boolean) {
    if (ceilColor) this.direction += 1;
    else this.direction -= 1;

    if (this.direction > this.DIRECTIONS.length - 1) this.direction = 0;
    if (this.direction < 0) this.direction = this.DIRECTIONS.length - 1;

    this.prettyDirection = this.DIRECTIONS[this.direction];
  }
}

class CeilBoard {
  color: boolean;

  constructor(color: boolean) {
    this.color = color;
  }

  flip() {
    this.color = !this.color;
  }
}

class Board {
  private boardGame: Array<CeilBoard[]> = [];
  ant: Ant;

  constructor(board: boolean[][], rowAnt: number, columnAnt: number) {
    this.ant = new Ant(rowAnt, columnAnt);
    this.initialize(board);
  }

  private initialize(board: boolean[][]) {
    for (let boardColors of board) {
      const ceils = boardColors.map((color) => new CeilBoard(color));
      this.boardGame.push(ceils);
    }
  }

  getCeil() {
    return this.boardGame[this.ant.row][this.ant.column];
  }

  rotate() {
    const ceil = this.getCeil();
    this.ant.rotate(ceil.color);
  }

  flip() {
    const ceil = this.getCeil();
    ceil.flip();
  }

  move() {
    this.ant.move();
  }
}

function simulate(
  board: boolean[][],
  start_row: number,
  start_column: number,
  actions: string[]
): string {
  const boardGame = new Board(board, start_row, start_column);

  for (let action of actions) {
    boardGame[action as any]();
  }

  return boardGame.ant.getMoveHistory();
}

console.log(
  "Moves: ",
  simulate(
    [
      [true, true, false],
      [true, true, false],
      [true, true, true],
    ],
    1,
    1,
    ["rotate", "flip", "move", "rotate", "flip", "move"]
  )
); // "1,1|1,2|0,2"
