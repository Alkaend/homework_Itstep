console.clear();

let array = [1, 2, 3, 4, 5];
let newArray = new Array(array.length);

for (let a = array.length - 1, b=0; a >= 0; a--, b++) {
    newArray[b] = array[a];
}

console.log(newArray);

