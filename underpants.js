// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//I: function with one parameter represented as any value
//O: return the value unchanged
//C:
//E:
//  add the function  to the key identity
_.identity = function(value){
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//I: function with one parameter represented as different datatypes
//O: return type of input values as a string
//C:
//E:
// add function to the type of key
_.typeOf = function(value){
// create conditional stmt within function to compare conditions
if (typeof value === 'string'){
    return 'string';
} 
if (Array.isArray(value) === true ){
    return 'array';
}
if(typeof value === 'object' &&  Array.isArray(value) !== true && value !== null && value instanceof Date !== true){
    return 'object';

}
if(typeof value === 'undefined'){
    return 'undefined';
}
if (typeof value === 'number' ){
    return 'number';
}
if(typeof value === 'boolean'){
    return 'boolean';
}
if( value === null){
    return 'null';
 }
 if( typeof value === 'function'){
    return 'function';
 }
}



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//I: function with two parameters as an array and number
//O: return an empty array if array is not an array, 
//if number is not given or is not a number return array[0], 
//return first number of the array
//C
//E:What if <number> is negative? What if <number> is greater than <array>.length?

//add function to the _.first key
_.first = function(array, number){
    //init var as empty array
var returnArray = [];
    //create conditional statement if array param is not an array return an empty array
    if(Array.isArray(array) === false){
        return returnArray;
    }
    //If <number> is not given or not a number, return just the first element in <array>
    if (typeof number !== 'number'|| number === undefined ){
        return array[0];
    }
    //if <number> is negative return empty array
if (number < 0){
return returnArray;
}
// if <number> is greater than <array>.length return the array
if (number > array.length){
    return array;
}
//Otherwise, return the first <number> items of <array>
else {
    return array.slice(0 , number);
}
}



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//I: function with two parameters 
//O: return based on conditional stmt: empty array, last element of array, 
//last number of items in array, empty array, the entire array
//C:
//E: negative number, number greater than array length
//add function to the _.last key
_.last = function(array, number){

    //create conditional statement if array param is not an array return an empty array
    if(Array.isArray(array) === false){
        return[];
    }
    //If <number> is not given or not a number, return just the last element in <array>
    if (typeof number !== 'number'|| number === undefined ){
        return array[array.length - 1];
    }
    //if <number> is negative return empty array
if (number < 0){
return [];
}
// if <number> is greater than <array>.length return the array
if (number > array.length){
    return array;
}
//Otherwise, return the last <number> items of <array>
else {
    return array.slice(-number);
}
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//I: function with two param represented array and unknown value
//O: if conditions are met: index of array, -1, 
//C: Do not use [].indexOf()
//E: array has multiple occuances of val, val isn't in array
// add key value pair _.index of as function
_.indexOf = function(array, value){
    // create for loop to iterate over array to access values 
    // condition start at index 0, end at less than array length, increment +1
    for ( var i = 0; i < array.length; i++){
        // create conditional statement to first occurrance of value
        if( array[i] === value){
            return i;
        }
    
        }
    return -1
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//I: function with two parameters(array and unknown value)
//O: boolean true if array includes value false otherwise
//C: must use ternary ? in imlementation
//E: use of ===, if no value?
// init function with two params 
_.contains = function(array, value){
    // return conditional stmt using ternary 
  return array.includes(value)?true:false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//I: function with two param, collection and function(three arguments)
//O: return array or object depending on if collection of parent function is array or object
//C:
//E:
// init function with two param, collection and func
_.each = function(collection, func){
// create conditional to determine array or object
var e;
var index;
var a; 
 if( Array.isArray(collection) === true){
    //if array, create loop to iterate over each element(index) over array
    for(var i = 0; i < collection.length; i++){
    //at collection[i] call func( with collection[i],i, collection)
       e = collection[i];
       index = i;
       a = collection;
       func(e,index,a);
    }
   
}
// if collection is object create for in loop to iterate over each property of the collection

// create conditional statement for determining object
if(Array.isArray(collection) === false && typeof collection === 'object' && typeof collection !== null && collection instanceof Date === false){
   for (var key in collection){
        e = collection[key]; 
       a = collection;
      // call function with collection.key(property value), key, collection  
        func(e, key, a);
    }
    
}
}






/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//I: function with one param
//O: return new array with all elements duplicate elemts removed 
//C: use _.indexOf
//E:
// init function _.unique with one param represented as array
_.unique = function(array){
// init var assigned as empty array to collect returned values 
    var collectValues = [];
 //init for loop to iterate over array
    for( var i = 0; i < array.length; i++){
    //create conditional stmt using index to tell waht is not in collectValues array 
        if(_.indexOf(collectValues,array[i]) === -1){
    // push values into array 
         collectValues.push(array[i]);
        };
    } 
    //return collectValues
return collectValues;
}


   
        
           
          
      
    

   // _.filter
 /*Arguments
/* //  1) An array
*  // 2) A function
/* Objectives:
*  // 1) call <function> for each element in <array> passing the arguments:
*     //the element, it's index, <array>
*   //2) return a new array of elements for which calling <function> returned true
* //Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//I: function with two params array, function
//O: a new array of elementsfrom calling the function equals true 
//C:
//E: function returns something other than true or false 
//init function _.filter
_.filter = function(array, func){
    // init var empty array to contain elements of new array
    var output = [];
    // init for loop to iterate over array
    for( var i = 0; i < array.length; i++){
        //call function  set condition if func === true 
       if(func(array[i], i, array) === true){
        // push output 
        output.push(array[i]);
       }
         
        
    }
// return output
return output; 
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//I: function with two params array and function
//O: return array of elements if function is false 
//C: 
//E: 
//init function
_.reject = function(array, func){
    // create holder array for returned values
    const output = [];
    // init for loop to iterate over array
    for( let i = 0; i < array.length; i++){
        //call function  set condition if func === false 
       if(func(array[i], i, array) === false){
        // push output 
         output.push(array[i]);
       }
         
    //return output
    }
 return output;   
    
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//I: function with two params
//O: returns an array made up of two arrays
//C:
//E: rereturn an array of arrays
// init function
_.partition = function(array, func){
    // init var  assigned to empty array
    var output = [];
    var results1 = [];
    var results2 = [];
    // init loop to iterate over array
    for(let i = 0; i < array.length; i++){
        //create if stmt to determine if true
      if(func(array[i], i, array) === true){
        //push results into empty array
        results1.push(array[i]);
      }
      //create if stmt to determine if false 
      if(func(array[i], i, array) === false){
        //push results into empty array
         results2.push(array[i]);
      }
      
       
    }// set output to contain results as array
   output = [results1, results2];
   //return output
   return output;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection,func){
    // create output array
    const output = [];
    // deterrmine if collection is an array
    if(Array.isArray(collection)){
        // init for loop to iterate over each element
        for(let i = 0; i < collection.length; i++){
            //call func with three 
            const result = func(collection[i], i, collection);
            // push results of function into empty array
            output.push(result);
        }

    }
    else{// it's an object
        // init for in loop to iterate over object
        for( let key in collection){
            // call function with value, key, collection
            const result2 = func(collection[key], key, collection);
            // push results to output 
            output.push(result2);
        }

    }
    
    // return output 
 return output;
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//I: function with two params, array of objects and property
//O: return an array  with the value of the property for every element in the array
//C: must use _.map in the implementation 
//E: 
//init function 
_.pluck = function(array, prop){
        //use map to iterate over objects in array
     return  _.map(array, function(obj){
        //return the value at prop using bracket notation
            return obj[prop];
             });
    }
    



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//I: function has two param, collection & function
//O: return the boolean true or false dependent upon if every element is true or one element is false 
//C: 
//E:function may not return boolean, function is not given
// init  function 
_.every = function(collection, func){
    //conditional stmt to determne if func is defined 
    if(func === undefined){
        //conditional stmt to see if collection is array
        if( Array.isArray(collection) === true){
            //if array, create loop to iterate over each element(index) over array
            for(var i = 0; i < collection.length; i++){
            //at collection[i] check to see if elements of collection is false 
                if(collection[i] === false){
                    return false; // return false
                }
            }//return true if loop conditions are not met 
            return true
        }//conditional stmt to see if collection is object 
        if(Array.isArray(collection) === false && typeof collection === 'object' && typeof collection !== null && collection instanceof Date === false){
            // create for in loop to iterate over each property of the collection
            for (var key in collection){
                //if value in collection is false return false 
                        if(collection[key] === false){
                                 return false;
                        } 
                            
            }// if loop conditions are not met retrn true
          return true;              
        }
                  
    }
// determine if collection is array 
    if( Array.isArray(collection) === true){
        //if array, create loop to iterate over each element(index) over array
        for(var i = 0; i < collection.length; i++){
        //at collection[i] call func( with collection[i],i, collection)
            func(collection[i], i, collection);
            // if one of the values are false return false 
            if(func(collection[i], i, collection) === false){
                return false;
            } 
            
        }// if loop conditions are not met return true 
         return true;
    }   
    // create conditional statement for determining object
    if(Array.isArray(collection) === false && typeof collection === 'object' && typeof collection !== null && collection instanceof Date === false){
        // create for in loop to iterate over each property of the collection
        for (var key in collection){
        // call function with collection[key](property value), key, collection  
            func(collection[key], key, collection);
        // if values are false return false 
           if(func(collection[key], key, collection) === false){
                 return false;
            } 
            
        }
        
    }//return true 
    return true;
}

    
        

    

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//I: function has two param, collection & function
//O: return the boolean true or false dependent upon if every element is false or one element is true 
//C: 
//E:function may not return boolean, function is not given
_.some  = function(collection, func){
    if(func === undefined){
        if( Array.isArray(collection) === true){
            //if array, create loop to iterate over each element(index) over array
            for(var i = 0; i < collection.length; i++){
            //at collection[i] check to see if elements of collection is true
                if(collection[i] === true){
                    return true;
                }
            }// return false if conditions of loop is not met 
            return false
        }
        if(Array.isArray(collection) === false && typeof collection === 'object' && typeof collection !== null && collection instanceof Date === false){
            // create for in loop to iterate over each property of the collection
            for (var key in collection){
                //if collection[key] = true return true 
                        if(collection[key] === true){
                                 return true;
                        } 
                            
            } // return false if condition of loop is not met 
          return false;              
        }
                  
    }

    if( Array.isArray(collection) === true){
        //if array, create loop to iterate over each element(index) over array
        for(var i = 0; i < collection.length; i++){
        //at collection[i] call func( with collection[i],i, collection)
            func(collection[i], i, collection);
            //if collection[i] is true return true
            if(func(collection[i], i, collection) === true){
                return true;
            } 
            
        }// if loop conditions not met return false
         return false;
    }   
    // create conditional statement for determining object
    if(Array.isArray(collection) === false && typeof collection === 'object' && typeof collection !== null && collection instanceof Date === false){
        // create for in loop to iterate over each property of the collection
        for (var key in collection){
        // call function with collection[key](property value), key, collection  
            func(collection[key], key, collection);
        // if collection[key] is true return true 
           if(func(collection[key], key, collection) === true){
                 return true;
            } 
            
        }
        
    }
    return false;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//I: function with 3 params ( an array, function, seed)
//O: return the return value of the final function call
//C:
//E: what if seed is not given

// init function 
_.reduce = function(array, func, seed){
    let prevResult;
    // create conditional stmt to see if there is a seed
    if(seed === undefined){
        //assign prevResult to first value in array
        prevResult = array[0];
        //create for loop to iterate over the array
        for(var i = 1; i <  array.length; i++){
            //call func
        prevResult = func(prevResult, array[i], i);
        }
    }
     else {// if there is a seed, assingn prevResult to seed
        prevResult = seed;
    // create for loop to iterate over the array
         for( var i = 0; i <  array.length; i++){
            //call func
            prevResult = func(prevResult, array[i], i); 
         }
      } // return final result 
      return prevResult;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//I: function with two params represented as object
//O: return updated object1 with properties copied to object1 from object2...3 in order that they were passed in 
//C:
//E:
// init function with two params object1, rest object2 to pass multiple arguments 
_.extend = function(object1, ...object2){
    // copy object2 to object1 using Object.assign, create multiple argument call using rest 
       object1 = Object.assign(object1, ...object2);
       // return updated object
       return object1;
}   


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}