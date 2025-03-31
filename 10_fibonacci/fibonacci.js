const fibonacci = function (num) {
    const int = parseInt(num);

    if (int < 0) {
        return "OOPS";
    }

    let numA = 1;
    let numB = 0;

    for (let i = 2; i <= int + 1; i++) {
        [numA, numB] = [numB, numA + numB];
    }

    return numB;
};

// Do not edit below this line
module.exports = fibonacci;
