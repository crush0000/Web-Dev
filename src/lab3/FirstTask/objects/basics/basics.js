// 1

let user = new Object();
user.name = "John";
user.surname = "Smith";
for(let key in user){
  console.log(key, user[key]);
}
user.surname = "Pete";
delete user.name;
for(let key in user){
  console.log(key, user[key]);
}
// 2

let isEmpty = (obj) =>{
  for(let key in obj){
    return false;
  }
  return true;
};

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false
// 3

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for(let key in salaries){
  sum += salaries[key];
}
console.log(sum);
// 4

let multiplyNumeric = (obj) =>{
  for(let key in obj){
    if(typeof obj[key] == 'number'){
      obj[key] *= 2;
    }
  }
};


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };




for(let key in menu){
  console.log(key, menu[key]);
}
