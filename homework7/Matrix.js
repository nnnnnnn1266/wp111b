class Matrix {
    constructor(matrix) {
      this.matrix = matrix;
    }
  
    add(other) {
      const a = this.matrix;
      const b = other.matrix;
  
      if (a.length !== b.length || a[0].length !== b[0].length) {
        throw new Error('矩陣尺寸不相等');
      }
  
      const rows = a.length;
      const cols = a[0].length;
  
      const result = [];
  
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          row.push(a[i][j] + b[i][j]);
        }
        result.push(row);
      }
  
      return new Matrix(result);
    }
  
    multiply(other) {
      const a = this.matrix;
      const b = other.matrix;
  
      if (a[0].length !== b.length) {
        throw new Error('矩陣尺寸不相容');
      }
  
      const rows = a.length;
      const cols = b[0].length;
      const commonDim = a[0].length;
  
      const result = [];
  
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          let sum = 0;
          for (let k = 0; k < commonDim; k++) {
            sum += a[i][k] * b[k][j];
          }
          row.push(sum);
        }
        result.push(row);
      }
  
      return new Matrix(result);
    }
  }
  
  const matrix1 = [[1, 2], [3, 4]];
  const matrix2 = [[5, 6], [7, 8]];
  
  const matrixObj1 = new Matrix(matrix1);
  const matrixObj2 = new Matrix(matrix2);
  
  const addResult = matrixObj1.add(matrixObj2);
  console.log('相加結果:');
  console.log(addResult.matrix);
  
  const multiplyResult = matrixObj1.multiply(matrixObj2);
  console.log('相乘結果:');
  console.log(multiplyResult.matrix);
  
