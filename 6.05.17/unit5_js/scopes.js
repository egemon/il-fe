var globalVariable = 'globalValue';
// var localLocalVariable = 'globalValue';

// console.log('globalVariable', globalVariable);
// console.log('window.globalVariable', window.globalVariable);
// console.log('window', window);

function multiply (firstMultiplier, secondMultiplier) {
  console.log('function Multiply have been called', firstMultiplier, secondMultiplier);
  console.log('globalVariable', globalVariable);

  // var localLocalVariable = 'localValue';

  // console.log('localVariable', localLocalVariable);
  multiplyTwo(3, 4);

  function multiplyTwo (a, b) {
    // console.log('localVariable', localVariable);
    // var localLocalVariable = 'abc';
    // console.log(localLocalVariable);
    console.log('a, b', a, b);
    // return a * b;
  }
  // console.log('localLocalVariable', localLocalVariable);
}

try {
  console.log(fuck);
  console.log('bkahfkljhdskfa');
} catch (e) {
  console.info('my error', e);
}
console.log(e);
multiply(1, 2);
// console.log('firstMultiplier', firstMultiplier);
// console.log('localVariable', localVariable);
//
// //
// //
// you may use variables from upper scope to pass them to function call
var globalVariable2 = 'globalValue2';
var globalVariable3 = 'globalValue3';
//
// multiply(globalVariable2, globalVariable3);
//

// // // hoisting
function hoisting () {
  var localVariable;
  console.log('localVariable', localVariable);
  localVariable = 'localValue';
  var exprFun = function (a, b) {
    return a + b;
  };
  console.log('localVariable', localVariable);
}

//
function hoisting2 () {
  console.log('localVariable', localVariable);
}

var param1 = 'val1';

function bla (param2) {
  console.log(param1);
  var param1 = 'adfhdsakjf';
  console.log(param1);
}
bla(1, 2);

// //
// hoisting();
// hoisting2();
// var two = 2;
// var three = 3;
// function sumarize (a, b) {
//   console.log(arguments);
//   var arguments;
//   return a + b;
// }
//
// var sum = sumarize(two, three);
// console.log(sumarize(1, 2));
//
// function sumarize () {
//   var two = 4;
//   return two + three;
// }
//
// console.log(sum);
//
// function summarizeWithArguments() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length ; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(summarizeWithArguments(1,2,3,4));
// */