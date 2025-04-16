const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
const btn0 = document.getElementById('btn0')
const equals = document.getElementById('equals')
const divide = document.getElementById('divide')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const multiply = document.getElementById('multiply')
const reset = document.getElementById('reset')
const input = document.getElementById('input')
const btnInput = document.querySelectorAll(".btnInput")

btnInput.forEach((btn) => {
    btn.addEventListener('click', () => {

        if (input.value === "Error"|| input.value==="undefined") {
            input.value = ""
        }
        input.value += btn.innerText
    })
})

equals.addEventListener('click', () => {
    calculate()
})

function calculate() {
    let answer = input.value.replace(/[^-()\d/*+.]/g, '');

    try {
        display = eval(answer)
        input.value = display
    }
    catch (mistake) {
        console.error('Error in calculation', mistake);
        input.value = 'Error';
    }


}
reset.addEventListener('click', () => {
    input.value = ""
})


