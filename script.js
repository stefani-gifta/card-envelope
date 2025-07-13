const env = document.getElementsByClassName('envelope');
const flap = document.getElementsByClassName('envelope-flap');
const card = document.getElementsByClassName('card');
const xBtn = document.getElementsByClassName('card-close-button');

flap[0].addEventListener('click', function() {
    if(flap[0].classList.contains('envelope-flap-hover')) {
        env[0].classList.remove('envelope-after');
        flap[0].classList.remove('envelope-flap-hover');
        card[0].classList.remove('card-show');
        card[0].classList.remove('card-hide');
    } else {
        env[0].classList.add('envelope-after');
        flap[0].classList.add('envelope-flap-hover');
        card[0].classList.add('card-peek');
    };
});

card[0].addEventListener('click', function() {
    if(card[0].classList.contains('card-peek')) {
        card[0].classList.remove('card-peek');
        card[0].classList.add('card-show');
    } else {
        card[0].classList.remove('card-show');
        card[0].classList.add('card-hide');
    }
});