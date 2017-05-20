var arr1 = [];
// console.log('arr1', arr1);

var length = 5;
var arr2 = new Array(length);
// console.log(arr2);
var arr3 = new Array(5, 6, 7, 8);
// console.log('arr3', arr3);

var queue = ['Illia', , 'Ira'];
var queue2 = {0: 'Illia', 3: 'Ira'};
var arrayExample = [null, undefined, false, 5, function (par) {
  return par;
}, {
  prop: 'value'
}, ['a', 'b'], queue];
// console.log('queue', arrayExample);
// console.log('queue.length', arrayExample.length);

console.log('arrayExample[0]', arrayExample[4]('good'));
console.log('arrayExample[10]', arrayExample[10]);

arrayExample[8] = 'eleven';
console.log('arrayExample[8]', arrayExample[8]);
console.log('arrayExample', arrayExample);
console.log('delete arrayExample[8]', delete arrayExample[8]);
console.log('arrayExample', arrayExample.length);
console.log('arrayExample', arrayExample);
arrayExample.length = 2;
console.log('arrayExample', arrayExample);
arrayExample.length = 18 ;
console.log('arrayExample', arrayExample);
console.log('1 in arrayExample', 1 in arrayExample);
delete arrayExample[1];
console.log('1 in arrayExample', 1 in arrayExample);
console.log('13 in arrayExample', 13 in arrayExample);
// console.log('arr1.length', arr1.length);
// console.log('arr1.length', arr1.length);