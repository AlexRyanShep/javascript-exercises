const repeatString = function(message, iterations) {

    if (iterations < 0){
        return "ERROR";
    };

    let fullText = "";

    for (let i = 0; i < iterations; i++){
        fullText += message;
    };

    return fullText;
};

// Do not edit below this line
module.exports = repeatString;
