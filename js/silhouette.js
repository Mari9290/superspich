// const superspich = document.querySelector('#superspich');
// const birds = document.querySelector('#birds');

// superspich.addEventListener('click', () => {
//     superspich.classList.add("hidden");
//     birds.classList.remove("hidden");
// })
const result = document.querySelector('#result');
const wrong1 = document.querySelector('#wrong1');
const wrong2 = document.querySelector('#wrong2');
const next = document.querySelector('#next');
const wrong4 = document.querySelector('#wrong4');
const right = document.querySelector('#right');

result.addEventListener('click', (e) => {
    e.preventDefault();
    right.classList.add("right-answer");
    wrong1.classList.add("wrong-answer");
    wrong2.classList.add("wrong-answer");
    wrong4.classList.add("wrong-answer");
    next.classList.remove("hidden");
    result.classList.add('hidden');
});