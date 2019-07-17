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

//IIFE (Imediate Invoked Function Expression)
//preserve any private scope in a function
//avoid overriding any global/outside scope variables

(function(){
   console.log("Hello World!")
})()

//closure
//a closure in an inner function that has access to the scope of an enclosing function
//variables inner/outter/ global

function closure(a){
   return function(){
    return a
   }
}

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

