export default class MyMath {
    static #parseString(str) {
        if (typeof str === 'number') return str;

        const standartNumber = Number(str);

        if (!Number.isNaN(standartNumber)) return standartNumber;

        const numsAsStrs = str.match(/\-?\d+(\.\d+)?/g);

        console.log('numsAsStrs', str, numsAsStrs);

        console.log('================================');

        return Number(numsAsStrs?.[0]);
    }

    static sum(...nums) {
        let sum = 0;

        // nums.forEach(num => sum += num);

        for (let i = 0; i < nums.length; ++i) {
            // sum += Number(nums[i]);
            // sum += parseInt(nums[i]);

            sum += MyMath.#parseString(nums[i]);
        }

        return sum;
    }
}