/**
 * 기존 자바스크립트 클래스 만들던 방식
 * @param {*} x
 * @param {*} y
 */
function Shape(x, y) {
  this.name = "Shape";
  this.move(x, y);
}

// static 함수를 선언하는 예제
Shape.create = function (x, y) {
  return new Shape(x, y);
};
// 인스턴스 함수를 선언하는 예제
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  return 0;
};

// 혹은
Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },
  area: function () {
    return 0;
  },
};

var s = new Shape(10, 10);
s.area(); // 0

/**
 * ES6 에서 Class 선언하는 방법
 * 생성자, 클래스변수, 클래스함수 정의에는 변수 선언을 위한 키워드( var, let, const ... )
 * 사용하지 않는다.
 */
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }
  name = "Shape";
  constructor(x, y) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

var s = new Shape(10, 10);
s.area(); // 0
console.log(s);

/**
 * ES6 상속
 */
class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  area() {
    if (this.radius === 0) return super.area();
    return this.radius * this.radius;
  }
}

var c = new Circle(0, 0, 10);
c.area(); // 100
