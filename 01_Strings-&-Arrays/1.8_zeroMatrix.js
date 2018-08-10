function zeroMatrix(matrix) {
  const zeroLoc = findZeroCoords(matrix);
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(i === zeroLoc[0] || j == zeroLoc[1]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

function findZeroCoords(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for(let j = 0; j < row.length; j++) {
      const colItem = row[j];
      if(colItem === 0) {
        return [i, j];
      }
    }
  }
}

var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

/*
var result = [
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [0, 0, 0, 0],
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [1, 0, 1, 1]
];
*/

console.log(zeroMatrix(testMatrix));

