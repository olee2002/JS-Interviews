// FRONTEND DEVELOPER POTENTIAL INTERVIEW QUESTIONS

// Promise (vs Observable) is an object that may produce a value some time in the future. It has 3 states fulfilled, pending, rejected. Async & Await ( Syntactic Sugar ES 6 ). 

// A callback is a function that is to be executed after another function has finished executing - hence the name ‘call back’ 

// IIFE(Immediately Invoked Function Expression) - preserve any private scope in a function/ avoid overriding any global/outside scope variables
// (function(){console.log("Hello World!")})()
// A curried function is a function that takes multiple arguments one at a time.
// function tripleAdd(num1){return function(num2){return function(num3){return num1+num2+num3}}}
// tripleAdd(num1)(num2)(num3)
// Variables - Const(block scope, can’t reassign value) | Let(block scope) | Var (Function/ Global scope)

// Closure is an inner function that has access to the scope of enclosing variables inner/outer/global
// Lexical scoping: Variables declared outside of a function are global variables and are visible everywhere in a JavaScript program. Variables declared inside a function have function scope and are visible only to code that appears inside that function.

// OOP  (4 concepts - EPAI- Encapsulation, Poly-morphism, Abstraction, Inheritance)
// THIS (this) keyword refers to its own object itself. Whatever obj it is directly inside of.

// A RESTful API is an application programming interface that uses HTTP requests to GET, PUT, POST and DELETE data. Also referred to as a RESTful web service -- is based on representational state transfer ( REST ) technology, an architectural style and approach to communications often used in web services development.

// HTTP (HyperText Transfer Protocol)
// Client/Server (request/response) - customer/server at a restaurant
// Stateless protocol not related to any other. Every transaction is unique (flipping a coin - session & cookies to handle states)
// Application Layer (HTTP uses TCP that determines how the data is formatted)
// Client Actions (Get|Post|Delete|Put Etc)
// Server Status Codes
// Headers (tiny bits - tweak the operation of Request - content type :JSON or XML, TXT


//Javascript Interview Questions

//A curried function is a function that takes multiple arguments one at a time. 

function tripleAdd(num1){
   return function(num2){
      return function(num3){
         return num1+num2+num3
      }
   }
}

function tripleAdd1(num1, num2, num3){
   return num1+num2+num3
}

tripleAdd(10)(20)(30)

// function getTravelTime(distance, speed){
//    return distance/speed;
// }

function getTravelTime(distance){
   return function(speed){
      return distance / speed;
   }
}

const travelTimeBosNyc = getTravelTime(400)
//this way we can set the distance always the same and call different speed asn needed without resetting the same distance as a peremter.
console.log(travelTimeBosNyc(60))


//IIFE (Imediate Invoked Function Expression)
//preserve any private scope in a function
//avoid overriding any global/outside scope variables

(function(){
   console.log("Hello World!")
})()

(function(){
   var x = y = 200;
 })();
 
 console.log('y', y)//y 200 (global scope)
 console.log('x', x)// x is not defined (IIFE scope)

//closure
//a closure in an inner function that has access to the scope of an enclosing function
//variables inner/outter/ global

function closure(a){
   return function(){
    return a
   }
}


//closure example
function my(){
   let i=0;
 
   return function (){
   i++
   return i
   }
 }
 const one = my()//making an instance
 const two = my()//making an instance
 
 console.log(one())//1
 console.log(one())//2
 console.log(one())//3
 console.log(two())//1
 console.log(two())//2
 console.log(one())//4

//this key word
//in object, this key word refers to its own object itself.
//whatever obj it is directly inside of.


//hosting
//variables and functions are hoisted to the top of the scope that they are declared in.
//variable/function hoisting/function declaration - JS hoist all the variables and functions to the top.
//function expression functions are set with var or const as a variable.
//var is a function scope || let and const are block scope


//double(==) vs triple(===)  equal comparison operator 
//double looks at its value 
//tripe(strict) looks at its value and type
// number vs string => string converted to number
//boolean vs non-boolean => non-boolean converted to boolean
//obj vs primitive data-type => obj is converted to primitive


//Log Number function
//variables always look at its scope first to see if the variable exists if not, it will go to the above scope. so the code below will return as undefined.

var num = 50;

function logNumber(){
   console.log(num);
   var num = 100;
}

logNumber();

//'use strict'
//enforce stricter parsing and error handling in your code
//1.prevents the use of global variables
//2.all peremeters in the function must be unique
//3.fail fast and fail loudly

//call & apply methods

//call() - any function that defined in JS can use call method.


const car1={
   brand:'Porsche',
   getCarDescription:function(cost, year, color){
     console.log(`This car is a ${this.brand}. The price is ${cost}. The year is ${year}. The color is ${color}.\n`)
   }
 }
 
 const car2={
   brand:'Lamborghini'
 }
 
 car1.getCarDescription(100, 2010, 'yello')
 //call the function that is another obj
 car1.getCarDescription.call(car2, 200,2010,'blue')
 //apply
 car1.getCarDescription.apply(car2, [200,2010,'blue'])


 //passing by reference 
 //copying array.. slice() .concat([]) [...arr]
 
 //arguments keyword
 //var args = Array.prototype.slice.call(arguments)

 function argument() {
   console.log(arguments[0])
   //var args = Array.prototype.slice.call(arguments)
    }
  argument(3, 7, 2)//{0:3, 1:7, 2:2}


//JSON
// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
// properly formatted as JSON - js object notation.
// undefined or functions are not allowed
 
const myJsonObj = {
   "myString": "hello world",
   "myNumber": 12345.6789,
   "myNull": null,
   "myBoolean": true,
   "myArray": [20, 30, "orange"],
   "myObject": {
     "name": "Sam",
     "age": 30
   }
 };

 //settimeout  sent to eventloop

 //create obj
 //1. object literal / 2. new keyword & object constructor
 //3. constructor function
 //() 'invoked'

 function Car(color, brand, year){
    this.color = color;
    this.brand = brand;
    this.year = year;
 }

 Car.prototype.getColor = function(){
    return this.color;
 }
 const carlysCar = new Car('blue', 'ferarri', 2015);
 console.log(carlysCar)

 function User(first, last, age, gender){
   this.first = first;
   this.last = last;
   this.age = age;
   this.gender = gender;
 }
// new keyword is creating an empty obj and pushing the perimeter information to it.
 const mary = new User('mary', 'smith', 26, 'male')

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);

//Array validation method
//Arr.isArray({})
//{} instanceof Array

//2 obj with same values are not the same because objects created in different memory location.
//JSON.stringify(obj1)===JSON.stringify(obj2)

const user1 = {
   name: 'Jordan',
   age: 28,
 };
  
 const user2 = {
   name: 'Jordan',
   age: 28,
 };
  
 console.log(user1 == user2);
 console.log(JSON.stringify(user1) === JSON.stringify(user2));

 //arrays

 var arr1 = [];
var arr2 = new Array(50);//creating 50 empty elements
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);
 
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr3: ', arr3);
console.log('arr4: ', arr4);


const data1 = 'Jordan Smith';
 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
 
console.log(data2);//[ 'S', 'm', 'i', 't', 'h' ]

let num =50
num.toFixed(2)
num.toPrecision(12)

//String and Arrays = solution 
const data1 = 'Jordan Smith';
 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
 
// only use 'read-only' methods: filter, forEach, map, some, every, etc.
// cannot use: push, pop, splice, shift, reverse, etc.
 
console.log(data2);

//object properties

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
 
a[b] = 200;
a[c] = 400;
 
console.log(a[b]);

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
 
a[b] = 200;
// a['[object Object]'] = 200
 
a[c] = 400;
// a['[object Object]'] = 400
 
console.log(a[b]);
// console.log(a['[object Object]']);


//
var x = 10;
 
function y() {
    function x() {}
    x = 100;
    return;
    // function x() {}
}
 
y();
 
console.log(x);