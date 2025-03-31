const palindromes = function (str) {
    const noPunctuation = Array.from(str).filter(letter => !".,!?-:; ".includes(letter)).join("");
    const reversed = noPunctuation.split("").reverse().join("");
    return noPunctuation.toLowerCase() === reversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
