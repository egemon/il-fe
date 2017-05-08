// // multiply(1, 2);
// // multiply2(3, 4);
//
//function declaration
function multiply (firstMultiplier, secondMultiplier) {
  console.log('function Multiply have been called', firstMultiplier, secondMultiplier);
}

multiply(1, 2);

console.log('multiply.length = ', multiply.length);
console.log('multiply.name = ', multiply.name);

//function expression
var multiply2 = function (firstMultiplier, secondMultiplier) {
  console.log('function Multiply2 have been called', firstMultiplier, secondMultiplier);
};

multiply2(3, 4);
//
// named expression

var multiply3 = function multiply3_named (firstMultiplier, secondMultiplier) {
  console.log('function Multiply3 have been called', firstMultiplier, secondMultiplier);
  console.log('multiply3_named', multiply3_named)
};
multiply3(5, 6);
console.log('multiply3_named', multiply3_named);

var multiply4 = new Function('console.log("multiple4 have been  called")');
multiply4();
// anonymnus function
// IIFE
(
  function (firstMultiplier, secondMultiplier) {
    console.log('Anonymus functions have been called', firstMultiplier, secondMultiplier);
  }
)(7, 8);