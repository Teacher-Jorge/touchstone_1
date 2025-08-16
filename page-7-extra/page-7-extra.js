const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');

const correct1 = document.getElementById('correct1');
const correct2 = document.getElementById('correct2');
const correct3 = document.getElementById('correct3');
const correct4 = document.getElementById('correct4');
const correct5 = document.getElementById('correct5');
const correct6 = document.getElementById('correct6');
const correct7 = document.getElementById('correct7');
const correct8 = document.getElementById('correct8');

addEventListener('keydown', (e) => {
    const audio = document.getElementById('click')
    audio.play();
})

addEventListener('keyup', (e) => {
    if (input1.value === "Are" || input1.value === "are") {
        correct1.style.visibility = 'visible'
        input1.value = "Are"
        input1.style.color = 'darkgreen'
        input1.style.backgroundColor = 'yellow'
        document.getElementById('input2').focus();
        input1.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input2.value === "am" || input2.value === "'m") {
        correct2.style.visibility = 'visible'
        input2.value = "'m"
        input2.style.color = 'green'
        input2.style.backgroundColor = 'yellow'
        document.getElementById('input3').focus();
        input2.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input3.value === "What is" || input3.value === "What's" || input3.value === "what is" || input3.value === "what's") {
        correct3.style.visibility = 'visible'
        input3.value = "What's"
        input3.style.color = 'darkgreen'
        input3.style.backgroundColor = 'yellow'
        document.getElementById('input4').focus();
        input3.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input4.value === "is" || input4.value === "'s") {
        input4.value = "is"
        correct4.style.visibility = 'visible'
        input4.style.color = 'darkgreen'
        input4.style.backgroundColor = 'yellow'
        document.getElementById('input5').focus();
        input4.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input5.value === "phone") {
        input5.value = "phone"
        correct5.style.visibility = 'visible'
        input5.style.color = 'darkgreen'
        input5.style.backgroundColor = 'yellow'
        document.getElementById('input6').focus();
        input5.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input6.value === "It is" || input6.value === "it is" || input6.value === "It's" || input6.value === "it's") {
        input6.value = "It's"
        correct6.style.visibility = 'visible'
        input6.style.color = 'green'
        input6.style.backgroundColor = 'yellow'
        document.getElementById('input7').focus();
        input6.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input7.value === "address") {
        input7.value = "address"
        correct7.style.visibility = 'visible'
        input7.style.color = 'green'
        input7.style.backgroundColor = 'yellow'
        document.getElementById('input8').focus();
        input7.disabled = true
    }
})

addEventListener('keyup', (e) => {
    if (input8.value === "It is" || input8.value === "It's" || input8.value === "it is" || input8.value === "it's") {
        input8.value = "It's"
        correct8.style.visibility = 'visible'
        input8.style.color = 'green'
        input8.style.backgroundColor = 'yellow'
        input8.disabled = true
    }
})


