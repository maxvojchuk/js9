//1
const fruits = ["Mango", "Poly", "Ajax"];
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(fruits);
//2
const message = "GO-Itens це круто";
const pricePerWord = 10;
function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");
  let wordsCount = words.length;
  let totalPrice = wordsCount * pricePerWord;
  return totalPrice;
}

console.log(
  `Вартість гравіювання - ${(totalPrice = calculateEngravingPrice(
    message,
    pricePerWord
  ))}`
);
//3
const shortString = "Go-Itens";
const longString = "Це дуже цікаві курси, на який ви навчаєтесь кодингу";
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
}

console.log(formatString(shortString));
console.log(formatString(longString));
