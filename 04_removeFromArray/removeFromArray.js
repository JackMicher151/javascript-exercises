const removeFromArray = function(inputarr=[],...moreArgs) {
    if (!(Array.isArray(inputarr))) {
        return 'ERROR';
    }
    for (const value of moreArgs) {
        let valind = inputarr.indexOf(value);
        while(valind > -1) {
            inputarr.splice(valind, 1);
            valind = inputarr.indexOf(value);
        }
    }
    return inputarr;
};

// Do not edit below this line
module.exports = removeFromArray;
