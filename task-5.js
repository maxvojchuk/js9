function checkForSpam(message) {
  const lowercasedMessage = message.toLowerCase();
  return (
    lowercasedMessage.includes("spam") || lowercasedMessage.includes("sale")
  );
}

console.log(checkForSpam("Sale"));
console.log(checkForSpam("spam"));
console.log(checkForSpam("HEllo"));
