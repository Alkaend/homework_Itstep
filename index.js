console.clear();

const arr = [1, 2, 3];
const element = 'begin';

for (let a = arr.length; a > 0; a--) {
  arr[a] = arr[a - 1];
}

arr[0] = element;

console.log(arr); 