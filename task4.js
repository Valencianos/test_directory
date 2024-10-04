// Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит
// таблицу умножения. В консоли должна появиться таблица.

function multiplyTable(num) {
  let result = '   ';
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      if(i === 0 && j > 0){
        result += j + '  ';
      }
      else if(j == 0 && i>0){
        result += i + '  ';
      }
      else if(i>0 && j>0){
        result += (i*j) + '  ';
      }
    }
    result += '\n'
  }
  return result;
}