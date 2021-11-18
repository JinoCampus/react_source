/**
 * 기존 자바스크립트에선
 * setTimeout을 이용하여 work1, work2, work3 을 지연하여 호출되도록
 * 바로 처리되어야하는 함수 urgentWork() 함수는 따로
 * @param {*} onDone
 */
function job1() {
  setTimeout(() => console.log("job1"), 5000);
}

function job2() {
  setTimeout(() => console.log("job2"), 2000);
}

function job3() {
  setTimeout(() => console.log("job3"), 3000);
}

function urgentWork() {
  console.log("긴급 작업");
}

job1();
job2();
job3();

// function work1(onDone) {
//   setTimeout(() => onDone("작업1 완료!"), 5000);
// }

// function work2(onDone) {
//   setTimeout(() => onDone("작업2 완료!"), 2000);
// }

// function work3(onDone) {
//   setTimeout(() => onDone("작업3 완료!"), 3000);
// }

// work1(function (msg1) {
//   console.log("done after 5000ms ", msg1);
//   work2(function (msg2) {
//     console.log("done after 2000ms ", msg2);
//     work3(function (msg3) {
//       console.log("done after 3000ms ", msg3);
//     });
//   });
// });

urgentWork();
