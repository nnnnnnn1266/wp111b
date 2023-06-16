function mmul(a, b) {
    if (a[0].length !== b.length) {
      throw new Error('矩陣大小不同');
    }
  
    const rowsA = a.length;
    const colsA = a[0].length;
    const colsB = b[0].length;
  
    const result = [];
  
    for (let i = 0; i < rowsA; i++) {
      const row = [];
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += a[i][k] * b[k][j];
        }
        row.push(sum);
      }
      result.push(row);
    }
  
    return result;
}
  
const matrix1 = [[5, 2], [3, 5]];
const matrix2 = [[5, 3], [8, 8]];
  
const result = mmul(matrix1, matrix2);
console.log(result);
