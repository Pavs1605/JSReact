// const countries = require('./countries');
// const states = require('./states');

// Accessing the arrays
// console.log("Countries:", countries);
// console.log("Web Techs:", states);

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  
  text = text.replaceAll(',', '')
  let cons = text.split(' ')
console.log(Array.isArray(cons))
console.log(cons.length)

const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number, i) => {
  console.log(number, i)
})

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase())
  console.log(arr)
})
