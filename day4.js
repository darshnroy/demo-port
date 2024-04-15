const userInput = prompt();
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(prompt);


let object={
    
    Name:"darshan",
    Age:26

}
console.log(object["Name"]);

 let a=[1,2,3];
 console.log("array :"+a);
 a.unshift(321);
 console.log("after unshift array :" + a);
 a.shift();
 console.log("after shift array :" +a)
 

let f=0;
while(f<10)
{
  f = f+1;
  console.log("hello" +f);
}

let f=0;
const array =[1,2,3,4,5,6,7,8,9,10];
while(f < array.length)
{
  
  console.log(array[f]);
  f=f+1;
}



for(let f=0; f<10;++f)
console.log(f);


let arr=[1,2,3,4];
for(let f=0;f<arr.length;++f)
{console.log(arr[f]);
}

const list=['a','b','c','d','e'];
for (const value of list) {
  console.log(value);
}

//function

function fun(){
  console.log("hello");
}
fun();

function add(a,b){
  let sum=a+b;
  console.log(sum)
}
add(10,45);
add(34,75);
add(232,785);

function sub(a,b){
  let diff=a-b;
  console.log(diff)
}
sub(59,78);
sub (67,34);
sub(78,34);

function sub(a,b){
  let diff=a-b;
  return diff
}
let diff = sub(220,120);
console.log(diff)


let car= {
  brand: "ford",
   model: "fiesta",
    start :"function"()
    {
    console.log("started")
  }
} 
console.log(car);
car.start();



// sub
function sub(a,b){
  let diff=a-b;
  return diff
}
let diff = sub(220,120);
console.log(diff)

//addition
function add(a,b){
  let sum=a+b;
  return sum
}
let sum = add(220,120);
console.log(sum)

// product
function product(a,b){
  let pd =a*b;
  return pd
}
let pd = product(220,120);
console.log(pd)\
// division
function div(a,b){
  let di=a/b;
  return di
}
let di = div(220,120);
console.log(di)

// modulo
function module(a,b){
  let mod=a%b;
  return mod
}
let mod= module(220,120);
console.log(mod)


const car = {
  name: "thar",
  start: function (){
    console.log("running")
  }
}

console.log(car)
