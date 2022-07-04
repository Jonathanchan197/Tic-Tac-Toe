//all the math shit will be here
//store player choices .. empty array I guess that checks whos turn it is
//even turns will be cross, odd turns will be circle


//determines whos turn it is with a counter
let turn = [];

const playerTurn = function (tileChoice) {
    if (!gameOver){
    turn += '1'
    if (turn.length%2===0) {
    $(tileChoice).addClass('circle')
    } else {
    $(tileChoice).addClass('cross')
    }
}
};


const crossWin = function ()  {
    if(!gameOver) {
    $('h1').append('Cross wins!');
    gameOver = true;
    $('body').addClass('win')
    }
};

const circleWin = function ()  {
    if(!gameOver) {
    $('h1').append('Circle wins!');
    gameOver = true;
    $('body').addClass('win')
    }
};

let gameOver= false;


const checkWin = function () {
    //cross
    if ($('div#top-left').hasClass('cross') && $('div#top-middle').hasClass('cross') && $('div#top-right').hasClass('cross') ) {
        crossWin();
    }
    if ($('div#center-left').hasClass('cross') && $('div#center-middle').hasClass('cross') && $('div#center-right').hasClass('cross') ) {
        crossWin();
    }
    if ($('div#bottom-left').hasClass('cross') && $('div#bottom-middle').hasClass('cross') && $('div#bottom-right').hasClass('cross') ) {
        crossWin();
    }
    if ($('div#top-left').hasClass('cross') && $('div#center-left').hasClass('cross') && $('div#bottom-left').hasClass('cross') ) {
        crossWin();
    }
    if ($('div#top-middle').hasClass('cross') && $('div#center-middle').hasClass('cross') && $('div#bottom-middle').hasClass('cross') ) {
        crossWin();
    }
    if ($('div#top-right').hasClass('cross') && $('div#center-right').hasClass('cross') && $('div#bottom-right').hasClass('cross') ) {
        crossWin();
    }
    if ($('div#top-left').hasClass('cross') && $('div#center-middle').hasClass('cross') && $('div#bottom-right').hasClass('cross') ) {
        crossWin();
    }if ($('div#top-right').hasClass('cross') && $('div#center-middle').hasClass('cross') && $('div#bottom-left').hasClass('cross') ) {
        crossWin();
    }
    //circle
    if ($('div#top-left').hasClass('circle') && $('div#top-middle').hasClass('circle') && $('div#top-right').hasClass('circle') ) {
        circleWin();
    }
    if ($('div#center-left').hasClass('circle') && $('div#center-middle').hasClass('circle') && $('div#center-right').hasClass('circle') ) {
        circleWin();
    }
    if ($('div#bottom-left').hasClass('circle') && $('div#bottom-middle').hasClass('circle') && $('div#bottom-right').hasClass('circle') ) {
        circleWin();
    }
    if ($('div#top-left').hasClass('circle') && $('div#center-left').hasClass('circle') && $('div#bottom-left').hasClass('circle') ) {
        circleWin();
    }
    if ($('div#top-middle').hasClass('circle') && $('div#center-middle').hasClass('circle') && $('div#bottom-middle').hasClass('circle') ) {
        circleWin();
    }
    if ($('div#top-right').hasClass('circle') && $('div#center-right').hasClass('circle') && $('div#bottom-right').hasClass('circle') ) {
        circleWin();
    }
    if ($('div#top-left').hasClass('circle') && $('div#center-middle').hasClass('circle') && $('div#bottom-right').hasClass('circle') ) {
        circleWin();
    }if ($('div#top-right').hasClass('circle') && $('div#center-middle').hasClass('circle') && $('div#bottom-left').hasClass('circle') ) {
        circleWin();
    }
};