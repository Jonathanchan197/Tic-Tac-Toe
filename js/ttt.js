//all the dom related shit will be here
$(document).ready(function() {
    //top
    $("#top-left").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
    $("#top-middle").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
    $("#top-right").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
    //center
    $("#center-left").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
    $("#center-middle").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
    $("#center-right").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
    //bottom
    $("#bottom-left").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
    $("#bottom-middle").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
    $("#bottom-right").click(function(){
        const tileChoice = $(this)
        playerTurn(tileChoice);
        checkWin();
    });
});