function stringCompression(string) {
  let count = 0;
  let result = '';
  for(let i = 0; i < string.length; i++) {
    const letter = string[i];
    count++;
    if(letter !== string[i + 1]) {
      result += letter + count;
      count = 0;
    }
  }
  return result;
}

console.log(stringCompression('aabcccccaaa'), '=> a2b1c5a3');
console.log(stringCompression('aaaaaa'), '=> a6');