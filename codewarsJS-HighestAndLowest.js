/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

//my solution

function highAndLow(numbers){
  let myArr = numbers.split(" ");
  myArr.sort(function(x,y){
    return x - y;
  });
  return  myArr[myArr.length-1] + ' ' + myArr[0];
}


//tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");   
  });
});

//alternative solutions
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}

function highAndLow(numbers){
  let arr = numbers.split(' ').map(Number);  
  return Math.max(...arr) + ' ' + Math.min(...arr);
}

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number)
  
  var min = Math.min.apply(null, numbers)
  var max = Math.max.apply(null, numbers)
  
  return max + ' ' + min
}
