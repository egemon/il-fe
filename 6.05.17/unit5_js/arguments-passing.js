var one = 1;
var two = 2;
var three = 3;


function multiply (firstMultiplier, secondMultiplier) {
  console.log('function Multiply have been called', firstMultiplier, secondMultiplier);

}

// arguments are values which are passed as parameters
// multiply(one);
// multiply(one, two, three);


//
function multiplyAll () {
  console.log('multiplyAll ', arguments);
  // console.log('arguments.length', arguments.length);
  // console.log('multiplyAll.length', multiplyAll.length)
}
//
// multiplyAll('argument1', 'argument2', 'argument3');

function sum (arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}
function sum () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

// console.log(sum(1, 2, 3, 4));

//
// primitives vs objects

var counter = 0;
function count (innerCounter) {
  // var innerCounter = 1;
  innerCounter++;

  // console.log(innerCounter);
}

// count(counter);

// console.log(counter);

var counterObj = {
  counter: 0
};
function mutateArgument2 (innerCounterObj) {
  // var innerCounterObj = counterObj;
  innerCounterObj.counter = innerCounterObj.counter + 1;
  if (innerCounterObj.counter === 1) {
    innerCounterObj = null;
  }
  console.log(innerCounterObj)
}
console.log(counterObj);
mutateArgument2(counterObj);
console.log(counterObj);
