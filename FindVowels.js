
const findVowels = str => {
    let count = 0 // initiate the count
    const vowels = ['a', 'e', 'i', 'o', 'u'] 
    
    for(let char of str.toLowerCase()) {
      // check if the character is present in the string
      if(vowels.includes(char)) {
        console.log(char);
        count++
      }
    }
    return console.log(count)
  }

// Second Solution
// const findVowels = str => {
//     const matched = str.match(/[aeiou]/gi)
//     return matched ? console.log(matched.length) : 0
// }

findVowels("Hello");