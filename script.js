/*  JavaScript is the world's most popular programming language,
    JavaScript is the programming language of the Web.

1)  Syntax for JavaScript

    // How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

2)  There two types data types in javaScript
     i) Primitive datatypes and Non Primitive data types..

     1)  Primitive datatypes:- In JavaScript, a primitive (primitive value, primitive data type) 
         is data that is not an object and has no methods or properties. There are 7 primitive data
         types: string, number, boolean, undefined, symbol, null, coercion */


 // string
 
  var intro= "A.haseeb";
  console.log(typeof intro, intro);

//  number

  var a = 15;
  console.log(typeof a, a);

// boolean

  var conf = true;
  console.log(typeof conf, conf); 
  
// undefined 

  var prog = undefined;
  console.log(typeof prog, prog);

// null 

  var object = null;
  console.log(typeof object, object);

// symbol 

  var texture = Symbol();
  console.log(typeof texture, texture);

// Coercion

  var Name = "Abdul-";
  var a = 20;
  var sum = Name+a;
  console.log(typeof sum, sum);
            