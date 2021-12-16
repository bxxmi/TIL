"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
// public or private 키워드를 통해 생성자 함수 안의 this.radius = radius를 다음과 같이 자동화할 수 있다.
// public 키워드를 작성하면 클래스 밖에서 radius에 접근이 가능하다.
// private 키워드를 작성하면 클래스 밖에서 radius에 접근이 불가능하다.
// public과 private은 타입스크립트 내에서만 유의미한 속성이다. (컴파일된 자바스크립트 파일을 보면 차이가 없다.)
// class Circle implements Shape {
//   constructor(public radius: number) {
//   }
//
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(5, 6);
// 위에서 만든 클래스를 파라미터의 데이터 형식으로 받아올 수도 있다.
function getCircleArea(circle) {
    return circle.getArea();
}
function getRectangleArea(rectangle) {
    return rectangle.getArea();
}
// Circle, Rectangle 클래스 모두 Shape이라는 인터페이스를 implements하고 있다.
// 이때, 결과 값을 위와 같이 따로 선언하는 것보다 아래와 같이 한꺼번에 선언하면 간편하다.
// 변수 shapes는 Shape 인터페이스로 이루어진 배열이고 여기에 circle과 rectangle을 넣어준다.
const shapes = [circle, rectangle];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
