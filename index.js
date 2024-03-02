let links = document.querySelectorAll('a');

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();

    });
    link.addEventListener('mouseover', (e) => { link.style.color = getRandomColor(); });
}

