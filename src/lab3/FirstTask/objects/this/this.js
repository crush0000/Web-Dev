// 1

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name );
// 2

let calculator = {
  read(){
    this.a = +prompt("Enter a");
    this.b = +prompt("Enter b");
  },
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
// 3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this;
  }
};
console.log(ladder.up().up().down().showStep().down().showStep());