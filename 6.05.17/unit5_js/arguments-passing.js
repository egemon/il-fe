var one = 1;
var two = 2;
var three = 3;
var object = {};

function multiply (firstMultiplier, secondMultiplier) {
  console.log('function Multiply have been called', firstMultiplier, secondMultiplier);
}
// arguments are values which are passed as parameters
multiply(one);
multiply(one, two, three);

function multiplyAll () {
  console.log('function multiplyAll have been called with arguments: ', arguments);
  console.log('arguments.length', arguments.length);
  console.log('multiplyAll.length', multiplyAll.length)
}

multiplyAll('argument1', 'argument2', 'argument3');

// primitives vs objects

function mutateArgument (argument) {
  argument = argument * 100;
  console.log(argument);
}
mutateArgument(one);
console.log(one);


function mutateArgument2 (argument) {
  argument.name = 'my new cool name';
}
mutateArgument2(object);
mutateArgument(object);
console.log(object);