function rotateMatrix(matrix) {
  const row = matrix.length;
  result = [];
  for(let i = 0; i < row; i++) {
    result.push([]);
    for(let j = 0; j < row; j++) {
      let newI = row - 1 - j;
      let newJ = i;
      result[i][j] = matrix[newI][newJ];
    }
  }
  return result;
}

var testMatrix = [
  [1,   2,  3,  4],
  [5,   6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

/*
var result = [
  [13,  9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]
];
*/







// var testMatrix = [
//   [1, 2, 3, 4],
//   [0, 1, 2, 3],
//   [0, 0, 1, 2],
//   [1, 0, 0, 1]
// ];

/*
var result = [
  [1, 0, 0, 1],
  [0, 0, 1, 2],
  [0, 1, 2, 3],
  [1, 2, 3, 4]
];
*/

console.log(rotateMatrix(testMatrix));
