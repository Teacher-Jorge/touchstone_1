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
const correct12 = document.getElementById('correct12')

addEventListener('keyup', (e) => {
    if (input1.value === "are") {
        correct1.style.visibility = 'visible'
        input1.style.color = 'darkgreen'
        input1.style.backgroundColor = 'yellow'
        document.getElementById('input2').focus()
        document.getElementById('click').play();
        input1.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input2.value === "'m" || input2.value === 'am') {
        input2.value = "'m"
        correct2.style.visibility = 'visible'
        input2.style.color = 'green'
        input2.style.backgroundColor = 'yellow'
        document.getElementById('input3').focus()
        document.getElementById('click').play()
        input2.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input3.value === "thanks") {
        document.getElementById('click').play()
        correct3.style.visibility = 'visible'
        input3.style.color = 'darkgreen'
        input3.style.backgroundColor = 'yellow'
        document.getElementById('input4').focus()
        input3.disabled = true
       
    }
})

addEventListener('keyup', (e) => {
    if (input4.value === "morning") {
        document.getElementById('click').play()
        correct4.style.visibility = 'visible'
        input4.style.color = 'darkgreen'
        input4.style.backgroundColor = 'yellow'
        document.getElementById('input5').focus()
        input4.disabled = true
       
    }
})

addEventListener('keyup', (e) => {
    if (input5.value === "are") {
        document.getElementById('click').play()
        correct5.style.visibility = 'visible'
        input5.style.color = 'darkgreen'
        input5.style.backgroundColor = 'yellow'
        document.getElementById('input6').focus()
        input5.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input6.value === "good" || input6.value === 'fine') {
        document.getElementById('click').play()
        correct6.style.visibility = 'visible'
        input6.style.color = 'green'
        input6.style.backgroundColor = 'yellow'
        document.getElementById('input7').focus()
        input6.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input7.value === "'m" || input7.value === 'am') {
        input7.value = "'m"
        document.getElementById('click').play()
        correct7.style.visibility = 'visible'
        input7.style.color = 'green'
        input7.style.backgroundColor = 'yellow'
        document.getElementById('input8').focus()
        input7.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input8.value === "Hello" || input8.value === 'Hi' || input8.value === "hello" || input8.value === 'hi') {
        input8.value = "Hi"
        document.getElementById('click').play()
        correct8.style.visibility = 'visible'
        input8.style.color = 'green'
        input8.style.backgroundColor = 'yellow'
        document.getElementById('input9').focus()
        input8.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input9.value === "Nice" || input9.value === "nice" ) {
        input9.value = "Nice"
        document.getElementById('click').play()
        correct9.style.visibility = 'visible'
        input9.style.color = 'darkgreen'
        input9.style.backgroundColor = 'yellow'
        document.getElementById('input10').focus()
        input9.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input10.value === "Hi" || input10.value === "Hello" || input10.value === "hi" || input10.value === "hello") {
        input10.value = "Hello"
        document.getElementById('click').play()
        correct10.style.visibility = 'visible'
        input10.style.color = 'darkgreen'
        input10.style.backgroundColor = 'yellow'
        document.getElementById('input11').focus()
        input10.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input11.value === "you") {
        document.getElementById('click').play()
        correct11.style.visibility = 'visible'
        input11.style.color = 'darkgreen'
        input11.style.backgroundColor = 'yellow'
        document.getElementById('input12').focus()
        input11.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input12.value === "meet") {
        document.getElementById('click').play()
        correct12.style.visibility = 'visible'
        input12.style.color = 'darkgreen'
        input12.style.backgroundColor = 'yellow'
        input12.disabled = true
    }
})
