const reverseString = function(msg) {

let splitmsg = msg.split("");

let reversedsplit = splitmsg.reverse();

let reversedmsg = reversedsplit.join("");

return reversedmsg;


};

// Do not edit below this line
module.exports = reverseString;
