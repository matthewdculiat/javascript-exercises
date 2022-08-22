const palindromes = function (str) {
    let toLetters = "";
    for (let i = 0; i < str.length; i++) {
        if ((/[a-zA-Z]/).test(str[i])) {
            toLetters += str[i].toLowerCase();
        }
    }

    let reverse = str.split("").reverse().join("");
    let toReverse = "";
    for (let j = 0; j < reverse.length; j++) {
        if ((/[a-zA-Z]/).test(reverse[j])) {
            toReverse += reverse[j].toLowerCase();
        }
    }
    return toLetters === toReverse;
};

// Do not edit below this line
module.exports = palindromes;
