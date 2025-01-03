/*ask 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revers = [];
for(let i = 0; i < colors.length; i++){
      const color = colors[i];
      revers.unshift(color)
};
console.log(revers)