//all the math shit will be here
//store player choices .. empty array I guess that checks whos turn it is
//even turns will be cross, odd turns will be circle


//determines whos turn it is with a counter
let gameOver = false;
let playerWin = false;
let gameStart = false;
let turn = [];
let characterTurn = 0;
let playerList = [
    player1 = { wins: 0, character: '' },
    player2 = { wins: 0, character: '' }
];

const playerTurn = function (tileChoice) {
    if (!gameOver && !$(tileChoice).hasClass('cross') && !$(tileChoice).hasClass('circle') && gameStart) {
        turn += '1';
        if (turn.length % 2 === 0) {
            $(tileChoice).addClass('circle');
            $(tileChoice).addClass(playerList[1].character);
            $('h3#whosTurn').html(`Player 1's turn`);
        } else {
            $(tileChoice).addClass('cross');
            $(tileChoice).addClass(playerList[0].character);
            $('h3#whosTurn').html(`Player 2's turn`);
        }
    }
};

const crossWin = function () {
    if (!gameOver) {
        playerList[0].wins += 1;
        $('h3#scoreboard').append('<img class="tally" src="./images/1win.png">')
        gameOver = true;
    }
};

const circleWin = function () {
    if (!gameOver) {
        playerList[1].wins += 1;
        $('h3#scoreboard').append('<img class="tally" src="./images/2win.png">')
        gameOver = true;
    }
};

const tie = function () {
    if (!gameOver) {
        $('h3#scoreboard').append('<img class="tally" src="./images/tie.png">')
        gameOver = true;
    }
};

const checkWin = function () {
    //cross
    if ($('div#top-left').hasClass('cross') && $('div#top-middle').hasClass('cross') && $('div#top-right').hasClass('cross')) {
        crossWin();
    }
    if ($('div#center-left').hasClass('cross') && $('div#center-middle').hasClass('cross') && $('div#center-right').hasClass('cross')) {
        crossWin();
    }
    if ($('div#bottom-left').hasClass('cross') && $('div#bottom-middle').hasClass('cross') && $('div#bottom-right').hasClass('cross')) {
        crossWin();
    }
    if ($('div#top-left').hasClass('cross') && $('div#center-left').hasClass('cross') && $('div#bottom-left').hasClass('cross')) {
        crossWin();
    }
    if ($('div#top-middle').hasClass('cross') && $('div#center-middle').hasClass('cross') && $('div#bottom-middle').hasClass('cross')) {
        crossWin();
    }
    if ($('div#top-right').hasClass('cross') && $('div#center-right').hasClass('cross') && $('div#bottom-right').hasClass('cross')) {
        crossWin();
    }
    if ($('div#top-left').hasClass('cross') && $('div#center-middle').hasClass('cross') && $('div#bottom-right').hasClass('cross')) {
        crossWin();
    } if ($('div#top-right').hasClass('cross') && $('div#center-middle').hasClass('cross') && $('div#bottom-left').hasClass('cross')) {
        crossWin();
    }
    //circle
    if ($('div#top-left').hasClass('circle') && $('div#top-middle').hasClass('circle') && $('div#top-right').hasClass('circle')) {
        circleWin();
    }
    if ($('div#center-left').hasClass('circle') && $('div#center-middle').hasClass('circle') && $('div#center-right').hasClass('circle')) {
        circleWin();
    }
    if ($('div#bottom-left').hasClass('circle') && $('div#bottom-middle').hasClass('circle') && $('div#bottom-right').hasClass('circle')) {
        circleWin();
    }
    if ($('div#top-left').hasClass('circle') && $('div#center-left').hasClass('circle') && $('div#bottom-left').hasClass('circle')) {
        circleWin();
    }
    if ($('div#top-middle').hasClass('circle') && $('div#center-middle').hasClass('circle') && $('div#bottom-middle').hasClass('circle')) {
        circleWin();
    }
    if ($('div#top-right').hasClass('circle') && $('div#center-right').hasClass('circle') && $('div#bottom-right').hasClass('circle')) {
        circleWin();
    }
    if ($('div#top-left').hasClass('circle') && $('div#center-middle').hasClass('circle') && $('div#bottom-right').hasClass('circle')) {
        circleWin();
    } if ($('div#top-right').hasClass('circle') && $('div#center-middle').hasClass('circle') && $('div#bottom-left').hasClass('circle')) {
        circleWin();
    }
    //tie
    if (turn.length === 9) {
        tie();
    }
};

const softReset = function () {
    if (gameOver && !playerWin) {
        $('.tile').removeClass(`cross circle ${playerList[0].character} ${playerList[1].character}`);
        turn = [];
        gameOver = false;
    }
};

const checkGame = function () {
    if (!playerWin) {
        if (playerList[0].wins === 2) {
            $('div.winner').prepend('<h2>Player 1 wins</h2>').show();
            playerWin = true;
        } else if (playerList[1].wins === 2) {
            $('div.winner').prepend('<h2>Player 2 wins</h2>').show();
            playerWin = true;
        }
    }
};

const changeCharacter = function (characterChoice) {
    if (characterTurn === 0) {
        characterTurn += 1;
        playerList[0].character = characterChoice;
        $(`div#${characterChoice}`).hide();
        $("div#p1").append(`<img src="./images/${characterChoice}.png">`);
    } else if (characterTurn === 1) {
        characterTurn += 1;
        playerList[1].character = characterChoice;
        $("div#p2").append(`<img src="./images/${characterChoice}.png">`);
        gameStart = true;
    }
};

const characterLock = function () {
    if (characterTurn === 2) {
        $('#character-selection').hide();
        $('div.board').removeClass('hide');
        $('div#p3').removeClass('hide')
    }
};

const resetGame = function () {
    window.location.reload();
};