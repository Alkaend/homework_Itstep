let regex1 = /[0-2][0-4]:[0-5][0-9]/;

console.log(regex1.test('12:55'));


let regex2 = /^\(\+994\)((-)|\s)((50)|(55)|(47)|(51))((-)|\s)\d{3}((-)|\s)\d{2}((-)|\s)\d{2}/;

console.log(regex2.test('(+994) 51 435 29 64'));


let m = document.querySelector('input');

let regex3 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%&_])(?=.*\d)(?=.*[!?.,])[A-Za-z\d@#$%&_!?.,]{8,16}$/

document.addEventListener('input', (e) => {
    console.log(regex3.test(e.target.value));

});





let gorshok2 = "hello myalim :121 ";
let regex4 = gorshok2.replace(/\d/g, 'D');

console.log(regex4);

let gorshok = "Hello world 121 212";
let regex5 = gorshok.replace(/\d+/g, 'N');

console.log(regex5);

let gorshok3 = "Hello     mir    manera           krytit     mir    fsdf   dsf   sfd   sdfd";
let regex6 = gorshok3.split(/[^A-za-z]+/).length;

console.log(regex6);

