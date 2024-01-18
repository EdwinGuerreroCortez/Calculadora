import { suma, resta, multiplicacion, division } from './funciones.js';

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  let valorActual = '0'; 
  let operador = '';
  let primerValor = '';

  const actualizarDisplay = () => {
    display.value = valorActual;
  };

  const limpiarCalculadora = () => {
    valorActual = '0'; 
    operador = '';
    primerValor = '';
    actualizarDisplay();
  };

  const manejarClickNumero = (numero) => {
    if (valorActual === '0') {
      valorActual = numero;
    } else {
      valorActual += numero;
    }
    actualizarDisplay();
  };

  const manejarClickOperador = (op) => {
    if (valorActual !== '') {
      if (primerValor !== '') {
        valorActual = realizarOperacion();
        primerValor = valorActual;
        operador = op;
      } else {
        primerValor = valorActual;
        operador = op;
        valorActual = '';
      }
      actualizarDisplay();
    }
  };

  const manejarClickIgual = () => {
    if (valorActual !== '' && primerValor !== '') {
      valorActual = realizarOperacion();
      primerValor = '';
      operador = '';
      actualizarDisplay();
    }
  };

  const realizarOperacion = () => {
    const num1 = parseFloat(primerValor);
    const num2 = parseFloat(valorActual);

    switch (operador) {
      case '+':
        return suma(num1, num2);
      case '-':
        return resta(num1, num2);
      case '*':
        return multiplicacion(num1, num2);
      case '/':
        return division(num1, num2);
      default:
        return valorActual;
    }
  };

  document.getElementById('btn0').addEventListener('click', () => manejarClickNumero('0'));
  document.getElementById('btn1').addEventListener('click', () => manejarClickNumero('1'));
  document.getElementById('btn2').addEventListener('click', () => manejarClickNumero('2'));
  document.getElementById('btn3').addEventListener('click', () => manejarClickNumero('3'));
  document.getElementById('btn4').addEventListener('click', () => manejarClickNumero('4'));
  document.getElementById('btn5').addEventListener('click', () => manejarClickNumero('5'));
  document.getElementById('btn6').addEventListener('click', () => manejarClickNumero('6'));
  document.getElementById('btn7').addEventListener('click', () => manejarClickNumero('7'));
  document.getElementById('btn8').addEventListener('click', () => manejarClickNumero('8'));
  document.getElementById('btn9').addEventListener('click', () => manejarClickNumero('9'));

  document.getElementById('btnDot').addEventListener('click', () => {
    if (!valorActual.includes('.')) {
      valorActual += '.';
      actualizarDisplay();
    }
  });

  document.getElementById('btnMas').addEventListener('click', () => manejarClickOperador('+'));
  document.getElementById('btnrest').addEventListener('click', () => manejarClickOperador('-'));
  document.getElementById('btnMult').addEventListener('click', () => manejarClickOperador('*'));
  document.getElementById('btnDiv').addEventListener('click', () => manejarClickOperador('/'));

  document.getElementById('btnIgual').addEventListener('click', manejarClickIgual);

  document.getElementById('btnC').addEventListener('click', limpiarCalculadora);

  actualizarDisplay(); 
});
