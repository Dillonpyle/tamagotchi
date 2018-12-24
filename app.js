console.log('is working');
var pet = {
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 0
}




const startGame = () => {
    addButtons();
    hungerCounter();
    sleepinessCounter();
    boredomCounter();
    ageCounter();
}

const addButtons = () => {
    const $div = $('<div/>', {
        id: 'buttonArray'
    });
    $('body').append($div);
    const $ul = $('<ul/>', {
        id: 'buttons'
    });
    $($div).append($ul);
    $.each(pet, function (index, value) {
        var $button = $('<button/>').attr({
            type: 'button',
            id: index,
        }).text(index);
        $('#buttons').append($button);
    });
    $('#age').remove();
}

const hungerCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 10 && pet.sleepiness < 10 && pet.boredom < 10) {
            pet.hunger++
            scales();
        } else {
            console.log('clearing hunger interval')
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 2000);
    });
}

const sleepinessCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 10 && pet.sleepiness < 10 && pet.boredom < 10) {
            pet.sleepiness++
            scales();
        } else {
            console.log('clearing sleepiness interval')
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 2000);
    });
}

const boredomCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 10 && pet.sleepiness < 10 && pet.boredom < 10) {
            pet.boredom++
            scales();
        } else {
            console.log('clearing boredom interval')
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 2000);
    });
}



const ageCounter = () => {
    console.log('aging');
    let intervalId = null
    let varName = function () {
        if (pet.age < 1000) {
            pet.age++
        } else {
            console.log('clearing life interval')
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 2000);
    });
}

const scales = () => {
    $(".hungerScale").text(`pets hunger level is :${pet.hunger}`);
    $(".sleepinessScale").text(`pets tiredness level is :${pet.sleepiness}`);
    $(".boredomScale").text(`pets boredom level is :${pet.boredom}`);
    $(".ageScale").text(`pets age  is :${pet.age}`);
}

const subtractHunger = () => {
    console.log('feeding pet');
    if (pet.hunger > 0) {
        pet.hunger--
    }
}

const subtractSleepiness = () => {
    console.log('putting pet to sleep');
    if (pet.sleepiness > 0) {
        pet.sleepiness--
    }
}

const subtractBoredom = () => {
    console.log('playing with pet');
    if (pet.boredom > 0) {
        pet.boredom--
    }
}

$(document).on('click', '#startGame', function () {
    console.log('clicked');
    startGame();
});

$(document).on('click', '#hunger', function () {
    console.log('clicked');
    subtractHunger();
});

$(document).on('click', '#sleepiness', function () {
    console.log('clicked');
    subtractSleepiness();
});

$(document).on('click', '#boredom', function () {
    console.log('clicked');
    subtractBoredom();
});