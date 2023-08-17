// // TASK 1
// var numbers = [1, 3, 0, 5, 0, 7, 0,];
// var newNumbers = [];
// var zeros = [];

// function zeroNumber() {
//     for (const number of numbers) {
//         if(number != 0) {
//             newNumbers.push(number)
//         }else {
//             zeros.push(number);
//         }   
//     }
//     var result = newNumbers.concat(zeros);
//     return result.join("")
// }
// console.log(zeroNumber());



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
// var num = 0;
// for (const number of numbers) {
//     if(number > 0) {
//         num += number
//     }
// }
// console.log(num);



// TASK 4
// var prices = [
//     {name: "Ali", price:200},
//     {name: "Umid", price:800},
//     {name: "Sardor", price:400},
// ];

// var maximum = 0;
// var owner ;
// function maxPrice() {
//     for (const iterator of prices) {
//         if(iterator.price > maximum) {
//             maximum = iterator.price;
//             owner = iterator.name;
//             console.log(owner, maximum);
//         }
//     }
// }
// maxPrice();



// TASK 5

// function convertMinutes(sec) {
//     return (sec * 60)
// }

// console.log(convertMinutes());