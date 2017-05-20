var plainObject = {};
var plainObject2 = new Object();

// console.log('plainObject', plainObject);
// console.log('plainObject2', plainObject2);

var user = {
  name: 'Merlin',
  password: 123,
  0: 'ilya'
};
var key = 'password';
// console.log('user', user);
// console.log('user.password', user.password);
// // console.log('user.password', user[0], user['0']);
// console.log('user.password', user[key]);

var httpCodes = {
  200: "OK",
  404: 'Not found',
  403: 'Forbiden',
  500: 'Server error'
};

// console.log('httpCodes[300]', httpCodes[300]);
// var code = prompt('What https code do you receive?');
// httpCodes[300] = 'value';
// httpCodes.newKey = 'newValue';
// console.log('httpCodes[300]', httpCodes[300]);
// console.log('httpCodes[newKey]', httpCodes.newKey);
// alert('Here is status text of ' + code + ' code - ' + httpCodes[code]);
console.log(httpCodes);
delete httpCodes[403];
console.log(httpCodes);

function myFunction (param) {
  console.log('myFunction.key inside', myFunction.key);
  return param;
}
// console.log('myFunction', myFunction, myFunction.length, myFunction.name);

myFunction.key = 'value';

// myFunction();
// console.log('myFunction.key', myFunction.key);