var color=["green","red","yellow","blue"]

var gamePattern=[];
var userClickedPattern=[];
var level=0
var start=100;
console.log(start)

$(document).on('keypress',function(){
   if(start==100){
    start=99;
    xyz()
    
   }
   
});


$(".btn").on('click',function(key){
    var user=key.target.classList[1];
    userClickedPattern.push(user);
    
    checking(userClickedPattern.length);
    
    
})
function checking(value){
    if( gamePattern[value-1]===userClickedPattern[value-1]){
            playSound(userClickedPattern[value-1]);
            fadeing(userClickedPattern[value-1]);
            if(gamePattern.length===userClickedPattern.length){
                setTimeout(() => {
                    xyz() 
                }, 1000);
            }

        }
        else{
            wrong()
        }

    }
function wrong(){
    $("body").addClass("game-over")
    setTimeout(() => {
        $("body").removeClass("game-over")  
    }, 100);
    var audio=new Audio("./sounds/wrong.mp3");
    audio.play();
    $("#level-title").text("Game Over,Press any key to restart game.")
    startOver();
}







function xyz(){
    userClickedPattern=[];
level++
$("#level-title").text("Level "+level);
var randomNo=Math.floor((Math.random())*4);
var randomColor=color[randomNo];
gamePattern.push(randomColor)
$("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomColor);

}
function playSound(colorto){
    var audio=new Audio("./sounds/"+colorto+".mp3");
    audio.play();
}
function fadeing(color11){
    $("#"+color11).addClass("pressed")
    setTimeout(() => {
        $("#"+color11).removeClass("pressed")  
    }, 100);
}
function startOver(){
    start=100;
    level=0;
    gamePattern=[];
}







































































/* 

var random=((Math.floor((Math.random())*4)));
var color1=color[random];
var colorSelected="."+color1;
$(document).one('keypress',function(event){
    $("h1").text("Level 1")
        $(colorSelected).fadeOut();
         var audio=new Audio("./sounds/"+color[random]+".mp3");
         audio.play();
        setTimeout(() => {
            $(colorSelected).fadeIn(100);
        }, 100);
})
$(document).click(function(key){
    var clickColor=key.target.classList[1];
    if(clickColor==color1){
        $("h1").text("Level 2") 
        $(colorSelected).addClass("pressed")
    var audio=new Audio("./sounds/"+color[random]+".mp3");
    audio.play();
    setTimeout(() => {
        $(colorSelected).removeClass("pressed")  
    }, 100);
    }
    
    else if(key.target=="body"){ var audio=new Audio("./sounds/wrong.mp3");
    audio.play();}
    console.log(key)
}) */

/* $(document).click(function(key){
    
    

})
 */