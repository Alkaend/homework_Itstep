function fibonachi(n) {
  if (n <= 1) {
      return n;
  } else {
      return fibonachi(n - 1) + fibonachi(n - 2);
  }
}

console.log(fibonachi(0)); 
console.log(fibonachi(1)); 
console.log(fibonachi(2)); 
console.log(fibonachi(3)); 
console.log(fibonachi(4)); 
console.log(fibonachi(10));
console.log(fibonachi(16));