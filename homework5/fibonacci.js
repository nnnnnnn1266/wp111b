  //參考chatGPT
function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      const result = fibonacci(n - 1) + fibonacci(n - 2);
      return result;
    }
  }
  
  const num = 10;
  const fibonacciNumber = fibonacci(num);
  console.log(`Fibonacci(${num}) = ${fibonacciNumber}`);
  
