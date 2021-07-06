//COOKIE STUFF
//sets per match
var sets = localStorage.getItem(4);

//games  per set
var games = localStorage.getItem(3);

function setsToWin() {
    var s = parseInt(sets)
    switch (s) {
        case 1:
            return 1;
            break;
        case 3:
            return 2;
            break;
        case 5:
            return 3;
            break;
  }
}
    var sets_to_win = setsToWin()
  alert(`sets to win ${sets_to_win}`)

//BUTTONS
//player 1 point button
const player1button = document.getElementById("p1b");
//player 2 point button
const player2button =document.getElementById("p2b");
//events of point buttons
player1button.addEventListener("click", increasePoint1);
player2button.addEventListener("click",increasePoint2);

//player 1 redo point button
const redo1button = document.getElementById("r1b");
//player 2 redo point button
const redo2button = document.getElementById("r2b");

//events of redo buttons
redo1button.addEventListener("click", decreasePoint1);
redo2button.addEventListener("click", decreasePoint2);

//it switches
//if the pllayer
//wants to have add or not
const noAdd = true;

//LABELS (SCORE OF CURRENT GAME)
let p1scoreLabel = document.getElementById("p1score");
let p2scoreLabel = document.getElementById("p2score");

//DIVS (CURRENT SET SOCRE)
var gamePlayer1 = document.getElementById("p1s0");
let game1 = 0;

var gamePlayer2 = document.getElementById("p2s0");
let game2 = 0;

//sets won by each player
//with these values you can know when a match is done
let p1amountofsets = 0;

let p2amountofsets = 0;



function increasePoint1(){
    p1scoreLabel.innerHTML = point(p1scoreLabel.innerHTML);
    var p = parseInt(p1scoreLabel.innerHTML);
    if( gamePlayer1 != null)
    {
        if (p===0){
            game1++
            gamePlayer1.innerHTML = game1;
             if(setFinished(game1,1)){
               // gamePlayer1 = document.getElementById(`player1__game${}`);
               alert("se acabó el set p1");
               p1scoreLabel.innerHTML=0;
               p2scoreLabel.innerHTML=0;
               p1amountofsets++;
             }
             if (matchFinished()){
                alert("se acabó el partido");
             }
        }
    }else{
        alert("el boton de p1 ya no está referenciado")

    }
}

function increasePoint2 () {
    p2scoreLabel.innerHTML = point(p2scoreLabel.innerHTML);
    var p = parseInt(p2scoreLabel.innerHTML);

    if (p===0){
        game2++
        gamePlayer2.innerHTML = game2;
         if(setFinished(game2,2)){
           // gamePlayer1 = document.getElementById(`player1__game${}`);
           alert("se acabó el set p2");
           p1scoreLabel.innerHTML=0;
           p2scoreLabel.innerHTML=0;
           p2amountofsets++;
         }
         if (matchFinished()){
            alert("se acabó el partido");
         }
    }
}


function point(x){
    switch (x){
        case "0":
            return 15;
        break;
        case "15":
            return 30;
        break;
        case "30":
            return 40;
        break;
        case "40":
          return 0;
        break;
    }
}

function setFinished(x,player) {
    if (player == 1){
        if (x==games){
            numberoftheid = parseInt(gamePlayer1.id.charAt(gamePlayer1.id.length-1))
            var n = (parseInt(numberoftheid)+1);
            
            idp1 = (`p1s${n}`)
            idp2 = (`p2s${n}`)
           
            gamePlayer1 = document.getElementById(idp1);
            gamePlayer2 = document.getElementById(idp2);
            game1 = 0;
            game2 = 0;
            return true;
        }
    }else if (player == 2){
        if (x==games){
            numberoftheid = parseInt(gamePlayer2.id.charAt(gamePlayer2.id.length-1))
            var n = (parseInt(numberoftheid)+1);
            alert(n+" is the value of n")
            idp1 = (`p1s${n}`)
            idp2 = (`p2s${n}`)
           
            gamePlayer1 = document.getElementById(idp1);
            gamePlayer2 = document.getElementById(idp2);
            game1 = 0;
            game2 = 0;
            return true;
        }
    }
    return false;
}

function matchFinished(){
    if (p1amountofsets == sets_to_win|| p2amountofsets == sets_to_win){
        alert("a apagar los botones")
        player1button.disabled = true;
        player2button.disabled = true;
        player1button.id = "disabled";
        player2button.id = "disabled";
    }
}


function decreasePoint1(){
    p1scoreLabel.innerHTML = decreasePoint(p1scoreLabel.innerHTML);
}

function decreasePoint2(){
    p2scoreLabel.innerHTML = decreasePoint(p2scoreLabel.innerHTML);
}

function decreasePoint(x){
    switch (x){
        case "40":
            return 30;
        break;
        case "30":
            return 15;
        break;
        case "15":
            return 0;
        break;
        case "0":
            return 0;
        break;
    }
}