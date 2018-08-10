function palindromePermutation(string) {
  let str = string.split(' ').join('');
  console.log(str);
  const map = {}
  let oddCount = 0;
  for(let i = 0; i < str.length; i++) {
    const letter = str[i];
    if(!map[letter]) map[letter] = 1;
    else map[letter]++
  }
  Object.keys(map).forEach(letter => {
    if(map[letter] % 2 !== 0) {
      oddCount++;
    }
  })
  if(oddCount <= 1) {
    return true;
  }
  return false;
}

console.log(palindromePermutation('tact coa'));