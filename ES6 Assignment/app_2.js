var a=10;
var b=8;
var c=6;
{
let a=2;
//here value of a is 2 but only within the block
var b=10;
//here value of b is 10 inside and outside the block it will remain 10
const c=8;
//here value of c is 8 but only within the block
//const cannot be reassigned
//c=5;
}
document.write("This value of a is:"+a);
//let has block scope
document.write("<br>");
document.write("The value of b is :"+b);
//var does not have block scope
document.write("<br>");
document.write("The value of c is :"+c);
//const has block scope