console.log('is working');
let pet = {
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
    koromon();
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

//move koromon on screen
const koromon = () => {
    console.log('ran koromon');
    $('.koromonImg').css("visibility", "visible");
    $('.koromonImg').velocity({
        rotateY: -30,
        rotateX: -30,
        "margin-left": "700px",
    }, {
        duration: 5000,
        loop: 10,
        delay: 20
    })

}

//move augomon on screen
const agumon = () => {
    $('.agumonImg').css("visibility", "visible");
}

// the animation and sound 
const digivole = () => {
    if (pet.age == 5) {
        $('.koromonImg').hide();
        let audio = document.getElementsByTagName("audio")[0];
        audio.play();
        $("#canvas").prepend('<img id="digivolve1" src="sprites/ezgif.com-gif-maker.gif" />');
    } else {
        $('#digivolve1').hide();
    }

    if (pet.age >= 5) {
        agumon();
    }
}

//removing start button
const hideStart = () => {
    $('#startGame').hide();
}

//hunger progress bar
const hungerProgressBar = () => {
    let interval = setInterval(function () {
        $("#hungerBar")
            .css("width", pet.hunger + "%")
            .attr("aria-valuenow", pet.hunger)
            .text(pet.hunger + " out of 100 hunger level");
        if (pet.hunger >= 100)
            clearInterval(interval);
    }, 500);
};

//changes progress bar color fo hunger bar
const changeHungerProgressBar = () => {
    if (pet.hunger <= 30) {
        $('#hungerBar').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-primary');

    } else if (pet.hunger >= 40 && pet.hunger <= 70) {
        $('#hungerBar').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');

    } else if (pet.hunger > 70) {
        $('#hungerBar').removeClass('bg-warning').addClass('bg-danger');
    }
};

//changes progress bar color for sleepiness bar
const changeSleepinessProgressBar = () => {
    if (pet.sleepiness <= 30) {
        $('#sleepinessBar').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-primary');

    } else if (pet.sleepiness >= 40 && pet.sleepiness <= 70) {
        $('#sleepinessBar').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');

    } else if (pet.sleepiness > 70) {
        $('#sleepinessBar').removeClass('bg-warning').addClass('bg-danger');
    }
};

//changes progress bar color for boredom bar
const changeBoredomProgressBar = () => {
    if (pet.boredom <= 30) {
        $('#boredomBar').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-primary');

    } else if (pet.boredom >= 40 && pet.boredom <= 70) {
        $('#boredomBar').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');

    } else if (pet.boredom > 70) {
        $('#boredomBar').removeClass('bg-warning').addClass('bg-danger');
    }
};

//changes progress bar color for boredom bar
const changeBladderProgressBar = () => {
    if (pet.bladder <= 30) {
        $('#bladderBar').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-primary');

    } else if (pet.bladder >= 40 && pet.bladder <= 70) {
        $('#bladderBar').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');

    } else if (pet.bladder > 70) {
        $('#bladderBar').removeClass('bg-warning').addClass('bg-danger');
    }
};

//sleepiness progress bar
const sleepinessProgressBar = () => {
    let interval = setInterval(function () {
        $("#sleepinessBar")
            .css("width", pet.sleepiness + "%")
            .attr("aria-valuenow", pet.sleepiness)
            .text(pet.sleepiness + " out of 100 sleepiness level");
        if (pet.sleepiness >= 100)
            clearInterval(interval);
    }, 500);
};

//boredom progress bar
const boredomProgressBar = () => {
    let interval = setInterval(function () {
        $("#boredomBar")
            .css("width", pet.boredom + "%")
            .attr("aria-valuenow", pet.boredom)
            .text(pet.boredom + " out of 100 boredom level");
        if (pet.boredom >= 100)
            clearInterval(interval);
    }, 500);
};

//bladder progress bar
const bladderProgressBar = () => {
    let interval = setInterval(function () {
        $("#bladderBar")
            .css("width", pet.bladder + "%")
            .attr("aria-valuenow", pet.bladder)
            .text(pet.bladder + " out of 100 bladder level");
        if (pet.bladder >= 100)
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
        if (pet.hunger < 100 && pet.sleepiness < 100 && pet.boredom < 100 && pet.bladder < 100) {
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
        intervalId = setInterval(varName, 500);
    });
}

const sleepinessCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 100 && pet.sleepiness < 100 && pet.boredom < 100 && pet.bladder < 100) {
            pet.sleepiness++
            changeSleepinessProgressBar();
            scales();
        } else {
            console.log('clearing sleepiness interval')
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 500);
    });
}

const boredomCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 100 && pet.sleepiness < 100 && pet.boredom < 100 && pet.bladder < 100) {
            pet.boredom++
            changeBoredomProgressBar();
            scales();
        } else {
            console.log('clearing boredom interval');
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 500);
    });
}

const bladderCounter = () => {
    console.log('counters on');
    let intervalId = null
    let varName = function () {
        if (pet.hunger < 100 && pet.sleepiness < 100 && pet.boredom < 100 && pet.bladder < 100) {
            pet.bladder++
            changeBladderProgressBar();
            scales();
        } else {
            console.log('clearing bladder interval');
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 500);
    });
}

const ageCounter = () => {
    console.log('aging');
    let intervalId = null
    let varName = function () {
        if (pet.age < 1000) {
            pet.age++
            digivole();
        } else {
            console.log('clearing life interval')
            clearInterval(intervalId);
        }
    };

    $(document).ready(function () {
        intervalId = setInterval(varName, 3200);
    });
}

const subtractHunger = () => {
    console.log('feeding pet');
    if (pet.hunger > 10) {
        pet.hunger = pet.hunger - 10
    }
}

const subtractSleepiness = () => {
    console.log('putting pet to sleep');
    if (pet.sleepiness > 10) {
        pet.sleepiness = pet.sleepiness - 10
    }
}

const subtractBoredom = () => {
    console.log('playing with pet');
    if (pet.boredom > 10) {
        pet.boredom = pet.boredom - 10
    }
}

const subtractBladder = () => {
    console.log('taking pet out');
    if (pet.bladder > 10) {
        pet.bladder = pet.bladder - 10
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