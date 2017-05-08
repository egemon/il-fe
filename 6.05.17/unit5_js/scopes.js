var globalVariable = 'globalValue';
console.log('globalVariable', globalVariable);
console.log('window.globalVariable', window.globalVariable);
console.log('window', window);

function multiply (firstMultiplier, secondMultiplier) {
  console.log('function Multiply have been called', firstMultiplier, secondMultiplier);
  console.log('globalVariable', globalVariable);

  var localVariable = 'localValue';
  console.log('localVariable', localVariable);

}
//
multiply(1, 2);
console.log('firstMultiplier', firstMultiplier);
console.log('localVariable', localVariable);

//
//
// you may use variables from upper scope to pass them to function call
var globalVariable2 = 'globalValue2';
var globalVariable3 = 'globalValue3';
//
multiply(globalVariable2, globalVariable3);

//
// // hoisting
function hoisting () {
  var localVariable;
  console.log('localVariable', localVariable);
  localVariable = 'localValue';
  console.log('localVariable', localVariable);
}
//
function hoisting2 () {
  console.log('localVariable', localVariable);
}
//
// hoisting();
// hoisting2();
var two = 2;
var three = 3;
function sumarize (a, b) {
  console.log(arguments);
  var arguments;
  return a + b;
}

var sum = sumarize(two, three);
console.log(sumarize(1, 2));

function sumarize () {
  var two = 4;
  return two + three;
}

console.log(sum);

function summarizeWithArguments() {
  var sum = 0;
  for (var i = 0; i < arguments.length ; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(summarizeWithArguments(1,2,3,4));
