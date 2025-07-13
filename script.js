const env = document.getElementsByClassName('envelope');
const flap = document.getElementsByClassName('envelope-flap');
const card = document.getElementsByClassName('card');
const instruction = document.getElementById('instruction');

instruction.innerHTML = "Click on envelope to open!";

env[0].addEventListener('click', function() {
    if(flap[0].classList.contains('envelope-flap-hover') && !card[0].classList.contains('card-peek') && !card[0].classList.contains('card-show')) {
        // close envelope
        env[0].classList.remove('envelope-after');
        flap[0].classList.remove('envelope-flap-hover');
        card[0].classList.remove('card-show');
        card[0].classList.remove('card-hide');
        instruction.innerHTML = "Click on envelope to open!";
    } else if(!card[0].classList.contains('card-peek')) {
        // open envelope + peek card
        env[0].classList.add('envelope-after');
        flap[0].classList.add('envelope-flap-hover');
        card[0].classList.add('card-peek');
        instruction.innerHTML = "Click on card to open and close!";
    };
});

card[0].addEventListener('click', function() {
    if(card[0].classList.contains('card-peek')) {
        // open card
        card[0].classList.remove('card-peek');
        card[0].classList.add('card-show');
    } else {
        // hide card
        card[0].classList.remove('card-show');
        card[0].classList.add('card-hide');
        instruction.innerHTML = "Click on envelope to close!";
    }
});