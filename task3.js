// Написать функцию/метод, которая возвращает массив простых чисел в диапазоне (2 числа - минимальное и максимальное)
// заданных чисел. Например, на вход переданы 2 числа: от 11 до 20 (диапазон считается включая граничные значения).
// На выходе программа должна выдать [11, 13, 17, 19]

function isPrime(num) {
  if (num <= 1) return false; //
  if (num % 2 === 0 && num > 2) return false;
  for(let i = 3; i <= Math.sqrt(num); i += 2) {
    if(num % i === 0) return false;
  }
  return true;
}

function simpleNumbers(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}