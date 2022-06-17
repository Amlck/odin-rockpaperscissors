function computer(){
    let play = Math.random()
    if(play<0.33){return(1)}
    else if (0.33<=play && play < 0.66){return(2)}
    else if (0.66<=play){return(3)}
    else return(play)
}
function playRound(com, user){
    if (com == 1 && user == 1){alert("Draw, next round!"); return("d")}
    if (com == 1 && user == 2){alert("You win, rock beats scissors"); return("w")}
    if (com == 1 && user == 3){alert("You lose, scissors beat paper"); return("l")}
    if (com == 2 && user == 1){alert("You lose, rock beats scissors"); return("l")}
    if (com == 2 && user == 2){alert("Draw, next round!"); return("d")}
    if (com == 2 && user == 3){alert("You win, paper beats rock"); return("w")}
    if (com == 3 && user == 1){alert("You win, scissors beat paper"); return("w")}
    if (com == 3 && user == 2){alert("You lose, paper beats rock"); return("l")}
    if (com == 3 && user == 3){alert("Draw, next round!"); return("d")}
}
let highscore = 0
let userScore = 0
let comScore = 0
while(highscore < 5){
    player = Number(prompt("Enter your choice(1 for scissors, two for rocks, 3 for paper)"))
    now = playRound(computer(), player)
    if ( now == "l"){
        comScore += 1
    }
    if (now == "w"){
        userScore += 1
    }
    if (userScore > highscore){highscore = userScore}
    if (comScore > highscore){highscore = comScore}
    alert(`current score user:${userScore}, computer:${comScore}`)
}
if(userScore >= 5){alert("You win")}
else{alert("You lose")}