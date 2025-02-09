// 1
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");

alert( fruits.length );
// 2

let styles = ["Jazz", "Bluz"];
styles.push("Rock&Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
// 3

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();
// 4

function sumInput(){
  let inputArr = [];
  while(true){
    let input = prompt("Enter your num");
    if (input === "" || input === null || !isFinite(input)) break;
    inputArr.push(+input);
  }
  let sum = 0;
  for (let number of inputArr) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );
// 5

function getMaxSubSum(arr){
  let maxSum = 0;
  let curSum = 0;
  for(let i = 0; i < arr.length; i++){
    curSum += arr[i];
    if(curSum  > maxSum){
      maxSum = curSum;
    }
    if(curSum < 0) curSum = 0;
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
