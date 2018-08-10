function oneAway(str1, str2){
  const diff = Math.abs(str1.length - str2.length);
  let count = 0;
  let newSmall = '';
  if(str1 === str2) {
    return true;
  } else if(diff > 1) {
    return false;
  } else if(diff === 1) {
    let larger = str1.length >= str2.length ? str1 : str2;
    let smaller = str1.length < str2.length ? str1 : str2;
    let largeIdx = 0;
    for(let i = 0; i < smaller.length; i++) {
      if(smaller[i] !== larger[largeIdx]) {
        newSmall += larger[largeIdx];
        count++;
        largeIdx++;
      }
      newSmall += smaller[i];
      largeIdx++;
    }
    if(larger.slice(0, -1) === newSmall) {
      newSmall += larger[larger.length - 1];
      count++;
    }
    console.log(larger, '->', smaller, '=>', newSmall, count);
    if(count <= 1) return true;
    return false;
  } else if(diff === 0) {
    for(let i = 0; i < str1.length; i++) {
      if(str1[i] !== str2[i]) {
        newSmall += str2[i];
        count++;
      } else {
        newSmall += str1[i];
      }
    }
    console.log(str1, '->', str2, '=>', newSmall, count);
    if(count <= 1) return true;
    return false;
  }
}

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false




// function oneAway(str1, str2){
//   const diff = Math.abs(str1.length - str2.length);
//   let larger = str1.length >= str2.length ? str1 : str2;
//   let smaller = str1.length < str2.length ? str1 : str2;
//   let largeIdx = 0;
//   let count = 0;
//   let newSmall = '';
//   if(str1 === str2) {
//     return true;
//   } else if(diff > 1) {
//     return false;
//   } else if(diff === 1) {
//     for(let i = 0; i < smaller.length; i++) {
//       if(smaller[i] !== larger[largeIdx]) {
//         newSmall += larger[largeIdx];
//         count++;
//         largeIdx++;
//       }
//       newSmall += smaller[i];
//       largeIdx++;
//     }
//     if(larger.slice(0, -1) === newSmall) {
//       newSmall += larger[larger.length - 1];
//       count++;
//     }
//     console.log(larger, '->', smaller, '=>', newSmall, count);
//     if(count <= 1) return true;
//     return false;
//   } else if(diff === 0) {
//     for(let i = 0; i < smaller.length; i++) {
//       if(smaller[i] !== larger[i]) {
//         newSmall += larger[i];
//         count++;
//       } else {
//         newSmall += smaller[i];
//       }
//     }
//     console.log(larger, '->', smaller, '=>', newSmall, count);
//     if(count <= 1) return true;
//     return false;
//   }
// }

// console.log(oneAway('pale', 'ple')); // true
// console.log(oneAway('pales', 'pale')); // true
// console.log(oneAway('pale', 'bale')); // true
// console.log(oneAway('pale', 'bake')); // false


// function oneAway(str1, str2){
//   const diff = Math.abs(str1.length - str2.length);
//   if(str1 === str2) {
//     return true;
//   } else if(diff > 1) {
//     return false;
//   } else if(diff === 1 || diff === 0) {
//     let larger = str1.length >= str2.length ? str1 : str2;
//     let smaller = str1.length < str2.length ? str1 : str2;
//     let largeIdx = 0;
//     let count = 0;
//     // let newLarge = '';
//     let newSmall = '';
//     for(let i = 0; i < larger.length; i++) {
//       // if(smaller[i] !== larger[largeIdx]) {
//       //   if(smaller[i + 1] === larger[largeIdx + 1] && i + 1 < larger.length && largeIdx + 1 < smaller.length) {
//       //     newSmall += larger[i];
//       //     largeIdx++;
//       //   }
//       //   count++;
//       // }
//       // // newLarge += larger[i];
//       // newSmall += smaller[i]
//       // largeIdx++;
//     }
//     console.log(larger, '-', smaller, '=>', newSmall, count);
//     if(count <= 1) return true;
//     return false;
//   }
// }

// console.log(oneAway('pale', 'ple')); // true
// console.log(oneAway('pales', 'pale')); // true
// console.log(oneAway('pale', 'bale')); // true
// console.log(oneAway('pale', 'bake')); // false