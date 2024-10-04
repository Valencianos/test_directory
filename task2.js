// Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины. 
// Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются общими делителями для всех указанных 
// числе. В примере это будет [2, 3, 6].

const arr = [48, 12, 144]

function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
}

function gcdOfArray(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result = gcd(array[i], result);
    if (result === 1) {
      return 1;
    }
  }
  return result;
}


console.log(gcdOfArray(arr));

function commonDivisorList(num) {
  let result = [num];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      result.push(i);
      if (i !== num / i) {
        result.push(num / i);
      }
    }
  }
  return result.sort((a, b) => a - b);
}