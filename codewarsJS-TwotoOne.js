/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    // your code
    //   const arrs1 = s1.split('');
    //   const arrs2 = s2.split('');
    //   let myArr = arrs1.concat(arrs2);
    
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    return (s1 + s2).split('').filter(unique).sort().join('')
    
  //   myArr.filter(unique).sort().join('');
    
    console.log(myArr)
}

//tests
describe("longest",function() {
    it("Basic tests",function() {
        Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
        Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
        Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
    })})

//alternative solutions
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
      return element !== array[index - 1];
    });
    return s4.join("");
  }
