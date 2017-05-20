// var user = {
//   name: 'Merlin',
//   password: 123
// };
//
// var isUserHasPassword = 'password' in user;
// var userWithNoPassword = {
//   name: 'Vasya',
//   age: 13
// };
// var isOtherUserHasPassword = 'password' in userWithNoPassword;
//
// console.log('isUserHasPassword', isUserHasPassword);
// console.log('isOtherUserHasPassword', isOtherUserHasPassword);
//
// user.password = null;
//
// console.log('user.password', user.password);
// console.log('password in user', 'password' in user);
// console.log(user);
// delete user.password;
// console.log('password in user', 'password' in user);
// console.log(user);
//

//
// for in
//

var httpCodes = {
  200: "OK",
  404: 'Not found',
  403: 'Forbiden',
  500: 'Server error'
};

//
// var i;
//for (i = 0; i < arr.length; i++) {}
var code;
for (code in httpCodes) {
  console.log('code', code);
  console.log('httpCodes[code]', httpCodes[code]);
  console.log('httpCodes.code', httpCodes.code);
}
// for (code in httpCodes) {
//   var questionText = 'is this is your http code? - ' + code;
//   var isRightCode = confirm(questionText);
//   if (isRightCode) {
//     var answerText = 'Your status text for code - ' + code + ' ' + httpCodes[code];
//
//     console.log(httpCodes.code);
//     console.log(httpCodes[code]);
//
//     alert(answerText);
//     break;
//     alert('after break');
//   }
// }
//
//


var myObject = {
  number: 1,
  string: 'string',
  boolean: false,
  null: null,
  undefined: undefined,
  500: 1,
  object: {
    prop: 'prop'
  },
  myFunction: function () {
    console.log('inside function');
    // return 1 + 2;
    // return 'from function';
  },
  array: []
};
console.log('myObject', 4 + myObject.myFunction());
