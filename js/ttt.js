//all the dom related shit will be here
$(document).ready(function () {
    $('.tile').click(function () {
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
        checkGame();
        softReset();
    });

    $('.character img').click(function () {
        const characterChoice = $(this).attr('id')
        changeCharacter(characterChoice);
        characterLock();
    });

    $('#reset').click(function() {
        resetGame();
    });
});