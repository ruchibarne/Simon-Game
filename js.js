let gameSeq = [];
let userSeq = [];
let btns = ["C1" , "C2" , "C3" , "C4"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function() {
    if(started==false){
        console.log("game is started");
        started = true;
        levelUp();
    }

 });

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
 }

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
 }

 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randInd = Math.floor(Math.random()*3);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    /*console.log(randInd);
    console.log(randColor);
    console.log(randBtn);*/
    gameFlash(randBtn);
 }

 function checkAns(ind){
    if(userSeq[ind] == gameSeq[ind]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML =`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.background ="red";
        setTimeout(function(){
            document.querySelector("body").style.background ="white";
        },150);
        reset();
    }
 }

 function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
 }

 function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
 }