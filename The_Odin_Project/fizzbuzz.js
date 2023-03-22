//escreva um programa que receba a entrada de um usuário e imprima os números
// de um até o número digitado pelo usuário. No entanto, para múltiplos de
//três imprima Fizz em vez do número e para múltiplos de cinco imprima Buzz.
//Para números que são múltiplos de três e cinco, imprima FizzBuzz.

function numeroDigitado() {
  let numero = parseInt(document.getElementById('input_numero').value);
  return numero;
}

const element = document.getElementById('btn');
element.addEventListener('click', myFunction);
function myFunction() {
  document.getElementById('resultado').innerText = imprimeResultado();
}

function imprimeResultado() {
  for (let i = 1; i <= numeroDigitado(); i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}
