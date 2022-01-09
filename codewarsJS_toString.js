/*We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"
*/

//solution
function numberToString(num) {
    return num.toString();
}

//possible solutions
function numberToString(num) {
    // Return a string of the number here!
    return String(num);
}

function numberToString(num) {
    return ''+num;
}

const numberToString = num => `${num}`;


