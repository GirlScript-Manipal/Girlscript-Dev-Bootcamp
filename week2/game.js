const question = document.querySelector('#question');
const choices =Array.from(document.querySelectorAll('.choice-text'));
const progressText= document.getElementById('progressText');
const scoreText= document.querySelector('#score');
const progressBarFull = document.querySelector('progressBarFull');
console.log(progressText)

let currentQuestion = {}
let acceptingAnswers = true
let score= 0
let questionCounter = 0
let availableQuestions =[]

let questions = [
    {
         question: 'Which pair of super heroes are known as the dynamic duo?',
         choicel: 'Mermaidman and Barnacle boy',
         choice2: 'Batman and Robin',
         choice3: 'Rose and Fred west',
         choice4: 'Mario and Luigi',
         answer: 2,
    },
    {
        question: 'You are 3rd place right now in a race. What place are you in when you pass the person in 2nd place?',
        choicel: '1st',
        choice2: '2nd',
        choice3: '3rd',
        choice4: 'None of the above',
        answer: 1,
   },
   {
        question: 'A farmer has 17 sheep, all of them but 8 die. How many sheep are still standing? ',
        choicel: '8',
        choice2: '9',
        choice3: '25',
        choice4: '35',
        answer: 1,
    },
    {
        question: 'There are 45 apples in your basket. You take three apples out of the basket. How many apples are left?',
        choicel: '3',
        choice2: '42',
        choice3: '45',
        choice4: 'I dont eat apples',
        answer: 3,
   },
   {
        question: 'If a leaf falls to the ground in a forest and no one hears it, does it make a sound? ',
        choicel: 'Yes',
        choice2: 'No',
        choice3: 'Depends on how heavy is the leaf',
        choice4: 'Depends on where it landed',
        answer: 1,
    },

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter= 0
    score = 0
    availableQuestions =[...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
         LocalStorage. setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Questions ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}% `

    const questionsIndex = Math.fLoor(Math.random() * availableQuestions.Length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1) 

    acceptingAnswers=true                 
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
         if(!acceptingAnswers) return

         acceptingAnswers = false
         const selectedChoice = e.target
         const selectedAnswer = selectedChoice.dataset ['number']

         let classToApply = selectedAnswer = currentQuestion.answer ? 'correct':'incorrect'

         if(classToApply === 'correct') {
             incrementScore(SCORE_POINTS)
         }

         selectedChoice.parentElement.classList.add(classToApply)

         setTimeout (() => {
             selectedChoice.parentElement.classList.remove(classToApply)
             getNewQuestion ()

        }, 1000)
     })
 })

  incrementScore = num => {
      score += num
      scoreText.innerText =score
  }

  startGame()
