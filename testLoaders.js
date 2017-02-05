"use strict";
// using export default function  
var bushFunction_1 = require("./bushFunction");
// using export function 
var lib_1 = require("./lib");
// import all from a file and give a alias 
var lib = require("./lib");
// calling the function from here 
bushFunction_1["default"]();
console.log(lib_1.BUSHAN);
console.log(lib.BUSHAN);
console.log(lib.drive());
