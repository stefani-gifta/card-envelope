const env = document.querySelector('.envelope');
const flap = document.querySelector('.envelope-flap');
const card = document.querySelector('.card');
const instruction = document.getElementById('instruction');
const arrow = document.querySelector('.arrow');

function isCardPeeked() {
    return card.classList.contains('card-peek');
}
function isCardShown() {
    return card.classList.contains('card-show');
}

env.addEventListener('click', function() {
    const flapOpened = flap.classList.contains('envelope-flap-hover');
    const cardNotVisible = !isCardPeeked() && !isCardShown();

    if(flapOpened && cardNotVisible) {
        // close envelope
        flap.classList.remove('envelope-flap-hover');
        card.classList.remove('card-show', 'card-hide');
    } else if(cardNotVisible) {
        // open envelope + peek card
        flap.classList.add('envelope-flap-hover');
        card.classList.add('card-peek');
        card.draggable = true;
        env.style.cursor = "default";
        arrow.style.display = "block";
    };
});

card.addEventListener('dragend', function() {
    if(isCardPeeked()) {
        // open card
        card.classList.remove('card-peek');
        card.classList.add('card-show');
        instruction.style.opacity = "1";
        card.draggable = false;
        arrow.style.display = "none";
        env.style.cursor = "pointer";
        document.body.style.cursor = "pointer";
    }
});

document.addEventListener('click', function(e) {
    const clickOutsideCard = !card.contains(e.target);

    if(clickOutsideCard && isCardShown()) {
        // hide card
        card.classList.remove('card-show');
        card.classList.add('card-hide');
        instruction.style.opacity = "0";
        env.style.cursor = "pointer";
        document.body.style.cursor = "default";
    }
});