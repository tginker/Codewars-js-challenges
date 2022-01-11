/*
In this kata you will create a function to check a non-negative input to see if it is a prime number.

The function will take in a number and will return True if it is a prime number and False if it is not.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Examples(input --> output)
0 --> false
1 --> false
2 --> true
11 --> true
12 --> false
*/

//my solution
function isPrime(n) {
    // show me the code!
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
          return false;   
      }    
    } 
    return n > 1;
  }


//tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Check for prime numbers", () => {
  it("Fixed tests", () => {
    assert.strictEqual(isPrime(0), false)
    assert.strictEqual(isPrime(1), false)
    assert.strictEqual(isPrime(2), true)
    assert.strictEqual(isPrime(11), true)
    assert.strictEqual(isPrime(12), false)
    assert.strictEqual(isPrime(61), true)
    assert.strictEqual(isPrime(571), true)
    assert.strictEqual(isPrime(573), false)
    assert.strictEqual(isPrime(25), false)
  })
  
  it("Random tests", () => {
    
    function randint(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function sol(n){
      for(let j = 2; j <= ~~Math.sqrt(n); j++){
        if(n % j == 0)
          return false
      }
      return n > 1
    }
    
    for(let i = 0; i < 100; i++){
      let n = randint(0, 1e4)
      assert.strictEqual(isPrime(n), sol(n), `Testing for n = ${n}`)  
    }
  })
})
  


//alternative solutions
function isPrime(n) {
    if (n < 2) { return false }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }


  function isPrime(n) {
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i == 0)
        return false
    }
     return n > 1
   }



