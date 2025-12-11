const boardCreationWithMine = (size: number, bombs: number) => {
  const totalCells = size * size;
  const positions = Array.from({ length: totalCells }, (_, index) => index); //fill with indexes
  const bombPositions = [...positions]
    .sort(() => Math.random() - 0.5)
    .slice(0, bombs); //shuffle and take first 'bombs' positions
  const board = Array.from({ length: size }, (_, y) =>
    Array.from({ length: size }, (_, x) => ({
      isOpen: false,
      isBomb: bombPositions.includes(y * size + x),
      value: 0,
    }))
  );
  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  return board.map((row, y) =>
    row.map((cell, x) => {
      if (cell.isBomb) return cell;
      const value = dirs.reduce((acc, [dx, dy]) => {
        const nx = x + dx;
        const ny = y + dy;
        const inside = nx >= 0 && ny >= 0 && nx < size && ny < size;
        return inside && board[ny][nx].isBomb ? acc + 1 : acc;
      }, 0);
      return { ...cell, value };
    })
  );
};

export default boardCreationWithMine;
