const m = [1, 2, 3, 4];

function printElements(m) {
    let interval = setInterval(() => {
        if (m[0] === undefined) {
            clearInterval(interval);
        } else {
            console.log(m[0]);
            m.splice(0, 1);
        }
    }, 1000
    )
}

printElements(m);