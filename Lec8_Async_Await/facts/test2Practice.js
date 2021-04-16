// Quest 1
// let arr = [1, 2, 3, 4];

// function f(arr) {
//     for (x in arr) {
//         arr[x] = 0
//     }
//     return arr;
// }

let arr = [1, 2, 3, 4];

const func = (arr) =>{
    for (x in arr) {
            arr[x] = 0
        }
    return arr;
}

console.log(arr);

console.log(func(arr));

console.log(arr);

// let obj = {
//     1: 0,
//     2: 1,
//     3: 2,
//     4: 3,
//     5: 4,
//     length: 5,
//   };
//   //Object.assign() is used to copy the values and properties from one or more source objects to a target object.
//   //parameters --> target ,sources

//   function f() {
//     let object = Object.assign({}, obj);
//     for (let i = 1; i < object.length; i++) {
//       object[i] = object[i] + 1;
//     }
//     delete object["length"];
//     for (let x in object) {
//       console.log(`at index ${x} we have value ${object[x]}`);
//     }
//   }
  
  

// function g(){
//     return function f(obj)
//     {
       
//         for (let i = 1; i < obj.length; i++) {
//             obj[i] = obj[i] + 1;
//           }
//           delete obj["length"];
//           for (let x in obj) {
//             console.log(`at index ${x} we have value ${obj[x]}`);
//           }
//     }
// }

// g()(obj);
// console.log(obj);

// Ques 3
// // f(x,y)
// const func = (x,y) => x*y;
// console.log(func(2,4));
// // f(x)(y)
// function func(x){ 
//     return function(y)
//     {return x*y;}
// }
// console.log(func(2)(4));


// Quest 4 ans = 2
// let a = ["a", "b"]
// a[2] = a 

// function f(a) {
//     a = a[2]
//     console.log(a);
//     let n = Array("a", "b")
//     console.log(a[2] = n);
//     console.log(a);
//     console.log(n);
//     a = n;
//     console.log(a);
// }


// console.log(a);
// f(a)
// console.log(a);

// Question 5
// Array.prototype.reduceAlbums = function(callback, initialValue) {
//     var accumulator = initialValue === undefined ? undefined : initialValue
  
//     for (var i = 0; i < this.length; i++) {
//       if (accumulator !== undefined) {
//         accumulator = callback.call(undefined, accumulator, this[i], i, this)
//       } else {
//         accumulator = this[i]
//       }
//     }
//     return accumulator
//   } // our polyfill for reduce
  
//   var logicAlbums = [
//     'Bobby Tarantino',
//     'The Incredible True Story',
//     'Supermarket',
//     'Under Pressure',
//   ]
  
//   var combineAlbums = logicAlbums.reduceAlbums(function(a, b) {
//     return a + ' , ' + b
//   }, 'Young Sinatra') // Initial Value is Young Sinatra
  
//   console.log(combineAlbums)
//  Ques 7 ans 3
// let count = 0;
// let interval = setInterval(function () {
//   console.log(count);
//   count++;
// }, 100);

// setTimeout(function () {
//   clearInterval(interval);
//   interval = setInterval(function () {
//     console.log(count);
//     count--;
//     if (count < 0) clearInterval(interval);
//   });
// }, 500);

// Ques 8 ans both

// Ques 9 ans NaN
// function globalFunction(x) {
//     return function outerFunction(y) {
//       return function innerFunction(z) {
//         return x + y + z;
//       };
//     };
//   }
  
//   let instance1 = globalFunction(2);
//   var instance2 = instance1(3);
//   console.log(instance2());

// Quest 10 ans 4
// let arr = ["a", "b", "c", "d", 1, 2, 3, 4];

// arr.map(function (e) {
//   return 2 * e;
// });

// (function () {
//   arr.filter(function () {});
// })();

// console.log(arr);

// let nArr;
// nArr = arr.filter(function (e) {
//   return Number.isInteger(e);
// });
// nArr = new Array();
// console.log(nArr);

// nArr = arr
//   .filter(function (e) {
//     return !Number.isInteger(e);
//   })
//   .map(function (e) {
//     return e + 1;
//   });

// console.log(nArr);