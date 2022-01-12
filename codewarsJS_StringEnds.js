/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

//my solution
function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
  }


//tests
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(solution('abcde', 'cde'), true)
  Test.assertEquals(solution('abcde', 'abc'), false)
  });
  });

//some possible solutions
function solution(str, ending){
    return str.endsWith(ending);
  }

  function solution(str, ending){
    return new RegExp(ending+"$", "i").test(str);
  }

const solution = (str, ending) => str.endsWith(ending);

function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
  }

  function solution(str, ending){
    return str.substr(-ending.length) == ending;
  }




