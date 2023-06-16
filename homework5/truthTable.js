  //參考chatGPT
function truthTable(n) {
    // 計算組合數
    const combinations = Math.pow(2, n);
  
    // 迭代組合數
    for (let i = 0; i < combinations; i++) {
      // 將索引轉換為二進制字串
      const binary = i.toString(2).padStart(n, '0');
  
      // 將二進制字串轉換為數字陣列
      const values = binary.split('').map(Number);
  
      console.log(values);
    }
  }

  truthTable(10);
  

