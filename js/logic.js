//game parameters
let gameOver = false;
let playerWin = false;
let gameStart = false;
let turn = [];
let characterTurn = 0;
let playerList = [
    player1 = { wins: 0, character: '' },
    player2 = { wins: 0, character: '' }
];

//checks which players turn
const playerTurn = function (tileChoice) {
    if (!gameOver && !$(tileChoice).hasClass('player1') && !$(tileChoice).hasClass('player2') && gameStart) {
        turn += '1';
        if (turn.length % 2 === 0) {
            $(tileChoice).addClass('player2');
            $(tileChoice).addClass(playerList[1].character);
            $('h3#whosTurn').html(`Player 1's turn`);
        } else {
            $(tileChoice).addClass('player1');
            $(tileChoice).addClass(playerList[0].character);
            $('h3#whosTurn').html(`Player 2's turn`);
        }
    }
};

const player1Win = function () {
    if (!gameOver) {
        playerList[0].wins += 1;
        $('h3#scoreboard').append('<img class="tally" src="./images/1win.png">')
        gameOver = true;
    }
};

const player2Win = function () {
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
    //player1
    if ($('div#top-left').hasClass('player1') && $('div#top-middle').hasClass('player1') && $('div#top-right').hasClass('player1')) {
        player1Win();
    }
    if ($('div#center-left').hasClass('player1') && $('div#center-middle').hasClass('player1') && $('div#center-right').hasClass('player1')) {
        player1Win();
    }
    if ($('div#bottom-left').hasClass('player1') && $('div#bottom-middle').hasClass('player1') && $('div#bottom-right').hasClass('player1')) {
        player1Win();
    }
    if ($('div#top-left').hasClass('player1') && $('div#center-left').hasClass('player1') && $('div#bottom-left').hasClass('player1')) {
        player1Win();
    }
    if ($('div#top-middle').hasClass('player1') && $('div#center-middle').hasClass('player1') && $('div#bottom-middle').hasClass('player1')) {
        player1Win();
    }
    if ($('div#top-right').hasClass('player1') && $('div#center-right').hasClass('player1') && $('div#bottom-right').hasClass('player1')) {
        player1Win();
    }
    if ($('div#top-left').hasClass('player1') && $('div#center-middle').hasClass('player1') && $('div#bottom-right').hasClass('player1')) {
        player1Win();
    } if ($('div#top-right').hasClass('player1') && $('div#center-middle').hasClass('player1') && $('div#bottom-left').hasClass('player1')) {
        player1Win();
    }
    //player2
    if ($('div#top-left').hasClass('player2') && $('div#top-middle').hasClass('player2') && $('div#top-right').hasClass('player2')) {
        player2Win();
    }
    if ($('div#center-left').hasClass('player2') && $('div#center-middle').hasClass('player2') && $('div#center-right').hasClass('player2')) {
        player2Win();
    }
    if ($('div#bottom-left').hasClass('player2') && $('div#bottom-middle').hasClass('player2') && $('div#bottom-right').hasClass('player2')) {
        player2Win();
    }
    if ($('div#top-left').hasClass('player2') && $('div#center-left').hasClass('player2') && $('div#bottom-left').hasClass('player2')) {
        player2Win();
    }
    if ($('div#top-middle').hasClass('player2') && $('div#center-middle').hasClass('player2') && $('div#bottom-middle').hasClass('player2')) {
        player2Win();
    }
    if ($('div#top-right').hasClass('player2') && $('div#center-right').hasClass('player2') && $('div#bottom-right').hasClass('player2')) {
        player2Win();
    }
    if ($('div#top-left').hasClass('player2') && $('div#center-middle').hasClass('player2') && $('div#bottom-right').hasClass('player2')) {
        player2Win();
    } if ($('div#top-right').hasClass('player2') && $('div#center-middle').hasClass('player2') && $('div#bottom-left').hasClass('player2')) {
        player2Win();
    }
    //tie
    if (turn.length === 9) {
        tie();
    }
};

//checks if best of 2 is won
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

//stores character choice in playerList object
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

const softReset = function () {
    if (gameOver && !playerWin) {
        $('.tile').removeClass(`player1 player2 ${playerList[0].character} ${playerList[1].character}`);
        turn = [];
        $('h3#whosTurn').html(`Player 1's turn`);
        gameOver = false;
    }
};

const resetGame = function () {
    window.location.reload();
};