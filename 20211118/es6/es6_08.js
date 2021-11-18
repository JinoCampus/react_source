/**
 * 1. 대입
 */
var x = 0;
var y = 0;
var obj = { x: x, y: y };
// ES6
var obj = { x, y };

/**
 * object 객체 만들기 key:value
 */
var randomKeyString = "other";
var combined = {};
combined["one" + randomKeyString] = "some value";
// ES6 객체 { } 안에 [key]:value
var combined = {
  ["one" + randomKeyString]: "some value",
};

/**
 * 함수 만들때 생략
 */
var obj2 = {
  x: x,
  methodA: function () {
    console.log("A");
  },
  methodB: function () {
    console.log("B");
  },
};
// ES6 function 생성시 생략 가능
var obj2 = {
  x,
  methodA() {
    console.log("A");
  },
  methodB() {
    console.log("B");
  },
};

/**
 * 구조분해 할당
 *
 */
// 배열 구조분해 할당
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1; //  없는 경우 default 지정
// ES6
var [item1, item2, item3 = -1] = list;

// 치환
var temp = item2;
item2 = item1;
item1 = temp;
// ES6
[item1, item2] = [item2, item1];

// 객체 구조분해 할당
var obj = {
  key1: "one",
  key2: "two",
};
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || "default key3 value";
var newKey1 = obj.key1;
// ES6
var { key1: newKey1, key2, key3 = "default key3 value" } = obj;

// 전개연산자와 구조분해 할당
var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: "one", key2: "two" };
// otherItems [1,2]
// othres = {key2:'two}
