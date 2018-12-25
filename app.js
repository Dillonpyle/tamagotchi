console.log('is working');
var pet = {
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 0
}



//starts the game
const startGame = () => {
    addButtons();
    hungerCounter();
    sleepinessCounter();
    boredomCounter();
    ageCounter();
    hungerProgressBar();
    sleepinessProgressBar()
    boredomProgressBar()
}
//graphics

//hunger progress bar
const hungerProgressBar = () => {
    let interval = setInterval(function () {
        $("#hungerBar")
            .css("width", pet.hunger * 10 + "%")
            .attr("aria-valuenow", pet.hunger * 10)
            .text(pet.hunger * 10 + "% Complete");
        if (pet.hunger >= 10)
            clearInterval(interval);
    }, 500);
};

//sleepiness progress bar
const sleepinessProgressBar = () => {
    let interval = setInterval(function () {
        $("#sleepinessBar")
            .css("width", pet.sleepiness * 10 + "%")
            .attr("aria-valuenow", pet.sleepiness * 10)
            .text(pet.sleepiness * 10 + "% Complete");
        if (pet.sleepiness >= 10)
            clearInterval(interval);
    }, 500);
};

//boredom progress bar
const boredomProgressBar = () => {
    let interval = setInterval(function () {
        $("#boredomBar")
            .css("width", pet.boredom * 10 + "%")
            .attr("aria-valuenow", pet.boredom * 10)
            .text(pet.boredom * 10 + "% Complete");
        if (pet.boredom >= 10)
            clearInterval(interval);
    }, 500);
};

//adds buttons to the screen
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

//adds scale for pet life reference
const scales = () => {
    $(".hungerScale").text(`pets hunger level is :${pet.hunger}`);
    $(".sleepinessScale").text(`pets tiredness level is :${pet.sleepiness}`);
    $(".boredomScale").text(`pets boredom level is :${pet.boredom}`);
    $(".ageScale").text(`pets age  is :${pet.age}`);
}

//adds death sequence
const death = () => {
    alert('your pet has died. you monster!')
}

//starts hungercounter
const hungerCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 10 && pet.sleepiness < 10 && pet.boredom < 10) {
            pet.hunger++
            scales();
        } else {
            console.log('clearing hunger interval')
            death();
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
            death();
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
            console.log('clearing boredom interval');
            death();
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
        intervalId = setInterval(varName, 10000);
    });
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