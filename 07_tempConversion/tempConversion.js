const convertToCelsius = function(x) {
  let fahrenheit = ((x -32) * 5/9);
fahrenheit = (Math.round(fahrenheit * 10) / 10);

  return fahrenheit;
};

const convertToFahrenheit = function(x) {
  let celcius = ((x *9/5) + 32);
  celcius = (Math.round(celcius * 10) / 10);

  return celcius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
