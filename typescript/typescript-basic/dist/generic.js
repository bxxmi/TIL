"use strict";
// 제네릭
// 함수, 클래스, 인터페이스, 타입 alias 등 여러 종류 타입에 대하여 호환을 맞춰야할 때 사용되는 문법이다.
// 제네릭을 사용하게 되면 실제 파라미터에 넣는 값의 타입을 유추할 수 있다.
function merge1(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
// 제네릭 사용 전
// merged의 데이터 타입은 any
// 이 경우 merged1 안에 어떤 데이터가 들어있는지 확인이 불가능하다.
const merged1 = merge1({ foo: 1 }, { bar: 2 });
// 제네릭 사용 후
// 함수의 파라미터가 어떤 데이터 타입을 가지는지 모를 경우 제네릭을 사용한다.
function merge2(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
// merged2 변수안에 어떤 데이터가 들어있는지 확인할 수 있다.
const merged2 = merge2({ foo: 1 }, { bar: 2 });
// Items 인터페이스의 데이터 타입을 string으로 지정하게 되면 string 배열이 된다.
const items1 = {
    list: ["a", "b", "c"],
};
// Items 인터페이스의 데이터 타입을 number로 지정하게 되면 number 배열이 된다.
const items2 = {
    list: [1, 2, 3],
};
const items3 = {
    list: [1, 2, 3],
    value: "ab",
};
// 클래스에서의 제네릭
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
