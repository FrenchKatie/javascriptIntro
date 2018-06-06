//Learning Array "indexOf" Method
//-------------------------------

var arr = ['fish', 'tiger', 'llama', 'cat', 'goat', 'tiger', 'horse'];
var logicSwitch = false;

// for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === 'tiger') {
//             logicSwitch = true;
//             console.log('run!');
//       }
// }

var what = arr.indexOf('tiger') != -1;
console.log(what);
