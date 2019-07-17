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

//function hoisting/function declaration - function can be called regardless of where the function is located.
//function expression - expression has to be defined first before the function is called. It is in a way acting as a variable so it has to be defined before getting called.

