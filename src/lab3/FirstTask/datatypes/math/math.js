// 1
let a  = +prompt("Enter your first number");
let b = +prompt("enter your second number");
console.log(a+b);
// 2

alert( Math.round(6.35 * 10) / 10 );

// 3

function readNumber() {
  let num;

  while(!isFinite(num)){
    num = prompt("Enter ypur number");
  }

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);
// 4

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}
// 5

function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5) );
console.log(random(1, 3) );
console.log(random(1, 10) );
// 6

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1, 2) );
console.log(randomInteger(1, 6) );

console.log(randomInteger(1, 15) );


