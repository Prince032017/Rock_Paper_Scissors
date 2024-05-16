let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector(".msg");
const userScoreBoard = document.querySelector(".user-score");
const compScoreBoard = document.querySelector(".comp-score");

const options = ["rock","paper","scissors"];


const randomChoice=()=>{
    //generate random choice for computer
    let randomIndx=Math.floor(Math.random()*3)
    return options[randomIndx];
}

const drawGame =()=>{
    msg.innerText= "Game was draw, Play again."
    msg.style.backgroundColor = "#448FA3";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText = `You win, your ${userChoice} beats ${compChoice}`
        userScoreBoard.innerText= `${userScore}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        msg.innerText=`You loose, ${compChoice} beats your ${userChoice}`
        compScoreBoard.innerText= `${compScore}`;
        msg.style.backgroundColor = "red";
    }
}

const checkWinner =(userChoice,compChoice)=>{
    if(userChoice === compChoice){
        //Draw situation
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin = compChoice==="paper"? false: true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin =compChoice==="scissors" ? false: true;
        }else{
            //rock,paper
            userWin= compChoice==="rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        const compChoice = randomChoice();
        checkWinner(userChoice, compChoice);
    })
})