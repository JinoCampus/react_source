/*
기존 자바스크립트에서 문자열 또는 문자열과 변수를 연결하려면 병합연산자(+)를 사용.
다음과 같은 예제: 크롬 콘솔창에서 실행해보세요.
*/
var string1 = "안녕하세요.";
var string2 = "반갑습니다.";
var greeting = string1 + " " + string2;
var product = {
  name: "도서",
  price: "4200원",
};
var message =
  "제품 " + product.name + " 의 가격은 " + product.price + " 입니다.";
var multline = "문자열1\n 문자열2";
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = "곱셈값은 " + value1 * value2 + " 입니다.";
var operator2 = "boolean 값은 " + (boolValue ? "참" : "거짓") + " 입니다.";

/**
 * ES6 에 추가된 문자열 병합 방식
 * 템플릿 문자열 백틱(`)
 * 템플릿 문자열에 ${ } 기호를 사용하여 변수 또는 식을 포함할 수 있다.
 */

var string1 = "안녕하세요.";
var string2 = "반갑습니다.";
var greeting = `${string1} ${string2}`;
console.log("greeting : ", greeting);
var product = {
  name: "도서",
  price: "4200원",
};
var message = `제품 ${product.name} 의 가격은 ${product.price} 입니다.`;
console.log("message : ", message);
var multline = `문자열1\n 문자열2`;
console.log(multline);
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2} 입니다.`;
console.log("operator1 : ", operator1);
var operator2 = `boolean 값은 ${boolValue ? "참" : "거짓"} 입니다.`;
console.log("operator2 : ", operator2);

/**
 * 연습문제
 */
var cart = {
  name: "도서",
  price: 1500,
};
var getTotal = function (cart) {
  return cart.price + " 원";
};

var myCart =
  "장바구니에 " +
  cart.name +
  " 가 있습니다. 총 금액은 " +
  getTotal(cart) +
  " 입니다.";
