const fibonacciMap = new Map();

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  if (fibonacciMap.has(n)) {
    return fibonacciMap.get(n);
  }
  
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  fibonacciMap.set(n, result);
  return result;
}

console.log(fibonacci(6));
