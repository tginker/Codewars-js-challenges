//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if(bool == true){
    return "Yes";
  }
  if (bool == false){
    return "No";
  }
}

//tests
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), 'Yes')
    assert.strictEqual(boolToWord(false), 'No')
    });
  });

//alternative solutions
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

let boolToWord = bool => bool ? 'Yes' : 'No';
