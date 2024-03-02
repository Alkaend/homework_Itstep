const convertString = function (str) {
    let s = '';
    let i = 0;
    while (i < str.length) {
        let n = str.charAt(i);
        if (n == n.toUpperCase()) {
            // Call toLowerCase
            n = n.toLowerCase();
        } else {
            // Call toUpperCase
            n = n.toUpperCase();
        }

        i += 1;
        s += n;
    }
    return s;
};

while (true) {
    let m = convertString(prompt('Write something'));
    console.log(m.split('').reverse().join(''));
}