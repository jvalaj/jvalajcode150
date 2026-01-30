//medium

var isValidSudoku = function (board) {  
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === ".") continue;

      const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        rows[r].has(val) ||
        cols[c].has(val) ||
        boxes[box].has(val)
      ) {
        return false;
      }

      rows[r].add(val);
      cols[c].add(val);
      boxes[box].add(val);
    }
  }

  return true;
};

/*


the solution i have writtne above isthere in js but is far more comlex than the one in python.
here is the python dsolution

def validSudoku(board):

  rows = collections.defaultdict(set) //here we are saying a collection of sets, like {{0:},{},{}}
  cols = collections.defaultdict(set)
  box = collections.defaultdict(set)

  for r in range(0,9):
    for c in range(0,9):

      if board[r][c] == ".":
        continue

      if (board[r][c] in rows[r] or 
          board[r][c] in cols[c] or
          board[r][c] in box[(r//3, c//3)]): // we are doing this to locate which box like 0 1 2 in rows and cols
          return False
      rows[r].add(board[r][c])
      cols[c].add(board[r][c])
      box[(r//3, c//3)].add(board[r][c])
  return True

*/