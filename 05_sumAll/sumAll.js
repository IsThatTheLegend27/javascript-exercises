const sumAll = function(num1, num2) {
    let total= 0;
    let min = num1;
    let max = num2;

    if (!Number.isInteger(min) || !Number.isInteger(max))
        return ("ERROR");

    if (min <0 || max <0)
        return ("ERROR");

    if (num2 < num1)
    {
        max = num1;
        min = num2;
    }

    for (min; min<=max; min++)
    {
        total += min;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
