function cToF(celsius) 
{
  var Cel = celsius;
  var CelToFer = Cel * 9 / 5 + 32;
  var message = Cel+'\xB0C is ' + CelToFer + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var Fer = fahrenheit;
  var FerToCel = (Fer - 32) * 5 / 9;
  var message = Fer+'\xB0F is ' + FerToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);