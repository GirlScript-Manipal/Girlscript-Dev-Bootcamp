const startButton = document.getElementById('str-btn')
const nextButton = document.getElementById('nxt-btn')
const questioncontainer=document.getElementById('q-container')
let shuffle, currentqindex
const questelement=document.getElementById('question')
const anselement=document.getElementById('ans-btn')
startButton.addEventListener('click',startQuiz)
nextButton.addEventListener('click',()=>{
    currentqindex++
    setnextq()
})
function startQuiz(){
    startButton.classList.add('hide')
    shuffle=questions.sort(()=> Math.random()- .5)
    currentqindex=0
    questioncontainer.classList.remove('hide')
    setnextq()

}



function setnextq(){
    resetState()
    showQ(shuffle[currentqindex])
}
function showQ(question){
    questelement.innerText=question.question
    question.answers.forEach(answer =>{
        const button =document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct=answer.correct
        }   
        button.addEventListener('click', selectAns)
        anselement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(anselement.firstChild){
        anselement.removeChild
        (anselement.firstChild)
    }
}

function selectAns(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(anselement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffle.length>currentqindex+1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
    
}
function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions=[
    {
        question:'➼ If you have it, you want to share it. If you share it, you dont have it anymore. What is it?',
        answers:[
            {text:'Love',correct:false},
            {text:'Food',correct:false},
            {text:'A Secret',correct:true},
            {text:'Talent',correct:false}
        ]
    },{
        question:'➼ What can you catch but cannot throw?',
        answers:[
            {text:'A Tennis ball',correct:false},
            {text:'A Cold',correct:true},
            {text:'Your Toys',correct:false},
            {text:'Boomerang',correct:false}
        ]
    },{
        question:'➼ Pick me up and scratch my head. I will turn red and then black. What am I?',
        answers:[
            {text:'Candle',correct:false},
            {text:'Caterpillar',correct:false},
            {text:'A Match',correct:true},
            {text:'None Of the Above',correct:false}
        ]
    },{
        question:'➼ I can be broken without being touched or even being seen. What am I?',
        answers:[
            {text:'Glass',correct:false},
            {text:'A Promise',correct:true},
            {text:'Window',correct:false},
            {text:'Ice',correct:false}
        ]
    },{
        question:'➼ What is always coming but never arrives?',
        answers:[
            {text:'A Train',correct:false},
            {text:'The Mail',correct:false},
            {text:'Paycheck',correct:false},
            {text:'Tomorrow',correct:true}
        ]
    }
]