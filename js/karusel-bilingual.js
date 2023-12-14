const next = document.querySelector('#nextB');
const back = document.querySelector('#backB');

const photos = ['img/reviews-bilingual/2.jpg', 'img/reviews-bilingual/3.jpg'];

let i = 0;
next.addEventListener('click', () => {
    i++;
    if (i>photos.length-1){
        i=0
    }
    document.querySelector('#picB').src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i<0){
        i=photos.length-1
    }
    document.querySelector('#picB').src=photos[i];
})