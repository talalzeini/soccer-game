$(document).ready(function(){
    

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
  
    $('*').click(function(){
        if(inProgress == true ){
        return false;
        }

        crowdSFX.play();
        lwSFX.play();
        $('.start').text('0'); 

var minute = $('.start');
var ht = 0;

inProgress = true;
var events = [

'have scored',
'shot and missed',
'missed by a mile',
'received a yellow card',
'have had a player sent off',
'have a corner',
'have freekick',
];

var teams = [
    'England',
    'The Netherlands'
];

$('.fact_card').append('<p class="one_event">And we\'re off!')



var match = setInterval(function(){

minute.text(parseInt(minute.text()) + 1);

if(parseInt(minute.text()) == 90){

clearInterval(match);
if(parseInt($('span[data-id="' + teams[0] + '"]').text()) >  parseInt($('span[data-id="' + teams[1] + '"]').text())){

    $('.fact_card').append('<p class="one_event"> + teams[0] + wins. </p>');
}else if(parseInt($('span[data-id="' + teams[0] + '"]').text()) <  parseInt($('span[data-id="' + teams[1] + '"]').text())){
    $('.fact_card').append('<p class="one_event"> + teams[1] + wins. </p>');
}else{
    $('.fact_card').append('<p class="one_event"> It\'s a draw.</p>');
}

$('.fact_card').scrollTop(1E10);

}
}, 200);


});
});
