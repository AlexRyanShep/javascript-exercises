const removeFromArray = function() {

    let args = Array.from(arguments);
    targetArray = args.splice(0,1)[0];
    if (args.length > 0){ 
        for (arg in args) {
            let targetIndex = targetArray.indexOf(args[arg]);

            if (targetIndex != -1){ // -1 from indexOf is no match
                targetArray.splice(targetIndex, 1);
            };
        };
    };
    return targetArray;

};

// Do not edit below this line
module.exports = removeFromArray;
