// var queue = ['Illia', 'Alex', 'Ira'];

// var length = queue.push(['Vanya', 'Andrey']);
// console.log(queue);
// console.log(length);
// var lastGone = queue.pop();
// console.log(queue);
// console.log(lastGone);

// console.log('queue', queue);
// var first = queue.shift();
// console.log(queue);
// console.log(first);


// var girstCame = queue.unshift('Govnyk');
// console.log('queue', queue);

// console.log('girstCame', girstCame);
var queue = [{
  name: 'Illia',
  pass: 123
}, {
  name: 'Alex',
  pass: 123
}, {
  name: 'Ira',
  pass: 123
},];

var names = queue.map(function (el) {
  return el.name;
});
// console.log(names);
// console.log(queue);
var iras = queue.filter(function (el) {
  var isIra = el.name === 'Ira';
  return isIra;
});

queue.forEach(function (el) {
  el.id = 'newValue';
});

// console.log(queue);

var str =  queue.reduce(function (acummulated, current) {
  return acummulated + current.name;
}, '');
console.log(str);









