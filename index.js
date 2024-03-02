function timer(interval, num) {
    let timer = setInterval(() => {
        console.log(num);
        if (num === 0) {
            clearInterval(timer);
        } 
        --num;
    }, interval * 1000
    );
}
timer(1, 5);