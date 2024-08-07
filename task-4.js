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
