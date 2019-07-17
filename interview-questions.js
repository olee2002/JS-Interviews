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