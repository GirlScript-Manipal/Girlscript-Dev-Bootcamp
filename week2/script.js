"use strict";
var quesDiv = document.getElementById('questions');
var introDiv = document.getElementById('intro');
var resDiv = document.getElementById('result');
var open = document.getElementById('open');

open.addEventListener('click', () => {
    introDiv.style.display = 'none';
    quesDiv.style.display = 'block';
});

var myQuiz = [
    {
        question: "1. What wand movement accompanies Wingardium Leviosa?",
        a: "Swish and flick",
        b: "Twirl and tap",
        c: "Point and jab",
        d: "Poke and prod",
        correct: "a"
    },
    {
        question: "2. In Harry’s first-year Charms exam, what object did Professor Flitwick ask them to make tap-dance across a desk?",
        a: "An apple",
        b: "Pair of shoes",
        c: "Pair of glasses",
        d: "A pineapple",
        correct: "d"
    },
    {
        question: "3. What is the correct incantation for the Summoning Charm?",
        a: "Aparecium",
        b: "Aberto",
        c: "Ascendio",
        d: "Accio",
        correct: "d"
    },
    {
        question: "4.What is the opposite of the Summoning Charm?",
        a: "The vaulting charm",
        b: "The repelling charm",
        c: "The banishing charm",
        d: "The severing charm",
        correct: "c"
    },
    {
        question: "5. What is the incantation of the Banishing Charm?",
        a: "Depulso",
        b: "Repello",
        c: "Bombarda",
        d: "Salvio Hexia",
        correct: "a"
    },
    {
        question: "6. What Charm did Harry slightly overdo in his third-year exam, that left Ron in fits of hysterical laughter?",
        a: "The Animation Charm",
        b: "The Cheering Charm",
        c: "The Singing Charm",
        d: "The Tickling Charm",
        correct: "b"
    },
    {
        question: "7. In Half-Blood Prince, what happened to Harry’s cup of vinegar when he tried to turn it into wine?",
        a: "It vanished",
        b: "It exploded",
        c: "It turned into Butterbeer",
        d: "It turned into ice",
        correct: "d"
    },
    {
        question: "8. If you were to cast Aguamenti what would happen?",
        a: "It would vanish any water in front of you",
        b: "Clean, drinkable water would appear from your wand",
        c: "It would boil water",
        d: "It would allow you to control the movement of water",
        correct: "b"
    },
    {
        question: "9. What creature did Ron accidentally poke in the eye when practising Silencio?",
        a: "A bullfrog",
        b: "A raven",
        c: "A rooster",
        d: "A cat",
        correct: "a"
    },
    {
        question: "10. In the practical for Harry’s Charms O.W.L., what two spells did he mix up?",
        a: "The Quieting Charm and Amplifying Charm",
        b: "The Locking Charm and Unlocking Charm",
        c: "The Bird-Conjuring Charm and Spider-Banishing Charm",
        d: "The Growth Charm and Colour Change Charm",
        correct: "d"
    }
];

let points=0;
let ind=0;
const ques = document.getElementById('q');
const optA = document.getElementById('op_a');
const optB = document.getElementById('op_b');
const optC = document.getElementById('op_c');
const optD = document.getElementById('op_d');
const ans = document.getElementsByName('answer');
showQues();

const images = ['hermione.jpg', 'harry.jfif', 'ron.jfif'];

function clearAll(){
    for(var i=0; i<ans.length; i++){
        ans[i].checked = false;
    }
}

function showQues(){
    clearAll();
    console.log("index = " + ind);
    const cur = myQuiz[ind];
    document.getElementById('status').innerText = "Question " + (ind+1) + "/10";
    ques.innerText = cur.question;
    optA.innerText = cur.a;
    optB.innerText = cur.b;
    optC.innerText = cur.c;
    optD.innerText = cur.d;
}
var check=optD;
function isChecked(){
    let answer;
    for(var i=0; i<ans.length; i++){
        if(ans[i].checked){
            answer = ans[i].id;
        }
    }

    switch(answer){
        case "a": check = optA; break;
        case "b": check = optB; break;
        case "c": check = optC; break;
        case "d": check = optD; break;
    }
    return answer;
}

function getGrade(){
    var grade;
    if(points>9)
        grade = 'O';
    else if(points>=8)
        grade = 'E'
    else if(points>=6)
        grade = 'A'
    else if(points>=4)
        grade = 'P'
    else if(points>=2)
        grade = 'D'
    else
        grade = 'T'

    return grade;
}

function disp(grade){
    quesDiv.style.display = 'none';
    resDiv.style.display = 'block';

    const msg1_txt = document.getElementById('msg1_txt');
    const msg2_txt = document.getElementById('msg2_txt');
    const dispImg = document.getElementById('character');
    const pointsDisp = document.getElementById('pts');
    const gradeDisp = document.getElementById('g');

    pointsDisp.innerHTML = "You have scored " + points + " out of 10!";
    switch(grade){
        case 'O':
        {
            msg1_txt.innerHTML = "Congratulations!";
            msg2_txt.innerHTML = "You have passed your O.W.L Examination!";
            dispImg.src="hermione.jpg";
            gradeDisp.innerHTML = "Grade obtained - O (Outstanding)";
        }break;

        case 'E':
        {
            msg1_txt.innerHTML = "Congratulations!";
            msg2_txt.innerHTML = "You have passed your O.W.L Examination!";
            dispImg.src="hermione.jpg";
            gradeDisp.innerHTML = "Grade obtained - E (Exceeds Expectations)";
        }break;

        case 'A':
        {
            msg1_txt.innerHTML = "Congratulations!";
            msg2_txt.innerHTML = "You have passed your O.W.L Examination!";
            dispImg.src="harry.jfif";
            gradeDisp.innerHTML = "Grade obtained - A (Acceptable)";
        }break;

        case 'P':
        {
            msg1_txt.innerHTML ="Better luck next time!";
            msg2_txt.innerHTML = "You have failed your O.W.L Examination";
            dispImg.src="harry.jfif";
            gradeDisp.innerHTML = "Grade obtained - P (Poor)";
        }break;

        case 'D':
        {
            msg1_txt.innerHTML ="Better luck next time!";
            msg2_txt.innerHTML = "You have failed your O.W.L Examination";
            dispImg.src="ron.jfif";
            gradeDisp.innerHTML = "Grade obtained - D (Dreadful)";
        }break;

        case 'T':
        {
            msg1_txt.innerHTML ="Better luck next time!";
            msg2_txt.innerHTML = "You have failed your O.W.L Examination";
            dispImg.src="ron.jfif";
            gradeDisp.innerHTML = "Grade obtained - T (Troll)";
        }
    }
}

const btn = document.getElementById('sub');
btn.addEventListener('click', () => {
    var answers = isChecked();
    if(answers === myQuiz[ind].correct){
            check.style.color = "green";
            points++;}
    else check.style.color = "red";
      setTimeout(()=> {
        if(ind<myQuiz.length-1){
            ind++;
            check.style.color = "#939196";
            showQues();
        }
        else{
            const grade = getGrade();
            disp(grade);
        }
      }, 500);
    
});