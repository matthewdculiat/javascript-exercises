const reverseString = function(string) {
    //return string.split('').reverse().join('');
    let revArray = string.split("");
    let revString = "";
    for (let i = 0; i < string.length; i++) {
        revString += revArray.pop();
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
