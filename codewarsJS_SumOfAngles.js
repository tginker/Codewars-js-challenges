/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

//my solution
function angle(n) {
    if(n > 2){
      let sum = (n - 2) * 180;
      return sum;
    } 
  }



//some possible solutions
const angle = n => (n - 2) * 180;

