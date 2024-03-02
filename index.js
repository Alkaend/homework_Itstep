console.clear();

function myMath(operation, ...nums) {
    if (new.target) {
        throw new Error('Invalid operation');
    }

    const isMethodAlreadyExist = operation in Math;

    if (isMethodAlreadyExist) {
        if (typeof Math[operation] === 'function') {
            return Math[operation](...nums);
        } else {
            return Math[operation];
        }
    }

    switch (operation) {
        case 'sum': {
            let sum = 0;

            for (let i = 0; i < nums.length; ++i) {
                sum += nums[i];
            }

            return sum;
        }

        case 'multiply': {
            let prod = 1;

            for (let i = 0; i < nums.length; ++i) {
                prod *= nums[i];
            }

            return prod;
        }

        case 'division': {
            let prod = 1;

            for (let i = 0; i < nums.length; ++i) {
                prod /= nums[i];
            }

            return prod;
        }

        case 'subtract': {
            let prod = 0;

            for (let i = 0; i < nums.length; ++i) {
                prod -= nums[i];
            }

            return prod;
        }

        default: {
            throw new Error('Invalid operation');
        }
    }
}

const sum = myMath('PI', 1, 2, 3, 4, 5);
const multiply = myMath('multiply', 2, 5);
const division = myMath('division', 2, 5);
const subtract = myMath('subtract', 2, 5);
/* const pow = myMath('123', 2, 5);
 */  



console.log(sum);
console.log(multiply);
console.log(division);
console.log(subtract);