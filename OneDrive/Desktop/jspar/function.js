//callback normal function
// function callback1 (a) {
//     console.log('boy');
//     a();
// }

// function callback2 (b) {
//     console.log('girl')
   // b();
//}

//callback2(callback1);
// 

//callback annonymous function

// var callback3 = function (a){
//     console.log('son');
//     a();
// }
// var callback4 = function (b){
//     console.log('father');
//     b();
// }
//callback3();
// callback4(callback3);

//callback arrow function

// var callback5 =(a)=>{
//     console.log('mother');
//     a();
// }
// var callback6 = (b)=>{
//     console.log('anty');
//    // b();
// }
// callback5(callback6);

//inner function or neasted function

// function innerparent (){
//     console.log ('little');
//     function innerchilds () {

//         console.log('big');
//     }
//     innerchilds();
// }
// innerparent();

//inner function annonymous

// var inner3 = function () {
//     console.log('pass');
//     var inner4 = function() {
//         console.log('fail');
//     }
//     inner4();
// }
// inner3();

//inner function arrow

// 

//reutn type function

// function retuntype(a,b){
//     console.log(a),
//     console.log(b),
//       sum =(a+b);
//     return sum;
// }
// var call= retuntype(5,8);
// console.log(call);

//return type annonymous function
 
// var return1= function (a,b){
// mul=(a*b);
// return mul;
// }
// var mult = return1(7,3);
// console.log(mult);

//return type arrow
  
// var returns = (g,f) => {
//     sub=(g-f);
//     return sub;
// }
// var subtra = returns(10,8);
// console.log(subtra);

//self function

// (function selfcall (a){
//     console.log('calling');
//     console.log(a);

// })
//(6);

//self calling in annonymous
//   var selfcc=function(f){
//     console.log('ring')
//     console.log(f);
// }
// (8);


//self calling arrow function

// var self1 = (a) => {
//     console.log('am');
//     console.log(a);
// }
// (5);

//hoisting function
// hoist(7,8);
// function hoist(a,b){
//  var sum=a+b;
// console.log(sum)
// }