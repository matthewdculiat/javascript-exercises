const reverseString = function(string) {
    let reversedString = "";
    for (let i = 1; i > string.length; i++) {
        reversedString += string[-i];
    }
    return reversedString;
};

console.log(reverseString('hello'));
