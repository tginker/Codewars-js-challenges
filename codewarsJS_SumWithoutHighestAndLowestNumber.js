/*Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)

*/

//solution
function sumArray(array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 1) {
      const arr = array.sort(function(a,b){ 
          return a - b; 
      });
      arr.pop();
      arr.shift();
      let sum = 0;
      for (i = 0; i < arr.length; i++) {
          sum += arr[i];
      }
      return sum;
    }
    else {
      return 0;
    }   
  }


//tests
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(sumArray([ 6, 2, 1, 8, 10 ]), 16);
    });
  });
  

//possible solutions

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
}

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }


const sumArray = (numbers) => (
    numbers && numbers.length > 1
      ? numbers
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((sum, number) => sum + number, 0)
      : 0
);

