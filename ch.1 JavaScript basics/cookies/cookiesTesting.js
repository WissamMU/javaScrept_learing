// Cookies (Details on the note)
/*document.cookie = `email=spider@js.com;${new Date(2030,1,1).toUTCString()}`;
document.cookie = `age=30;${new Date(2030,1,1).toUTCString()}`;*/

///web storage API (READ THE NOTE)
//sessionStorage same thing as localStorage just ching the name for using
localStorage.setItem('name','wessam');// to save an item
let name = localStorage.getItem('name');//to get item value to a var
console.log(name);
localStorage.removeItem('name');//remove item by the key
localStorage.clear();//clear everyting
