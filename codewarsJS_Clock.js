/*We need a function that can transform a number into a string.
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
*/

//my solution
function past(h, m, s){
    //#Happy Coding! ^_^
    let mH = h * 3600000;
    let mM = m * 60000;
    let mS = s * 1000;
    return mH + mM + mS;
}



//some possible solutions
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
}

function past(h, m, s){
    var miliseconds = 0;
    miliseconds = miliseconds + s * 1000;
    miliseconds = miliseconds + m * 60000;
    miliseconds = miliseconds + h * 3600000;
    return miliseconds;
}

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

function past(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);
    
    return Math.round(setTime - midnight);
}



