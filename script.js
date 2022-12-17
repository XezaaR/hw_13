//task calculate
function calc() {
    let firstValue = +document.getElementById('first_value').value;
    let secondValue = +document.getElementById('second_value').value;
    let operation = document.getElementById('operator').value;
    let result = 0;

    switch (operation) {
        case '+':
            result =  firstValue + secondValue;
            break;
        case '-':
            result =  firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result =  firstValue / secondValue;
            break;
    }
    document.getElementById("res_calc").textContent = result;
}
//task array
let numbers = [];

function addItem(){
    let number = +document.querySelector('#item_input').value;

    numbers.push(number);

    document.querySelector('#array_result').textContent = JSON.stringify(numbers);

    document.body.innerHTML += ' ';

    let summary = 0;
    for (let i = 0; i < numbers.length; i++) {
        summary += numbers[i];
    }

    document.querySelector('#sum_item').textContent = summary;
}

//task reverse number
function reverseNumber(){
    let number = document.querySelector('#number_input').value;
    let reversed = '';

    for (let i = number.length - 1; i >= 0; i--) {
        reversed += number[i];
    }

    document.querySelector('#reverse_result').textContent = reversed;
}
