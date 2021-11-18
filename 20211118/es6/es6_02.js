/**
 * 전개연산자(spread operator)
 * 나열형 자료를 추출하거나 연결할때 사용.
 * 사용 방법은 배열이나, 객체, 변수명 앞에 마침표 3개를 입력 (…)
 * 다만, 배열, 객체, 함수 인자 표현식( [ ], { }, ( ) ) 안에서 사용.
 */

/**
 * 기존 자바스크립트를 이용하면 이렇게 처리해야 한다.
 */
var array1 = ["one", "two"];
var array2 = ["three", "four"];
var combined1 = [array1[0], array1[1], array2[0], array2[1]];
console.log("나열형 : ", combined1);

var combined2 = array1.concat(array2);
console.log("concat : ", combined2);

var combined3 = [].concat(array1, array2);
console.log("concat2 : ", combined3);

var first = array1[0];
var second = array1[1];
var third = array1[2] || "empty"; // || 연산자와 조합하면 추출할 배열 요소가 없을때 기본값으로 처리할 수 있다.
console.log("first :", first, "second: ", second, " third : ", third);

/**
 * spread operator를 이용하면 다음과 깉디.
 */
var array1 = ["one", "two"];
var array2 = ["three", "four"];
//  var combined1 = [array1[0], array1[1], array2[0], array2[1]];
//  var combined2 = array1.concat( array2 );
//  var combined3 = [].concat(array1, array2);
var combined1 = [...array1, ...array2];
console.log("spread operator : ", combined1);

//  var first = array1[0];
//  var second = array1[1];
//  var three = array1[2]||'empty'; // || 연산자와 조합하면 추출할 배열 요소가 없을때 기본값으로 처리할 수 있다.

const [one, two, three = "empty", ...othres] = array1;
console.log("one :", one, "two: ", two, "three : ", three);

// 연습문제
function func(args) {
  // var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
  console.log("first : ", first, "others : ", others);
}

// 연습문제 답
function func(...args) {
  var [first, ...others] = args;
  console.log(first, othres);
}
