// TASK 1
// var numbers = [1, 3, 0, 5, 0, 7, 0];
// var newNumbers = [];
// var zeros = [];

// function zeroNumber() {
//     for (const number of numbers) {
//         if(!number == 0) {
//             newNumbers.push(String(number))
//         }else {
//             zeros.push(String(number));
//         }   
//     }
//     newNumbers.push(zeros);
//     return newNumbers
// }

// console.log(zeroNumber().toString().concat());



// TASK 2
// var booleans = [false, true, false, true, true];
// var trues = 0;

// for (const iterator of booleans) {
//     if(iterator) {
//         trues ++
//     }
// }
// console.log(trues);



// TASK 3
// var numbers = [1, 2, 0, -1, -2, 3, 4];
// for (const number of numbers) {
//     var i = numbers.filter(number => {
//         return number>0
//     })
//     var result = i.reduce(function(a, b){
//         return a + b;
//     })
//     console.log(result);
// }



// TASK 4
var maxPrice = [
    {name: "Ali", price:200},
    {name: "Umid", price:800},
    {name: "Sardor", price:400},
];

for (const iterator of maxPrice) {
    var i = [];
    
    i.push(iterator.price);
    console.log(i);
}



// TASK 5

// function convertMinutes(sec) {
//     return (sec * 60)
// }

// console.log(convertMinutes());