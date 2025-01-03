/*Task 2
Write a JavaScript code to get the even numbers from an array
 using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 78, 46]*/

// way 1
const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = [];
for(let i = 0; i < numbers.length; i++){
      const result = numbers[i];
      if(result % 2 === 0){
            even.push(result);
      }
}
console.log(even);


// way 2
const numbers = [12, 98, 5, 41, 23, 78, 46];
let n = [];
for(const i of numbers){
      if(i % 2 === 0){
            n.push(i)
      }
}
console.log(n)
