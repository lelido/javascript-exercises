const sumAll = function (n1, n2) {
    let sum = 0;
    const min = Math.min(n1, n2);
    const max = Math.max(n1, n2);

    if (min < 0 || !Number.isInteger(n1) || !Number.isInteger(n2)) {
        return "ERROR";
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
