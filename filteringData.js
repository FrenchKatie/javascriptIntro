var arr = [
    {"name":"rabbits", "count": 11},
    {"name":"cats", "count": 2},
    {"name":"dogs", "count": 5},
    {"name":"rabbits", "count": 35},
    {"name":"parrots", "count": 3},
    {"name":"rabbits", "count": 2},
    {"name":"rabbits", "count": 4}
];


// Filtering data with JS:
// -----------------------
// var newArr = [];
// function scanArrayForMatch () {
//       for (var i = 0; i < arr.length; i++) {
//             if (arr[i].name === "rabbits"){
//                     newArr.push(arr[i]);
//             }
//       }
//       // delete newArr[0];    //be careful with delete as it keeps the length of your array the same.
//       newArr.pop();           //removes the last one in the array
//       console.log(newArr);
//
// }
// scanArrayForMatch()


//This code is doing exactly the same as the above one. The "filter" is an array method
var newArr = arr.filter(function(item){
        return item.name === "dogs";
});
console.log(newArr);
