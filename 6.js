function doubleChar(str) {
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  
  return result;
}

console.log(doubleChar("String"));
console.log(doubleChar("Hello World!"));
console.log(doubleChar("1234!_ "));
