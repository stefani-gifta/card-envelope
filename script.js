const env = document.getElementsByClassName('envelope');
const flap = document.getElementsByClassName('envelope-flap');
const card = document.getElementsByClassName('card');
// const instruction = document.getElementById('instruction');

// instruction.innerHTML = "Click on envelope to open!";

function isCardPeeked() {
    return card[0].classList.contains('card-peek');
}
function isCardShown() {
    return card[0].classList.contains('card-show');
}

env[0].addEventListener('click', function() {
    const flapOpened = flap[0].classList.contains('envelope-flap-hover');
    const cardNotVisible = !isCardPeeked() && !isCardShown();

    if(flapOpened && cardNotVisible) {
        // close envelope
        flap[0].classList.remove('envelope-flap-hover');
        card[0].classList.remove('card-show', 'card-hide');
        // instruction.innerHTML = "Click on envelope to open!";
    } else if(cardNotVisible) {
        // open envelope + peek card
        flap[0].classList.add('envelope-flap-hover');
        card[0].classList.add('card-peek');
        // instruction.innerHTML = "Click on card to open and close!";
    };
});

card[0].addEventListener('click', function() {
    if(isCardPeeked()) {
        // open card
        card[0].classList.remove('card-peek');
        card[0].classList.add('card-show');
    }
});

document.addEventListener('click', function(e) {
    const clickOutsideCard = !card[0].contains(e.target);

    if(clickOutsideCard && isCardShown()) {
        // hide card
        card[0].classList.remove('card-show');
        card[0].classList.add('card-hide');
        // instruction.innerHTML = "Click on envelope to close!";
    }
});