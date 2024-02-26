




//lesson 1.3
/*let count = 0;
//while (count <5) console.log("spider" , ++count );
 while (count <= 10)
 {
    if(count % 2) console.log("hello ",count);
    count ++;
 }
// for (varable ; condition ; after the loop)
for (let i = 0 ; i < 11 ; i++ )
{
   console.log(i)
}
//break live the loop
//continue go to the start of the loop
let totalSum = 0
while(true)
{
   let sum = +prompt("sum numbers (0) to exit");
   if (sum == 0) break;
   if (isNaN(sum)) continue;
   totalSum += sum;
}
alert(totalSum);

//in for index
//of for items 
let boys = ["bat guy",'spider guy','silver guy']

for (let index in boys) console.log(index);
for (let members of boys) console.log(members)

//declare function can be used anywhere 
function oddNumbers(...numbersToGetOdd)//using rest
{
   for (let i = 0 ; i <= numbersToGetOdd ; i++)
   {
      if (i % 2) console.log(i);
   }
}
// Expression function can be used after only
let end = function()
{
   console.log("end of everything");
}
//arrow function for one line function let func = (argl, arg2, ...argN) => expression

//setTimeout(functionRef, delay, param1, param2,  …,  paramN)
setTimeout(oddNumbers,3000,10);

//setInterval(func, delay, arg1, arg2, …,  argN)
setInterval(end ,3000)
*/


//lesson 1.1 1.2
/*let userName;
userName = prompt("please enter your user name ");
//console.log(userName);

//array
let names = ["spider" , "wessam" ,"bat"];
//to print an array consolel.log(names);

// Ternary Operator
// condition ? value if true : value if false;
userName == "wessam" ? alert('Welcome wessam'):alert('wrong user name');
*/
