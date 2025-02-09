// 1
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true
// 2

function Calculator(){

  this.read = function(){
    this.a = +prompt("Enter a");
    this.b = +prompt("Enter b");
  };
  this.sum = function(){
    return this.a + this.b;
  };
  this.mul = function(){
    return this.a * this.b;
  };
}
let calculator = new Calculator();

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 3

function Accumulator(startingValue){
  this.value = startingValue;
  this.read = function(){
    this.value += +prompt('Enter the number');
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);
