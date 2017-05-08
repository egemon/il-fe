var user = {
  name: 'Merlin',
  password: 123
};
var isUserHasPassword = 'password' in user;

var userWithNoPassword = {
  name: 'Vasya',
  age: 13
};

var isOtherUserHasPassword = 'password' in userWithNoPassword;
console.log('isUserHasPassword', isUserHasPassword);
console.log('isOtherUserHasPassword', isOtherUserHasPassword);

// for in

var httpCodes = {
  200: "OK",
  404: 'Not found',
  403: 'Forbiden',
  500: 'Server error'
};

var code;
for (code in httpCodes) {
  var questionText = 'is this is your http code? - ' + code;
  var isRightCode = confirm(questionText);
  if (isRightCode) {
    var answerText = 'Your status text for code - ' + code + ' ' + httpCodes[code];
    alert(answerText);
  }
}
