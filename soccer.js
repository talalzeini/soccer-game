


$(document).ready(function(){
  
    const startButton = document.getElementById('events');
    const mainSide= document.getElementById('side');
    const secondSide= document.getElementById('side1');
    var inProgress              = false;




 

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

        $('.start').text('0'); 

var minute = $('.start');
var ht = 0;

inProgress = true;
var events = [

'scored.',
'scored a penalty.',
'scored a freekick.',
'shot and missed.',
'almost scored.',
'missed a big opportunity.',
'received a yellow card.',
'made a foul.',
'lost possesion.',
'is taking a corner.',
'was close, but he lost possesion.',
'intercepted the ball.',
'made a risky tackle and took possesion.',
'missed a freekick.',
'shot and hit the post.',
];



var chelseaPlayer =  [
'Abraham',
'Willian',
'Kante',
'Mason Mount',
'Azpilicueta',
'Zouma',
'Marcos Alonso',
'Pulisic',
'Barkley',
'Rudiger',
'Jorginho',
]
var arsenalPlayer =  [
'Aubameyang',
'Lacazette',
'Xhaka',
'David Luiz',
'Sokratis',
'Monreal',
'Ozil',
'Pepe',
'Ceballos',
'Mustafi',
'Bellerin',
]




$('.fact_card').append('<p class="one_event">And we\'re off!');

var match = setInterval(function(){
var teams = ['Chelsea', 'Arsenal']
var team = ["(CHE) " + chelseaPlayer[Math.floor(Math.random()*(11-1))], "(ARS) " + arsenalPlayer[Math.floor(Math.random()*(10-1))]];
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



return false;

}

if(parseInt(minute.text()) == 45){

    if(ht <= 20){
        if(ht == 0){
            $('.fact_card').append('<br><p class="one_event"> It\'s half time.</p>');
           
           
        }
    if(ht == 20){
        $('.fact_card').append('<br><p   class="one_event"> The second half just started.</p><br>');
    
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

    var score =  $('span[data-id="'+ teams[whichTeam-1] + '"]');
    score.text(parseInt(score.text()) + 1);  
  
    }
  
    



    
$('.fact_card').append('<p class="one_event">' + minute.text() + ' - ' + team[whichTeam -1] + ' ' + events[eventHappened -1 ] + '</p>');

$('.fact_card').scrollTop(1E10);

}


}, 400);


});


})