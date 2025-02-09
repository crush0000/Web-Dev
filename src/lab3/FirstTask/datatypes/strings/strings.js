// 1
let ucFirst =(str) =>{
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
};

console.log(ucFirst('assan'));
// 2

let checkSpam = (str) => str.toLowerCase().includes('viagra') ||
  str.toLowerCase().includes('xxx');

console.log(checkSpam("innocent rabbit"));
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
// 3

function truncate(str, maxLenght){
  let newStr = "";
  let it = 0;
  for(let i = 0;i < str.length; i++){
    if(it == maxLenght-1){
      return newStr += "...";
    }
    newStr += str[i];
    it++;
  }
  return newStr;
}

console.log(truncate("Всем привет!", 20));
// 4

function extractCurrencyValue(str) {
  return +str.slice(1);
}
