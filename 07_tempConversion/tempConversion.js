const convertToCelsius = function(f) {
  rawC = (f - 32) * (5 / 9);
  return Math.round(rawC*10)/10;
};

const convertToFahrenheit = function(c) {
  rawF = (c * ( 9/5 ) + 32);
  return Math.round(rawF*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
