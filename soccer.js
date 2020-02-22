$(document).ready(function(){
    
    const startButton = document.getElementById('events');
    const mainSide= document.getElementById('side');
    const secondSide= document.getElementById('side1');
    const skipBut = document.getElementById('skip');
    var inProgress              = false;
    var goalSFX                 = new Audio('goal.wav')
    var crowdSFX                = new Audio('crowd.wav')
    var lwSFX                   = new Audio('longwhistle.wav')
    var swSFX                   = new Audio('shortwhistle.wav')


    goalSFX.volume         = 0.5;
    lwSFX.volume           = 0.7;
    swSFX.volume            = 0.3;





    function randUpTo(number){
        return Math.floor(Math.random() * number) + 1;
    }
    $('.resize').click(function(){


        mainSide.classList.add('hide');
        secondSide.classList.remove('hide');
    
    
    });
    
    $('.start').click(function(){
        if(inProgress == true ){
        return false;
        }
        startButton.classList.add('fact_card');
        startButton.classList.add('fadeRight');
        skipBut.classList.add('fadeRightOut');
        crowdSFX.play();
        lwSFX.play();
        $('.start').text('0'); 

var minute = $('.start');
var ht = 0;

inProgress = true;
var events = [

'have scored.',
'have scored a penalty.',
'have scored a freekick.',
'have had a player injured.',
'shot and missed.',
'almost scored.',
'missed a big opportunity.',
'received a yellow card.',
'have had a player sent off.',
'have a corner.',
'missed a freekick.',
'missed a penalty.',
'shot and hit the post.',
'are in possesion.',
];

var teams = ['Lebanon', 'France'];

$('.fact_card').append('<p class="one_event">And we\'re off!');



var match = setInterval(function(){


if(parseInt(minute.text()) == 90){

clearInterval(match);
if (parseInt($('span[data-id="' + teams[0] + '"]').text()) >  parseInt($('span[data-id="' + teams[1] + '"]').text())){

    $('.fact_card').append('<p  class="one_event"> <br> The game has come to an end. <br><br>' + teams[0] + ' wins. </p>');
    console.log(teams[1]);
}


else if(parseInt($('span[data-id="' + teams[1] + '"]').text()) >  parseInt($('span[data-id="' + teams[0] + '"]').text())){

    $('.fact_card').append('<p   class="one_event"> <br> The game has come to an end. <br><br> '+ teams[1] +'  wins. </p>');

}else{
    $('.fact_card').append('<p   class="one_event"> <br> The game has come to an end. <br><br> It\'s a draw.</p>');
}
$('.fact_card').scrollTop(1E10);
crowdSFX.pause();

lwSFX.play();
return false;

}

if(parseInt(minute.text()) == 45){

    if(ht <= 20){
        if(ht == 0){
            $('.fact_card').append('<br><p class="one_event"> It\'s half time.</p>');
            swSFX.play();
           
        }
    if(ht == 20){
        $('.fact_card').append('<br><p   class="one_event"> The second half just started.</p><br>');
        swSFX.play();
    }
    $('.fact_card').scrollTop(1E10);
    ht++;
 
    return false;
    }
}



minute.text(parseInt(minute.text()) + 1);

var thisEvent = randUpTo(100);

if(thisEvent < 20){

var whichTeam = randUpTo(2);

var eventHappened = randUpTo(events.length);

if(eventHappened - 1 == 0 || eventHappened - 1 == 1 || eventHappened - 1 == 2){

    var score =  $('span[data-id="' + teams[whichTeam -1] + '"]');
    score.text(parseInt(score.text()) + 1);  
    myER(); 
    }
  
    



    
$('.fact_card').append('<p class="one_event">' + minute.text() + ' - ' + teams[whichTeam -1] + ' ' + events[eventHappened -1 ] + '</p>');

$('.fact_card').scrollTop(1E10);

}


}, 400);


});



$('.skip').click(function(){
    if(inProgress == true ){
    return false;
    }
    startButton.classList.add('fact_card');
    startButton.classList.add('fadeRight');
    crowdSFX.play();
    lwSFX.play();
    $('.start').text('0'); 

var minute = $('.start');
var ht = 0;

inProgress = true;
var events = [

'have scored.',
'have scored a penalty.',
'have scored a freekick.',
'have had a player injured.',
'shot and missed.',
'almost scored.',
'missed a big opportunity.',
'received a yellow card.',
'have had a player sent off.',
'have a corner.',
'missed a freekick.',
'missed a penalty.',
'shot and hit the post.',
'are in possesion.',
];

var teams = ['Lebanon', 'France'];

$('.fact_card').append('<p class="one_event">And we\'re off!');



var match = setInterval(function(){


if(parseInt(minute.text()) == 90){

clearInterval(match);
if (parseInt($('span[data-id="' + teams[0] + '"]').text()) >  parseInt($('span[data-id="' + teams[1] + '"]').text())){

$('.fact_card').append('<p  class="one_event"> <br> The game has come to an end. <br><br>' + teams[0] + ' wins. </p>');
console.log(teams[1]);
}


else if(parseInt($('span[data-id="' + teams[1] + '"]').text()) >  parseInt($('span[data-id="' + teams[0] + '"]').text())){

$('.fact_card').append('<p   class="one_event"> <br> The game has come to an end. <br><br> '+ teams[1] +'  wins. </p>');

}else{
$('.fact_card').append('<p   class="one_event"> <br> The game has come to an end. <br><br> It\'s a draw.</p>');
}
$('.fact_card').scrollTop(1E10);
crowdSFX.pause();

lwSFX.play();
return false;

}

if(parseInt(minute.text()) == 45){

if(ht <= 20){
    if(ht == 0){
        $('.fact_card').append('<br><p class="one_event"> It\'s half time.</p>');
        swSFX.play();
       
    }
if(ht == 20){
    $('.fact_card').append('<br><p   class="one_event"> The second half just started.</p><br>');
    swSFX.play();
}
$('.fact_card').scrollTop(1E10);
ht++;

return false;
}
}



minute.text(parseInt(minute.text()) + 1);

var thisEvent = randUpTo(100);

if(thisEvent < 20){

var whichTeam = randUpTo(2);

var eventHappened = randUpTo(events.length);

if(eventHappened - 1 == 0 || eventHappened - 1 == 1 || eventHappened - 1 == 2){

var score =  $('span[data-id="' + teams[whichTeam -1] + '"]');
score.text(parseInt(score.text()) + 1);  
myER(); 
}






$('.fact_card').append('<p class="one_event">' + minute.text() + ' - ' + teams[whichTeam -1] + ' ' + events[eventHappened -1 ] + '</p>');

$('.fact_card').scrollTop(1E10);

}


}, 00);


});





















});
