let n = 5;
let m = 7;
let limit = 1000;

outerLoop: for (let i = 0; (i <= n && n > 0) || (n < 0 && i >= n); i=n>0? i+1: i-1)  {
    for (let j = 0; (j <= m && m > 0) || (m < 0 && j >= m); j=m>0? j+1: j-1) {
        if (limit <= 0) {
            break outerLoop;
        } console.log(i, j);
        limit--;
    }
}
