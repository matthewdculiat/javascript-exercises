const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof num1 === "number" && typeof num2 === "number") {
        if (num1 > 0 && num2 > 0) {
            if (num1 < num2) {
                while (num1 <= num2) {
                    sum += num1;
                    num1++;
                }
            } else if (num1 > num2) {
                while (num1 >= num2) {
                    sum += num2;
                    num2++;
                }
            } else {
                sum += num1;
                return 'The two parameters are equal.'
            }
        } else {
            return 'ERROR'
        }
    } else {
        return 'ERROR'
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
