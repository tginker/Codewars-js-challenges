/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sum = 0;
    const posArr = arr.filter(num => num > -1);
    for (let i = 0; i < posArr.length; i++) { 
        sum += posArr[i];
    }
    return sum;
  
//   const sum = [1, 2, 3].reduce(add, 0);
//   let values = arr[i];
    
}

//tests
describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(positiveSum([1,2,3,4,5]),15);
      assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
      assert.strictEqual(positiveSum([]),0);
      assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
      assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
      });
    });


//alternative solutions
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}


