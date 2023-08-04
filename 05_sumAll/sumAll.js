const sumAll = function(a, b) {

    

    let args = [a, b].sort();

    for (arg in args){
        if (!Number.isInteger(args[arg]) || args[arg] < 1) return "ERROR";
    };

    let low = args[0], high = args[1];
    let total = 0;

    for (low; low < high + 1; low++){
        total += low
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
