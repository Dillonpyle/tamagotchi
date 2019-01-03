console.log('is working');
var pet = {
    playerName: "",
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    bladder: 0,
    age: 0
}



//starts the game
const startGame = () => {
    hideStart();
    userName();
    addButtons();
    hungerCounter();
    sleepinessCounter();
    boredomCounter();
    bladderCounter();
    ageCounter();
    hungerProgressBar();
    sleepinessProgressBar();
    boredomProgressBar();
    bladderProgressBar();
}
//graphics

const hideStart = () => {
    $('#startGame').hide();
}

//hunger progress bar
const hungerProgressBar = () => {
    let interval = setInterval(function () {
        $("#hungerBar")
            .css("width", pet.hunger * 10 + "%")
            .attr("aria-valuenow", pet.hunger * 10)
            .text(pet.hunger + " out of 10 hunger level");
        if (pet.hunger >= 10)
            clearInterval(interval);
    }, 500);
};

//changes progress bar color fo hunger bar
const changeHungerProgressBar = () => {
    if (pet.hunger <= 3) {
        $('#hungerBar').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-success');

    } else if (pet.hunger >= 4 && pet.hunger <= 7) {
        $('#hungerBar').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');

    } else if (pet.hunger > 7) {
        $('#hungerBar').removeClass('bg-warning').addClass('bg-danger');
    }
};

//changes progress bar color for sleepiness bar
const changeSleepinessProgressBar = () => {
    if (pet.sleepiness <= 3) {
        $('#sleepinessBar').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-success');

    } else if (pet.sleepiness >= 4 && pet.sleepiness <= 7) {
        $('#sleepinessBar').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');

    } else if (pet.sleepiness > 7) {
        $('#sleepinessBar').removeClass('bg-warning').addClass('bg-danger');
    }
};

//changes progress bar color for boredom bar
const changeBoredomProgressBar = () => {
    if (pet.boredom <= 3) {
        $('#boredomBar').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-success');

    } else if (pet.boredom >= 4 && pet.boredom <= 7) {
        $('#boredomBar').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');

    } else if (pet.boredom > 7) {
        $('#boredomBar').removeClass('bg-warning').addClass('bg-danger');
    }
};

//changes progress bar color for boredom bar
const changeBladderProgressBar = () => {
    if (pet.bladder <= 3) {
        $('#bladderBar').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-success');

    } else if (pet.bladder >= 4 && pet.bladder <= 7) {
        $('#bladderBar').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');

    } else if (pet.bladder > 7) {
        $('#bladderBar').removeClass('bg-warning').addClass('bg-danger');
    }
};

//sleepiness progress bar
const sleepinessProgressBar = () => {
    let interval = setInterval(function () {
        $("#sleepinessBar")
            .css("width", pet.sleepiness * 10 + "%")
            .attr("aria-valuenow", pet.sleepiness * 10)
            .text(pet.sleepiness + " out of 10 sleepiness level");
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
            .text(pet.boredom + " out of 10 boredom level");
        if (pet.boredom >= 10)
            clearInterval(interval);
    }, 500);
};

//bladder progress bar
const bladderProgressBar = () => {
    let interval = setInterval(function () {
        $("#bladderBar")
            .css("width", pet.bladder * 10 + "%")
            .attr("aria-valuenow", pet.bladder * 10)
            .text(pet.bladder + " out of 10 bladder level");
        if (pet.bladder >= 10)
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
    $('#playerName').remove();
}

//adds scale for pet life reference
const scales = () => {
    $(".playerName").text(`${pet.playerName} is responsible for this virtual pet`);
    //$(".hungerScale").text(`pets hunger level is :${pet.hunger}`);
    //$(".sleepinessScale").text(`pets tiredness level is :${pet.sleepiness}`);
    //$(".boredomScale").text(`pets boredom level is :${pet.boredom}`);
    $(".ageScale").text(`pets age  is :${pet.age}`);
}

const userName = () => {
    pet.playerName = prompt("What is your name?");
}

//adds death sequence
const death = () => {
    alert(`your pet has died. You're a monster ${pet.playerName}!`)
}

//starts hungercounter
const hungerCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 10 && pet.sleepiness < 10 && pet.boredom < 10 && pet.bladder < 10) {
            pet.hunger++
            scales();
            changeHungerProgressBar();
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
        if (pet.hunger < 10 && pet.sleepiness < 10 && pet.boredom < 10 && pet.bladder < 10) {
            pet.sleepiness++
            changeSleepinessProgressBar();
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
        if (pet.hunger < 10 && pet.sleepiness < 10 && pet.boredom < 10 && pet.bladder < 10) {
            pet.boredom++
            changeBoredomProgressBar();
            scales();
        } else {
            console.log('clearing boredom interval');
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 2000);
    });
}

const bladderCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 10 && pet.sleepiness < 10 && pet.boredom < 10 && pet.bladder < 10) {
            pet.bladder++
            changeBladderProgressBar();
            scales();
        } else {
            console.log('clearing bladder interval');
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

const subtractBladder = () => {
    console.log('taking pet out');
    if (pet.bladder > 0) {
        pet.bladder--
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

$(document).on('click', '#bladder', function () {
    console.log('clicked');
    subtractBladder();
});