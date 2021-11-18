/**
 * 기존 자바스크립트에선 직접 합차는 방법과
 * Object.assign 함수를 이용해서 합치는 방법
 */

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combiend = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
console.log(combiend);

var combined1 = Object.assign({}, objectOne, objectTwo);
console.log("Object.assign : ", combined1);

var combined2 = Object.assign(objectTwo, objectOne);
console.log("Object.assign : ", combined2);

var others = Object.assign(objectOne, objectTwo);
delete others.other;
console.log(" delete others ", others);

/**
 * ES6 에선 새롭게 바뀜
 */
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
//  var combiend = {
//      one: objectOne.one,
//      two: objectOne.two,
//      three: objectTwo.three,
//      four: objectTwo.four,
//  };
var combiend = {
  ...objectOne,
  ...objectTwo,
};
console.log(combiend);
var combiend2 = {
  ...objectTwo,
  ...objectOne,
};
console.log(combiend2);

var { other, ...others } = combiend;
console.log(other);
console.log(others);

function func2({ id, pwd, ...other }) {
  console.log("ID: ", id, "PWD: ", pwd, "other: ", other);
}

// 연습문제
function func1(params) {
  if (params) {
    var id = params.id;
    var pwd = params.pwd;
    var other = {
      name: params.name,
      dept: params.dept,
    };

    console.log("ID: ", id, "PWD: ", pwd, "other: ", other);
  }
}
// 연습문제 답
var data = { id: "KKAKAO", pwd: "NAVER", name: "CAMPUS", dept: "DEV" };
func1(data);
func2(data);
