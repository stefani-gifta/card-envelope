const env = document.getElementsByClassName('envelope');
const flap = document.getElementsByClassName('envelope-flap');
const card = document.getElementsByClassName('card');
const instruction = document.getElementById('instruction');
const arrow = document.getElementsByClassName('arrow');

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
    } else if(cardNotVisible) {
        // open envelope + peek card
        flap[0].classList.add('envelope-flap-hover');
        card[0].classList.add('card-peek');
        card[0].draggable = true;
        env[0].style.cursor = "default";
        arrow[0].style.display = "block";
    };
});

card[0].addEventListener('dragstart', function() {
    if(isCardPeeked()) {
        // open card
        card[0].classList.remove('card-peek');
        card[0].classList.add('card-show');
        instruction.style.opacity = "1";
        card[0].draggable = false;
        arrow[0].style.display = "none";
    }
});

document.addEventListener('click', function(e) {
    const clickOutsideCard = !card[0].contains(e.target);

    if(clickOutsideCard && isCardShown()) {
        // hide card
        card[0].classList.remove('card-show');
        card[0].classList.add('card-hide');
        instruction.style.opacity = "0";
        env[0].style.cursor = "pointer";
    }
});