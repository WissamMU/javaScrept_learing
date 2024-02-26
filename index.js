//lesson 1.4 (arrays)
let NicNames = ['spider','bat','silver'];
console.log(NicNames);
//to add to the array use .unshift
NicNames.unshift('dex');
console.log(NicNames);

//add to the end of the array
NicNames.push('man');
console.log(NicNames);

//to add to the middel 
//(method) Array<string>.splice(start: number, deleteCount?: number | undefined): string[] (+1 overload)
NicNames.splice(2,0,'man')
console.log(NicNames);
//remove items
NicNames.shift();//first item use shift
console.log(NicNames);
NicNames.pop();//last item use .pop
console.log(NicNames);
//form the middle .splice(startin form , how many items to remove)
NicNames.splice(2,2);
console.log(NicNames);

//.slice to get new array .slice(from,to)
let PartNicNames = NicNames.slice(1,4);
console.log(PartNicNames);;

//to add another array
console.log(NicNames.concat(PartNicNames));//print both array
console.log(NicNames); //print one array


//search in arrays
let NicNames1 = ['spider','bat','silver','spider'];

//to look of items in the array or not 
console.log(NicNames1.includes('spider'));//true
console.log(NicNames1.includes('what'));//false

//for getting index of a value -1 mean dosnt have the item
console.log(NicNames1.indexOf('spider')); // 0
console.log(NicNames1.lastIndexOf('spider')); //3
//To get the index of the first item that fulfilled the condition
let ones = [4,5,7,9,4,1,1,1]
let one = ones.findIndex(ONE => ONE<2);
console.log(one);
//To get the first item that fulfilled the condition
let notOne = ones.find(NOTONE => NOTONE >= 2);
console.log(notOne);
//To get all the items that fulfilled the condition
let notOne2 = ones.filter(NOTONE => NOTONE >= 2);
console.log(notOne2);


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
