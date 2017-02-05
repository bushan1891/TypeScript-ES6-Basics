// using export default function  
import bushan from './bushFunction';
// using export function 
import {BUSHAN,KARISH,drive} from './lib';
// import all from a file and give a alias 
import * as lib from './lib';


// calling the function from here 
bushan();


console.log(BUSHAN);
console.log(lib.BUSHAN);
console.log(lib.drive());
