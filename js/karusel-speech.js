const next = document.querySelector('#nextS');
const back = document.querySelector('#backS');

const photos = ['img/reviews-speech/2.jpg', 'img/reviews-speech/3.jpg', 'img/reviews-speech/4.jpg', 'img/reviews-speech/5.jpg', 'img/reviews-speech/6.jpg', 'img/reviews-speech/7.jpg'];

let i = 0;
next.addEventListener('click', () => {
    i++;
    if (i>photos.length-1){
        i=0
    }
    document.querySelector('#picS').src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i<0){
        i=photos.length-1
    }
    document.querySelector('#picS').src=photos[i];
})