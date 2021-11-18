// 기존 자바스크립트 for
function parse(qs) {
  // queryString = 'banana=10&apple=20&orange=30
  var queryString = qs.substr(1);
  var chunks = qs.split("&");
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split("=");
    var key = parts[0]; // key='banana'
    var value = parts[1]; // value = 10
    result[key] = value; // result={banana: '10'}
  }
  return result;
}

function parse1(qs) {
  // queryString = 'banana=10&apple=20&orange=30
  const queryString = qs.substr(1);
  const chunks = qs.split("&");
  let result = {};
  chunks.forEach((chunck) => {
    // 1. chunck parameter 에 단건씩 담긴다
    const parts = chunck.split("=");
    const key = parts[0]; // key='banana'
    const value = parts[1]; // value = 10
    result[key] = value; // result={banana: '10'}
  });
  return result;
}
// 좀더 간결하게 구조분해 할당으로
function parse1(qs) {
  chunks.forEach((chunck) => {
    // 2. 구조 분해할당으로 간단하게 처리가능
    const [key, value] = chunck.split("=");
    // var key = parts[0]; // key='banana'
    // var value = parts[1]; // value = 10
    result[key] = value; // result={banana: '10'}
  });
  return result;
}

/**
 * forEach() return 결과 값이 없다.
 * 이는 가변변수 let 을 사용한다.
 * 만약 const 불변변수 만을 사용해야 한다면 map() 함수를 사용하면 된다.
 * 왜냐면 map()은 내부에서 return 을 함으로써 새로운 배열을 만들기 때문.
 */

function parseMap(qs) {
  // queryString = 'banana=10&apple=20&orange=30
  const queryString = qs.substr(1);
  const chunks = qs.split("&");
  const result = chunks.map((chunck) => {
    // 1. chunck parameter 에 단건씩 담긴다
    var [key, value] = chunck.split("=");
    return { key: key, value: value };
  });
  return result;
}
console.log(".map 사용: ", parseMap("banana=10&apple=20&orange=30"));

/**
 * reduce 함수는 약간 도특하다.
 * 앞에서 forearch(), map() 의 결과값은 객체가 아닌 배열.
 * 객체를 변환 하고 싶다면 reduce() 함수를 사용해라
 */

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/**
 * 배열이 아닌 객체를 받아보자
 */
function parseMapReduce(qs) {
  // queryString = 'banana=10&apple=20&orange=30
  const queryString = qs.substr(1);
  const chunks = qs.split("&");
  return chunks
    .map((chunck) => {
      // 1. chunck parameter 에 단건씩 담긴다
      var [key, value] = chunck.split("=");
      return { key: key, value: value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}
