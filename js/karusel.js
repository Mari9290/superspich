const next = document.querySelector('#next');
const back = document.querySelector('#back');

const photos = ['img/reviews/2.jpg', 'img/reviews/3.jpeg', 'img/reviews/4.jpeg', 'img/reviews/5.jpeg', 'img/reviews/6.jpg', 'img/reviews/7.jpg', 'img/reviews/8.jpg'];

let i = 0;
next.addEventListener('click', () => {
    i++;
    if (i>photos.length-1){
        i=0
    }
    document.querySelector('#pic').src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i<0){
        i=photos.length-1
    }
    document.querySelector('#pic').src=photos[i];
})