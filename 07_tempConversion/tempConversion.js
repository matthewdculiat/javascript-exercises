const ftoc = function(temp) {
    let tempC = ((((temp - 32) / 1.8) * 10) / 10);
    if (Number.isInteger(tempC)) {
        return tempC;
    } else {
        return Number(tempC.toFixed(1));
    }
};

const ctof = function(temp) {
    let tempF = ((((temp * 1.8) + 32) * 10) / 10)
    if (Number.isInteger(tempF)) {
        return tempF;
    } else {
        return Number(tempF.toFixed(1));
    }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
