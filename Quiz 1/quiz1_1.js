const btn1a = document.getElementById('btn1a')
const btn1b = document.getElementById('btn1b')
const btn1c = document.getElementById('btn1c')

const btn2a = document.getElementById('btn2a')
const btn2b = document.getElementById('btn2b')
const btn2c = document.getElementById('btn2c')

const btn3a = document.getElementById('btn3a')
const btn3b = document.getElementById('btn3b')
const btn3c = document.getElementById('btn3c')

const btn4a = document.getElementById('btn4a')
const btn4b = document.getElementById('btn4b')
const btn4c = document.getElementById('btn4c')

const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')



const checkBtnA = document.getElementById('checkBtnA')


let score = document.getElementById('score')
let valor = score.innerHTML

let btnPlay = document.getElementById('btnPlay')
let btnPause = document.getElementById('btnPause')


btnPlay.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    let listening = document.getElementById('listening')
    listening.play()
})

btnPause.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    let listening = document.getElementById('listening')
    listening.pause()
})

btn1a.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option1.innerHTML = "a new student."
    btn1a.style.boxShadow = 'none'
    }
)

btn1b.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option1.innerHTML = "Mary's friend."
    btn1b.style.boxShadow = 'none'
})

btn1c.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option1.innerHTML = "the teacher."
    btn1c.style.boxShadow = 'none'
    valor++
})

//2

btn2a.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option2.innerHTML = " NGUYAN"
    btn2a.style.boxShadow = 'none'
})

btn2b.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option2.innerHTML = " NGUYEN"
    btn2b.style.boxShadow = 'none'
    valor++
})

btn2c.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option2.innerHTML = " NJUYEN"
    btn2c.style.boxShadow = 'none'
})

//3

btn3a.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option3.innerHTML = " 3."
    btn3a.style.boxShadow = 'none'
    
})

btn3b.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option3.innerHTML = " B."
    btn3b.style.boxShadow = 'none'
    valor++
})

btn3c.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option3.innerHTML = " K."
    btn3c.style.boxShadow = 'none'
})

//4

btn4a.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option4.innerHTML = " Lizzie"
    btn4a.style.boxShadow = 'none'
    checkBtnA.style.visibility = 'visible'
})

btn4b.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option4.innerHTML = " Yoshida"
    btn4b.style.boxShadow = 'none'
    checkBtnA.style.visibility = 'visible'
})

btn4c.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    option4.innerHTML = " Yo-yo"
    btn4c.style.boxShadow = 'none'
    valor++
    checkBtnA.style.visibility = 'visible'
})

checkBtnA.addEventListener('click', function() {
     const audio = document.getElementById('click')
     audio.play()
        btn1c.style.backgroundColor = 'lime'
        btn1c.style.color = 'darkgreen'
        btn1c.style.boxShadow = 'none'
        btn2b.style.backgroundColor = 'lime'
        btn2b.style.color = 'darkgreen'
        btn2b.style.boxShadow = 'none'
        btn3b.style.backgroundColor = 'lime'
        btn3b.style.color = 'darkgreen'
        btn3b.style.boxShadow = 'none'
        btn4c.style.backgroundColor = 'lime'
        btn4c.style.color = 'darkgreen'
        btn4c.style.boxShadow = 'none'
        score.innerHTML = valor
    })

//EXERCISE B

const inputb1 = document.getElementById('inputb1')
const inputb2 = document.getElementById('inputb2')
const inputb3 = document.getElementById('inputb3')
const inputb4 = document.getElementById('inputb4')
const inputb5 = document.getElementById('inputb5')
const inputb6 = document.getElementById('inputb6')
const inputb7 = document.getElementById('inputb7')
const inputb8 = document.getElementById('inputb8')

const checkBtnB = document.getElementById('checkBtnB')

addEventListener('keydown', (e) => {
    const audio = document.getElementById('click')
    audio.play()
})

inputb1.addEventListener('keyup', (e) => {
    if (inputb1.value === "are" || inputb1.value === "'re") {
        valor++
    } 
})

inputb2.addEventListener('keyup', (e) => {
    if (inputb2.value === "am") {
        valor++
    }
})

inputb3.addEventListener('keyup', (e) => {
    if (inputb3.value === "Am") {
        valor++
    } 
})

inputb4.addEventListener('keyup', (e) => {
    if (inputb4.value === "are" || inputb4.value === "'re") {
        valor++
    } 
})

inputb5.addEventListener('keyup', (e) => {
    if (inputb5.value === "Are") {
        valor++
    } 
})

inputb6.addEventListener('keyup', (e) => {
    if (inputb6.value === "am" || inputb6.value === "'m") {
        valor++
    } 
})

inputb7.addEventListener('keyup', (e) => {
    if (inputb7.value === "Are") {
        valor++
    } 
})

inputb8.addEventListener('keyup', (e) => {
    if (inputb8.value === "am" || inputb8.value === "'m") {
        valor++
    }
    checkBtnB.style.visibility = 'visible'
})


checkBtnB.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputb1.value === "are") {
        inputb1.style.color = "green"
    }
})

checkBtnB.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputb2.value === "am" || inputb2.value === "'m") {
        inputb2.style.color = "green"
    }
})

checkBtnB.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputb3.value === "Am") {
        inputb3.style.color = "green"
    }
})

checkBtnB.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputb4.value === "are" || inputb4.value === "'re") {
        inputb4.style.color = "green"
    }
})

checkBtnB.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputb5.value === "Are") {
        inputb5.style.color = "green"
    }
})

checkBtnB.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputb6.value === "am" || inputb6.value === "'m") {
        inputb6.style.color = "green"
    }
})

checkBtnB.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputb7.value === "Are") {
        inputb7.style.color = "green"
    }
})

checkBtnB.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputb8.value === "am" || inputb8.value === "'m") {
        inputb8.style.color = "green"
    }
})

//EXERCISE C

const inputc1 = document.getElementById('inputc1')
const inputc2 = document.getElementById('inputc2')
const inputc3 = document.getElementById('inputc3')
const inputc4 = document.getElementById('inputc4')
const inputc5 = document.getElementById('inputc5')

const checkBtnC = document.getElementById('checkBtnC')

inputc1.addEventListener('keyup', (e) => {
    if (inputc1.value === "first name") {
        valor++
    } 
})

inputc2.addEventListener('keyup', (e) => {
    if (inputc2.value === "last name") {
        valor++
    }
})

inputc3.addEventListener('keyup', (e) => {
    if (inputc3.value === "phone number") {
        valor++
    } 
})

inputc4.addEventListener('keyup', (e) => {
    if (inputc4.value === "email address") {
        valor++
    } 
})

inputc5.addEventListener('keyup', (e) => {
    if (inputc5.value === "teacher's name" || inputc5.value === "teachers name" ) {
        valor++
        checkBtnC.style.visibility = 'visible'
    } 
})

checkBtnC.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputc1.value === "first name") {
        inputc1.style.color = "green"
    }
})

checkBtnC.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputc2.value === "last name") {
        inputc2.style.color = "green"
    }
})

checkBtnC.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputc3.value === "phone number") {
        inputc3.style.color = "green"
    }
})

checkBtnC.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputc4.value === "email address") {
        inputc4.style.color = "green"
    }
})

checkBtnC.addEventListener('click', function() {
    audio = document.getElementById('click')
    audio.play()
    score.innerHTML = valor
    if (inputc5.value === "teachers name" || inputc5.value === "teacher's name" ) {
        inputc5.style.color = "green"
    }
})








  


  
  
















