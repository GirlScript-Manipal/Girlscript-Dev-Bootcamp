let qn = document.querySelector("#qn");
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");
let rightwrong = document.querySelector("#rightwrong");
let sol = document.querySelector("#sol");
let pt = document.querySelector("#points");
let image = document.querySelector("#image");
let i=-1;
let c=0;
let selected=0;

const startDiv = document.getElementById("start");
const quesDiv = document.getElementById("question");
const endDiv = document.getElementById("end");
const startButt = document.getElementById("begin");
const submitButt = document.getElementById("submit");
const nextButt = document.getElementById("next");
const ansButt0 = document.getElementsByClassName("ansbutt")[0];
const ansButt1 = document.getElementsByClassName("ansbutt")[1];
const ansButt2 = document.getElementsByClassName("ansbutt")[2];
const ansButt3 = document.getElementsByClassName("ansbutt")[3];

quesDiv.style.display = "none";
endDiv.style.display = "none";


startButt.addEventListener('click', startQuiz);
ansButt0.addEventListener('click', ()=>{selected=0; submitButt.style.display = "inline";});
ansButt1.addEventListener('click', ()=>{selected=1; submitButt.style.display = "inline";});
ansButt2.addEventListener('click', ()=>{selected=2; submitButt.style.display = "inline";});
ansButt3.addEventListener('click', ()=>{selected=3; submitButt.style.display = "inline";});
submitButt.addEventListener('click', displayResult);
nextButt.addEventListener('click', ()=>{displayQues();});

function startQuiz(){
    startDiv.style.display = "none";
    quesDiv.style.display = "inline";

    displayQues();
}

function displayQues(){
    i++;
    if(i==5)
    {
        quesDiv.style.display = "none";
        endDiv.style.display = "inline";
        if(c<=1)
            image.src = "0-1.jpg";
        else if(c<=3)
            image.src = "2-3.jpg";
        else
            image.src = "4-5.jpg";
        pt.innerHTML = "You got "+c+"/5";
    }
    submitButt.style.display = "none";
    nextButt.style.display = "none";

    document.getElementById("qn").style.display = "inline";
    ansButt0.style.display = "inline";
    ansButt1.style.display = "inline";
    ansButt2.style.display = "inline";
    ansButt3.style.display = "inline";
    rightwrong.style.display = "none";
    sol.style.display = "none";

    qn.innerHTML = theQues[i].ques;
    op1.innerHTML = theQues[i].a;
    op2.innerHTML = theQues[i].b;
    op3.innerHTML = theQues[i].c;
    op4.innerHTML = theQues[i].d;
}

function displayResult(){
    document.getElementById("qn").style.display = "none";
    ansButt0.style.display = "none";
    ansButt1.style.display = "none";
    ansButt2.style.display = "none";
    ansButt3.style.display = "none";
    rightwrong.style.display = "inline";
    sol.style.display = "block";
    if (theQues[i].correct == selected)
    {
        c++;
        console.log('correct');
        document.getElementById("rightwrong").style.color = "#005400";
        rightwrong.innerHTML = "CORRECT";
    }
    else
    {
        console.log('wrong');
        document.getElementById("rightwrong").style.color = "#c80000";
        rightwrong.innerHTML = "WRONG";
    }
    sol.innerHTML = theQues[i].solution;
    submitButt.style.display="none";
    nextButt.style.display= "inline";
}

