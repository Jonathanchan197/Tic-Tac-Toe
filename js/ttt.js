$(document).ready(function () {
    //places token on board
    $('.tile').click(function () {
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
        checkGame();
        softReset();
    });

    //saves the users character choice
    $('.character img').click(function () {
        const characterChoice = $(this).attr('id')
        changeCharacter(characterChoice);
        characterLock();
    });

    //resets the game
    $('#reset').click(function () {
        resetGame();
    });
});