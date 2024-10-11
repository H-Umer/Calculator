// let display = document.getElementById('input-box');
// let button = document.querySelectorAll('button');

// let string = "";
// let arrayBtn = Array.from(button);

// arrayBtn.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         if (e.target.innerHTML == 'DEL') {
//             string = string.substring(0, string.length - 1);
//             display.value = string;
//         } else if (e.target.innerHTML == 'AC') {
//             string = "";
//             display.value = string;
//         } else if (e.target.innerHTML == '=') {
//             try {
//                 string = parseInt(string);
//                 // string = eval(string);
//                 display.value = string;
//             } catch (error) {
//                 display.value = "Error";
//                 string = "";
//             }
//         } else {
//             string += e.target.innerHTML;
//             display.value = string;
//         }
//     });
// });





let inputBox = document.getElementById('input-box');
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

// Number buttons
document.querySelectorAll('.button button:not(.operation)').forEach(button => {
  button.addEventListener('click', () => {
    inputBox.value += button.textContent;
  });
});

// Operation buttons
document.querySelectorAll('.operation').forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      inputBox.value = '';
      num1 = '';
      num2 = '';
      operator = '';
    } else if (button.textContent === 'DEL') {
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (button.textContent === '=') {
      num2 = inputBox.value.slice(num1.length + 1);
      calculate();
    } else {
      num1 = inputBox.value;
      operator = button.textContent;
      inputBox.value += operator;
    }
  });
});

function calculate() {
  switch (operator) {
    case '+':
      result = parseInt(num1) + parseInt(num2);
      break;
    case '-':
      result = parseInt(num1) - parseInt(num2);
      break;
    case '*':
      result = parseInt(num1) * parseInt(num2);
      break;
    case '/':
      result = parseInt(num1) / parseInt(num2);
      break;
    case '%':
      result = parseInt(num1) % parseInt(num2);
      break;
  }
  inputBox.value = result;
}
