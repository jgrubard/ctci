function isUnique(string) {
  const map = {}
  for(let i = 0; i < string.length; i++) {
    const letter = string[i];
    if(!map[letter]) {
      map[letter] = 1;
    } else {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

// isUnique('john');
// isUnique('jeremy');
isUnique('supattra');

















/*function isUnique(string) {
  let result = '';
  for(let i = 0; i < string.length; i++) {
    for(let j = 0; j < result.length; j++) {
      if(string[i] === result[j]) {
        // console.log(string[i], result[j])
        console.log(false);
        return false;
      }
    }
    result += string[i];
  }
  console.log(true);
  return true; 
}

// isUnique('john');
// isUnique('jeremy');
isUnique('supattra');*/