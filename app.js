 let gameSeq=[];
 let userSeq=[];

 let btns=["yellow","red","purple","green"];
 let started=false;
 let level=0;
 let h2=document.querySelector("h2");
  document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started : ");
        started=true;
        levelup();
    }
 });

 function gameflash(btn){
     btn.classList.add("flash")
     setTimeout(function(){
        btn.classList.remove("flash");
     },250);
 }
 function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
       btn.classList.remove("userflash");
    },250);
}
 function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

 // here you can select range 0-3 :
  let randidx=Math.floor(Math.random()*3);
  let randcolor=btns[randidx];
  let randbtn=document.querySelector(`.${randcolor}`);

// console.log(randidx);
// console.log(randcolor);
// console.log(randbtn);
gameSeq.push(randcolor);
console.log(gameSeq); 

//  here call the function :
    gameflash(randbtn);
 }

function checkans(idx){
    // console.log("curr level ",level);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value ");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else {
          h2.innerHTML=`Game over ! Your score was <b> ${level} </b> <br> Press any key to start. `; 
          reset();
    }
}

function btnpress(){
    //  console.log(this)
    let btn=this;
    userflash(btn);

    usercolor= btn.getAttribute("id");
    // console.log(usercolor);
    userSeq.push(usercolor);
 checkans(userSeq.length-1); 
    // console.log("button is press : ");
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}


function reset(){
     started=false;
     gameSeq=[];
     userSeq=[];
     level=0;
}
  

