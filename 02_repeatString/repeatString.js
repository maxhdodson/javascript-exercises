const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    string2 = "";
    for (let i = 0; i < num; i++) {
      string2 += string;
    }
    return string2;
};

// Do not edit below this line
module.exports = repeatString;
