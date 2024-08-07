let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  if (!isNaN(Number(input))) {
    numbers.push(Number(input));
  } else {
    alert("Було введено не число, попробуйте ще раз");
  }
}

if (numbers.length > 0) {
  for (let num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
