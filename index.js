const obj = {
    name: 'Alex',
    surName: 'Max',
    AGE: 40
}

function lowercaseKeys(obj) {
    return Object.keys(obj).reduce((accumulator, key) => {
        accumulator[key.toLowerCase()] = obj[key];
        return accumulator;
    }, {});
}

outerLoop:while (true) {
    let m = prompt("Write something");
    for (let i in obj) {
        if (m.toLowerCase() === i.toLowerCase()) { 
            alert(true);
            continue outerLoop;
         }

    }
    alert(false);
}

// Expected output:

// template: user input -> output

// NAME -> true
// SURname -> true
// AGE -> true
// nAmEe -> false
// birthDate -> false