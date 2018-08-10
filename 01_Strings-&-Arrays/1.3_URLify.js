function makeURL(string) {
  return string.split(' ').join('%20');
}

console.log(makeURL('Mr John Smith'));