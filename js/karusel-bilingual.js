const next = document.querySelector('#nextB');
const back = document.querySelector('#backB');

const photos = ['img/reviews-bilingual/2.jpg', 'img/reviews-bilingual/3.jpg', 'img/reviews-bilingual/4.jpeg', 'img/reviews-bilingual/5.jpeg', 'img/reviews-bilingual/6.jpg', 'img/reviews-bilingual/7.jpeg', 'img/reviews-bilingual/8.jpg'];

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