const fibonacci = function(x) {
    if (x < 0){
        return 'OOPS';
    } else if (x == 0) {
        return 0;
    } else if (x == 1) {
        return 1;
    } else {
        return fibonacci(x-2) + fibonacci(x-1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
