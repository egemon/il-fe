var plainObject = {};
var plainObject2 = new Object();
console.log('plainObject', plainObject);
console.log('plainObject2', plainObject2);

var user = {
  name: 'Merlin',
  password: 123
};

var httpCodes = {
  200: "OK",
  404: 'Not found',
  403: 'Forbiden',
  500: 'Server error'
};

console.log('Here is pass and name', user.password, user.name, httpCodes);
console.log('Here is your https code', httpCodes[200]);
console.log('Here is your name', user['name']);

var code = prompt('What https code do you receive?');
alert('Here is status text of ' + code + ' code - ' + httpCodes[code]);

