const lis = document.querySelectorAll('li');
const mainPhoto = document.querySelector('#main-photo');

for (let li of lis) {
    li.addEventListener('mouseover', () => { li.style.outline = '2px solid black' });
    li.addEventListener('mouseout', () => { li.style.outline = 'none' });
    li.addEventListener('click', () => { mainPhoto.src = li.querySelector('img').src });
}

