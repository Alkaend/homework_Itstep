let button = document.querySelector('button');
let m = [];

function addListeners(num) {
    m = [];
    for (let i = 1; i <= num; i++) {
        function log() {
            console.log(i);
        }
        m.push(log);
        button.addEventListener('click', log);
    }
}

addListeners(10);

button.addEventListener('click', () => {
    setTimeout(() => {
        let n = prompt('1-10:');
        for (let i = 0; i < m.length; i++) {
            button.removeEventListener('click', m[i]);
        }
        addListeners(Number(n));
    }, 1)
});

