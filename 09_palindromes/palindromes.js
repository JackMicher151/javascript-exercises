const palindromes = function (x) {
    sanitx = x.replace(/[^a-zA-Z0-9]/g,'');
    let check_num = sanitx.length / 2;
    if (sanitx.length % 2 != 0) {
        check_num = Math.floor(check_num);
    }
    // console.log(check_num)
    let upperx = sanitx.toUpperCase();
    // console.log(upperx);
    for (let i = 0; i < check_num; i++) {
        // console.log(upperx[i] + ' ' + upperx[x.length-i-1]);
        if (!(upperx[i] === upperx[sanitx.length-i-1])) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
