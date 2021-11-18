// ****** 화살표 함수를 사용하면 안되는 경우 ******
// ****** 메소드 ******
// Bad > this는 상위의 this를 의미한다.
const person = {
  name: "Lee",
  sayHi: () => console.log(`person Hi ${this.name}`),
};
person.sayHi(); // Hi undefined
// Good
const person1 = {
  name: "Lee",
  sayHi() {
    // === sayHi: function() {
    console.log(`person1 Hi ${this.name}`);
  },
};
person1.sayHi(); // Hi Lee

// ****** prototype ******
// Bad
const person2 = {
  name: "Lee",
};
Object.prototype.sayHi = () => console.log(`person2 Hi ${this.name}`);
person2.sayHi(); // Hi undefined

// Good
const person3 = {
  name: "Lee",
};
Object.prototype.sayHi = function () {
  console.log(`person3 Hi ${this.name}`);
};
person3.sayHi(); // Hi Lee

// ***** 생성자 함수 *****
const Foo = () => {};
// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty("prototype")); // false
const foo = new Foo(); // TypeError: Foo is not a constructor
