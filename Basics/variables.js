// let, const
// String, number, Boolean, null, undefined

//string can have double or single quote : (I like single)
//semicolon is optional too

//String
const name = 'John';
//number
const age = 30;
//Boolean
const isCool = true;
//float :there is no float or decimal data type in JS its just a number
const rating = 4.5;
//null
const x = null;
//undefined
const y = undefined;
let z;

console.log("name"+typeof name);
console.log("age"+typeof age);
console.log("isCool"+typeof isCool);
console.log("rating"+typeof rating);
//in first implementation values were represented as type tag and value  with type tag being 0 and null was NULL
//the return value for typeof null is bogus its not really a object
console.log("x"+typeof x);
console.log("y"+typeof y);
console.log("y"+typeof z);


//more about Strings 

//Concatination : older method
console.log('My name'+name+'and I am' + age);

//With ES15 we have template strings or template literals 
// instead of quotes we use back ticks 

console.log(`My name is ${name} and I am ${age}`);


//String Properties and methods

const s = "Hello World";
// length is a property of String 
console.log(s.length);
console.log(s.toUpperCase);
console.log(s.substring(0,5));
console.log(s.split(' ',5));

// Arrays - variables that hold multiple values 

// old method
//new and Array constructor, creating object for Array
 let number = new Array(1,2,3,4,5);

 //new method
 let fruits = ['apples','oranges','pears'];


console.log(fruits);

// IMP
// JS doesnt statically typed 
// TS has statically typed where you can assign the data type 
// EXAMPLE - const fruits:String


//Ressignment is rarely done so const is not used but manipulation is done alot with Arrays so let is preferred
fruits[1] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
console.log(fruits[1]);









