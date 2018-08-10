function stringRotation(string, rotatedStr) {
  return isSubstring(rotatedStr, string + string);
}

console.log(stringRotation('waterbottle', 'erbottlewat'), '=> true');
console.log(stringRotation('waterbottle', 'erbotlewatt'), '=> false');
console.log(stringRotation('aaata', 'aataa'), '=> true');

function isSubstring(sub, string) {
  for(let i = 0; i < string.length; i++) {
    if(string[i] === sub[0]) {
      if(sub === string.slice(i, i + sub.length)) {
        return true;
      }
    }
  }
  return false;
}


// console.log(isSubstring('pine', 'happiness'))



// function stringRotation(string, rotatedStr) {
//   for(let i = 0; i < rotatedStr.length; i++) {
//     const newSub = rotatedStr.slice(i) + rotatedStr.slice(0, i);
//     if(isSubstring(newSub, string)) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(stringRotation('waterbottle', 'erbottlewat'), '=> true');
// console.log(stringRotation('waterbottle', 'erbotlewatt'), '=> false');
// console.log(stringRotation('aaata', 'aataa'), '=> true');

// function isSubstring(sub, string) {
//   for(let i = 0; i < string.length; i++) {
//     if(string[i] === sub[0]) {
//       if(sub === string.slice(i, i + sub.length)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }


// // console.log(isSubstring('pine', 'happiness'))