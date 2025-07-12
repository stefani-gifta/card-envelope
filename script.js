const env = document.getElementsByClassName('envelope');
const flap = document.getElementsByClassName('envelope-flap');
const card = document.getElementsByClassName('card'); 

flap[0].addEventListener('click', function() {
    env[0].classList.add('envelope-after');
    flap[0].classList.add('envelope-flap-hover');
    card[0].classList.add('card-peek');
});

card[0].addEventListener('click', function() {
    card[0].classList.remove('card-peek');
    card[0].classList.add('card-show');
});