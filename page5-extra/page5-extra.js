const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')
const input6 = document.getElementById('input6')
const input7 = document.getElementById('input7')
const input8 = document.getElementById('input8')
const input9 = document.getElementById('input9')
const input10 = document.getElementById('input10')
const input11 = document.getElementById('input11')
const input12 = document.getElementById('input12')

const correct1 = document.getElementById('correct1')
const correct2 = document.getElementById('correct2')
const correct3 = document.getElementById('correct3')
const correct4 = document.getElementById('correct4')
const correct5 = document.getElementById('correct5')
const correct6 = document.getElementById('correct6')
const correct7 = document.getElementById('correct7')
const correct8 = document.getElementById('correct8')
const correct9 = document.getElementById('correct9')
const correct10 = document.getElementById('correct10')
const correct11 = document.getElementById('correct11')

const word1 = document.getElementById('word1')
const word2 = document.getElementById('word2')
const word3 = document.getElementById('word3')
const word4 = document.getElementById('word4')
const word5 = document.getElementById('word5')
const word6 = document.getElementById('word6')
const word7 = document.getElementById('word7')
const word8 = document.getElementById('word8')
const word9 = document.getElementById('word9')
const word10 = document.getElementById('word10')
const word11 = document.getElementById('word11')
const word12 = document.getElementById('word12')



addEventListener('keydown', (e) => {
    const audio = document.getElementById('click')
    audio.play()
})

addEventListener('keyup', (e) => {
    if (input1.value === "I'm" || input1.value === "I am" || input1.value === "i am" || input1.value === "i'm") {
        correct1.style.visibility = 'visible'
        input1.value = "I'm"
        word1.style.color = 'yellow'
        input1.style.color = 'darkgreen'
        input1.style.backgroundColor = 'yellow'
        document.getElementById('input2').focus()
        input1.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input2.value === "Are you" || input2.value === 'are you') {
        correct2.style.visibility = 'visible'
        input2.value = "Are you"
        word2.style.color = 'yellow'
        input2.style.color = 'green'
        input2.style.backgroundColor = 'yellow'
        document.getElementById('input3').focus()
        input2.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input3.value === "I am" || input3.value === "I'm" || input3.value === "i am" || input3.value === "i'm")  {
        correct3.style.visibility = 'visible'
        input3.value = "I'm"
        word3.style.color = 'yellow'
        input3.style.color = 'darkgreen'
        input3.style.backgroundColor = 'yellow'
        document.getElementById('input4').focus()
        input3.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input4.value === "Am I" || input4.value === "am I" || input4.value === "am i")  {
        correct4.style.visibility = 'visible'
        input4.value = "Am I"
        word4.style.color = 'yellow'
        input4.style.color = 'darkgreen'
        input4.style.backgroundColor = 'yellow'
        document.getElementById('input5').focus()
        input4.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input5.value === "you are")  {
        input5.value = "you are"
        word5.style.color = 'yellow'
        input5.style.color = 'darkgreen'
        input5.style.backgroundColor = 'yellow'
        document.getElementById('input6').focus()
        input5.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input6.value === "You're" || input6.value === "you're" || input6.value === "you are")  {
        correct5.style.visibility = 'visible'
        input6.value = "You're"
        word6.style.color = 'yellow'
        input6.style.color = 'darkgreen'
        input6.style.backgroundColor = 'yellow'
        document.getElementById('input7').focus()
        input6.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input7.value === "Are you" || input7.value === 'are you') {
        correct6.style.visibility = 'visible'
        input7.value = "Are you"
        word7.style.color = 'yellow'
        input7.style.color = 'green'
        input7.style.backgroundColor = 'yellow'
        document.getElementById('input8').focus()
        input7.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input8.value === "I am" || input8.value === "i am")  {
        correct7.style.visibility = 'visible'
        input8.value = "I am"
        word8.style.color = 'yellow'
        input8.style.color = 'darkgreen'
        input8.style.backgroundColor = 'yellow'
        document.getElementById('input9').focus()
        input8.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input9.value === "I am" || input9.value === "I'm" || input9.value === "i am" || input9.value === "i'm")  {
        correct8.style.visibility = 'visible'
        input9.value = "I'm"
        word9.style.color = 'yellow'
        input9.style.color = 'darkgreen'
        input9.style.backgroundColor = 'yellow'
        document.getElementById('input10').focus()
        input9.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input10.value === "Are we" || input10.value === 'are we') {
        correct9.style.visibility = 'visible'
        input10.value = "Are we"
        word10.style.color = 'yellow'
        input10.style.color = 'green'
        input10.style.backgroundColor = 'yellow'
        document.getElementById('input11').focus()
        input10.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input11.value === "we are" || input11.value === "we're") {
        correct10.style.visibility = 'visible'
        input11.value = "we're"
        word11.style.color = 'yellow'
        input11.style.color = 'green'
        input11.style.backgroundColor = 'yellow'
        document.getElementById('input12').focus()
        input11.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input12.value === "we are") {
        correct11.style.visibility = 'visible'
        input12.value = "we are"
        word12.style.color = 'yellow'
        input12.style.color = 'green'
        input12.style.backgroundColor = 'yellow'
        input12.disabled = true
    }
})





