/**
 * 가변 변수 let 키워드
 */
let num = 1;
num = num + 3;

let str = "문자";
str = "문자 바꾸기";

let arr = [];
arr = [1, 2, 3];

let obj = {};
obj = { name: "새 객체" };

console.log("오류 발생하지 않았다. ");

/**
 * 불면 변수 : const
 */
const num = 1;
num = 3; // 오류발생

const str = "문자";
str = " 새문자 "; // 오류발생

const arr = [];
arr = [1, 2, 3]; // 오류발생

const obj = {};
obj = { name: "JINO" }; // 오류발생

/**
 * 자바스크립트 내장 함수로 변경 가능하다.
 */

const arr2 = [];
arr2.push(1);
arr2.splice(0, 0, 0);
arr2.push(2);
arr2.push(3);
arr2.pop();

console.log(arr2);

const obj2 = {};
obj2["name"] = "내이름";
Object.assign(obj2, { name: "새이름", id: "TEST" });
delete obj2.name;
console.log(obj2);

/**
 * 불변 변수는 수정할 수 없는데 왜 가능한가?
 * 무결성 제약 조건에 위배되면 오류
 * 위배되지 않으면 변겨 가능.
 *
 *
 * 만약 불변 변수를 수정해야 한다면?
 * 수정은 하지 않고 새로 정의하는 개념으로 처리하라.
 *
 * 배열에 새로운 값을 추가할 때는 push() 대신 concat() 함수를
 * 삭제할때는  shift() 함수 대신 slice().concat() 함수를
 * 왜냐? concat() , slice() 는 내부적으로 새로운 객체를 return 한다.
 *
 */

const num1 = 1;
const num2 = num1 * 3;

const str1 = "문자열";
const str2 = str1 + " 추가";

const arr3 = [];
const arr4 = arr3.concat(1); // arr4=[1]
const arr5 = [...arr4, 2, 3]; // arr5=[1.2.3]
const arr6 = arr5.slice(0, 1); // arr6=[1], arr5=[1,2,3]

const [first, ...arr7] = arr5; // arr7=[2,3] first=1

const obj3 = { name: "새이름", age: 20 };
const objValue = { name: "새이름", age: obj3.age };
const obj4 = { ...obj3, name: "새이름" }; // obj4={name:'새이름', age:20}
const { name, ...obj5 } = obj4; // obj5={age:20}
