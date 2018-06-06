var theArray = [
    false,
    'adam',
    'sam',
    15,
    'bob',
    'john',
    9000,
    'tupac',
    'biggie',
    'george',
    'tony',
    22
];


var newArr = theArray.filter(function(item){
        if (typeof item === 'string'){
              return item;
        }
});
console.log(newArr);
