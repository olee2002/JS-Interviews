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