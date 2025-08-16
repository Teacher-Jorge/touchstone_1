const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const input9 = document.getElementById('input9');
const input10 = document.getElementById('input10');

const correct1 = document.getElementById('correct1');
const correct2 = document.getElementById('correct2');
const correct3 = document.getElementById('correct3');
const correct4 = document.getElementById('correct4');
const correct5 = document.getElementById('correct5');
const correct6 = document.getElementById('correct6');
const correct7 = document.getElementById('correct7');
const correct8 = document.getElementById('correct8');
const correct9 = document.getElementById('correct9');
const correct10 = document.getElementById('correct10');

const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const q3 = document.getElementById('q3')
const q4 = document.getElementById('q4')
const q5 = document.getElementById('q5')
const q6 = document.getElementById('q6')
const q7 = document.getElementById('q7')


addEventListener('keydown', (e) => {
    const audio = document.getElementById('click')
    audio.play();
})

addEventListener('keyup', (e) => {
    if (input1.value === "Are you a member" || input1.value === "are you a member") {
        correct1.style.visibility = 'visible'
        input1.value = "Are you a member"
        input1.style.color = 'darkgreen'
        input1.style.backgroundColor = 'yellow'
        document.getElementById('input2').focus();
        input1.disabled = true
        q6.style.color = 'darkorange'

    }
})

addEventListener('keyup', (e) => {
    if (input2.value === "What's my teacher's name" || input2.value === "what's my teacher's name" || input2.value === "whats my teachers name" || input2.value === "Whats my teachers name") {
        correct2.style.visibility = 'visible'
        input2.value = "What's my teacher's name"
        input2.style.color = 'green'
        input2.style.backgroundColor = 'yellow'
        document.getElementById('input3').focus();
        input2.disabled = true
        q4.style.color = 'darkorange'
    }
})

addEventListener('keyup', (e) => {
    if (input3.value === "It's" || input3.value === "it's" || input3.value === "it is" || input3.value === "it's" || input3.value === "Its" || input3.value === "its") {
        correct3.style.visibility = 'visible'
        input3.value = "It's"
        input3.style.color = 'darkgreen'
        input3.style.backgroundColor = 'yellow'
        document.getElementById('input4').focus();
        input3.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input4.value === "Am I in room 2" || input4.value === "am I in room 2" || input4.value === "am i in room 2" || input4.value === "Am i in room 2") {
        input4.value = "Am I in room 2"
        correct4.style.visibility = 'visible'
        input4.style.color = 'darkgreen'
        input4.style.backgroundColor = 'yellow'
        document.getElementById('input5').focus();
        input4.disabled = true
        q1.style.color = 'darkorange'
    }
})

addEventListener('keyup', (e) => {
    if (input5.value === "How are you" || input5.value === "how are you") {
        input5.value = "How are you"
        correct5.style.visibility = 'visible'
        input5.style.color = 'darkgreen'
        input5.style.backgroundColor = 'yellow'
        document.getElementById('input6').focus();
        input5.disabled = true
        q2.style.color = 'darkorange'
    }
})

addEventListener('keyup', (e) => {
    if (input6.value === "What's your name" || input6.value === "what's your name" || input6.value === "Whats your name" || input6.value === "whats your name") {
        input6.value = "What's your name"
        correct6.style.visibility = 'visible'
        input6.style.color = 'green'
        input6.style.backgroundColor = 'yellow'
        document.getElementById('input7').focus();
        input6.disabled = true
        q7.style.color = 'darkorange'
    }
})

addEventListener('keyup', (e) => {
    if (input7.value === "It's" || input7.value === "it's" || input7.value === "Its" || input7.value === "its") {
        input7.value = "It's"
        correct7.style.visibility = 'visible'
        input7.style.color = 'green'
        input7.style.backgroundColor = 'yellow'
        document.getElementById('input8').focus();
        input7.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input8.value === "How do you spell your last name" || input8.value === "how do you spell your last name") {
        input8.value = "How do you spell your last name"
        correct8.style.visibility = 'visible'
        input8.style.color = 'green'
        input8.style.backgroundColor = 'yellow'
        document.getElementById('input9').focus();
        input8.disabled = true
        q3.style.color = 'darkorange'
    }
})

addEventListener('keyup', (e) => {
    if (input9.value === "What's your email address" || input9.value === "what's your email address" || input9.value === "Whats your email address" || input9.value === "whats your email address") {
        input9.value = "What's your email address"
        correct9.style.visibility = 'visible'
        input9.style.color = 'green'
        input9.style.backgroundColor = 'yellow'
        document.getElementById('input10').focus();
        input9.disabled = true
        q5.style.color = 'darkorange'
    }
})

addEventListener('keyup', (e) => {
    if (input10.value === "It's" || input10.value === "it's" || input10.value === "Its" || input10.value === "its") {
        input10.value = "It's"
        correct10.style.visibility = 'visible'
        input10.style.color = 'green'
        input10.style.backgroundColor = 'yellow'
        input10.disabled = true
    }
})


