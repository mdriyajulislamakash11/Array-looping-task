/*Task 3
Use a for...of loop to concatenate all the elements of an 
array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'*/

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let x = [] 
for(let i of numbers){
      x.push(i)
}
console.log(x.join(''))  //Output: 'TomTimTinTik'