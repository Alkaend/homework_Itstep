const titles = ['Заголовок 1', 'Очень длинный заголовок во всей книжке', 'Заголовок 2'];
const pages = [10, 20, 123456789012345];



for (let i = 0; i < titles.length; i++) {
    console.log(titles[i].padEnd(20 - pages[i].toString().length - 1, '.') + "." + pages[i]);

}



// Expected output:

// Заголовок 1.......10
// Очень длинный заголовок во всей книжке.20
// Заголовок 2.123456789012345