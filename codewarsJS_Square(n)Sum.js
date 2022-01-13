/*Description:
Complete the square sum function so that it squares each number passed into
 it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

//my solution
function squareSum(numbers){
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i]; 
  }
  return sum;
}


//some possible solutions
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}


function squareSum(numbers) {
  return numbers.reduce((s,a)=>s+a*a,0);
}

const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)

function squareSum(numbers){
  return numbers.reduce(function(p, c) { return p + Math.pow(c, 2); }, 0);
}


