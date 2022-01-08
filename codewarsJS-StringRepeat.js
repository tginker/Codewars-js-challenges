/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/


function repeatStr (n, s) {
  let str = s;
  for (i = 0; i < n-1; i++){
   str = str + s;
  }
  
   return str;
}


//tests
describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});

//alternative solutions
function repeatStr (n, s) {
  return s.repeat(n);
}

repeatStr = (n, s) => s.repeat(n)

function repeatStr (n, s) {
  var str="";
  for(var i=0; i < n; i++)
    str+=s;
    return str;
  }

