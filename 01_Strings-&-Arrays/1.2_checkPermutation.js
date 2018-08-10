function checkPermutation(stringOne, stringTwo) {
  const one = stringOne.split('').sort().join('');
  const two = stringTwo.split('').sort().join('');
  console.log(one, two);
  console.log(one === two);
  return one === two;
}

checkPermutation('hats', 'shat');




// function checkPermutation(stringOne, stringTwo) {
//   let oneIdx = 0;
//   let twoIdx = 0;
//   // console.log(mapOne, mapTwo)
//   if(stringOne.length !== stringTwo.length) {
//     console.log(false);
//     return;
//   }
//   while(twoIdx < stringTwo.length) {

//     if(oneIdx === stringOne.length - 1) {
//       oneIdx = 0;
//     }
//   }
// }

// checkPermutation('hats', 'shat')