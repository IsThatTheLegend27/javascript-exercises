const removeFromArray = function(array, ...args ) {
    for (let i = 0; i < args.length; i++) {
        let j = array.indexOf(args[i]);
        if (j !== -1) {
            array.splice(j, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
