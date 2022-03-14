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
        question:'Which attribute must have a unique value each time it is used in an HTML document?',
        answers:[
            {text:'title',correct:false},
            {text:'class',correct:false},
            {text:'ID',correct:true},
            {text:'style',correct:false}
        ]
    },{
        question:' Which HTML element is not considered a landmark element?',
        answers:[
            {text:' <form>',correct:false},
            {text:' <ul>',correct:true},
            {text:' <main>',correct:false},
            {text:'<nav>',correct:false}
        ]
    },{
        question:'Which choice is not a value of the type attribute of the <input> element?',
        answers:[
            {text:'range',correct:false},
            {text:' address',correct:true},
            {text:'date',correct:false},
            {text:'password',correct:false}
        ]
    }
        
]