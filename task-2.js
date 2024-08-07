const message = "GO-Itens це круто";
const pricePerWord = 10;
function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");
  let wordsCount = words.length;
  let totalPrice = wordsCount * pricePerWord;
  return totalPrice;
}

console.log(
  `Вартість гравіювання - ${calculateEngravingPrice(message, pricePerWord)}`
);
