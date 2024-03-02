function timer(time) {
    if (!/\d{2}:\d{2}:\d{2}/.test(time)) {
        console.log('Wrong time');
        return;
    }
    let timeArr = time.split(':');
    let hour = parseInt(timeArr[0]);
    let minute = parseInt(timeArr[1]);
    let second = parseInt(timeArr[2]);
    let timeMs = second * 1000 + minute * 60 * 1000 + hour * 60 * 60 * 1000;
    let timer = setTimeout(() => {
        console.log("Wake up!");
    }, timeMs
    )
}

timer('00:00:05');
