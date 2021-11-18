/**
 * 화살표 함수
 * 기존 자바스크립트 함수
 */
function add(first, second) {
  return first + second;
}

// typeof add === 'function'
// 익명함수
var add = function (first, second) {
  return first + second;
};

// typeof add === 'function'
console.log(typeof add === "function", add(3, 1));

// ****** ES6 의 화살표 함수 ******
// 매개변수 지정 방법
// 매개변수가 없을 경우 () => { ... }
var add1 = () => {
  return 1 + 3;
};

// 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다. x => { ... }
var add2 = (x) => {
  return x + 1;
};
// 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다. (x, y) => { ... }
var add3 = (first, second) => {
  return first + second;
};

// 함수 몸체 지정 방법
var square1 = (x) => {
  return x * x;
}; // single line block
var square2 = (x) => x * x; // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

// ****** 화살표 함수  호출 ******
// ES5
var pow = function (x) {
  return x * x;
};
console.log(pow(10)); // 100
// ES6
const pow = (x) => x * x;
console.log(pow(10)); // 100

// ****** 콜백 함수 호출 ******
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) {
  // x는 요소값
  return x * x;
});
console.log(pow); // [ 1, 4, 9 ]
// ES6
const arr = [1, 2, 3];
const pow = arr.map((x) => x * x);
console.log(pow); // [ 1, 4, 9 ]

// ****** this ******
/**
 * 콜백 함수의 this 범위로 생기는 오류를 피하기 위해 bind()
 * 함수를 사용하여 this 객체를 전달하는 과정을 포함
 * addThis2 는 bind(this) 사용
 * addThis3 는 화살표 함수이므로 생략
 */
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);

    var addThis3 = (first, second) => this.value + first,
      second;
  }
}

//  ****** 계단형 함수 선언 구조 ******
// es5
function addNumber(num) {
  return function (value) {
    return num + value;
  };
}
// es6
var addNumber = (num) => (value) => num + value;
console.log(addNumber(1)(3));
