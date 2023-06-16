//learning about variables
var a= "123";
console.log(a);
let b = '456';
console.log(b);
const c=153;
console.log(c);


//INTERACTIONS


//alert
// alert('hello world!');

//prompt
// const age = prompt('how old are you');
// console.log(age);

//confirmation
// const isBoss = confirm('are you the boss?');
// console.log(isBoss);

//Example
// const age = prompt("How old are you?");
// if (age > 20){
//     console.log("Age is greater than 20")
// }

//Operators
let x=1;
let y=2;
if (x==1){
    console.log("x is 1");
}
//and operator
if (x===1 && y===2){
    console.log("&& operator tested")
}
//or operator
if (x===1 || y===2){
    console.log("|| operator tested")
}

//If Else

if (x===1){
    console.log("x=1");
}else{
    console.log('x!=1');
}
//Ternary Operator
let result= x===1 ? "x =1": "x != 1";


// Loop
for ( let i=0; i<10; i++){
    console.log(i);
}