# 02. 실행 컨텍스트

📚 코어 자바스크립트 책을 읽고 요약 정리한 문서입니다.

* [사전 지식](#사전-지식)
* [실행 컨텍스트](#실행-컨텍스트)
* [VariableEnvironment](#VariableEnvironment)
* [LexicalEnvironment](#LexicalEnvironment)
  - [호이스팅](#호이스팅)
  - [함수 선언문과 함수 표현식](#함수-선언문과-함수-표현식)
  - [스코프와 스코프 체인](#스코프와-스코프-체인)

## 사전 지식

실행 컨텍스트 개념을 살피기 전 스택과 큐 개념을 알아야한다. 실행 컨텍스트는 동일한 환경에 있는 코드들을 실행할 때 필요한 환경 정보들을 모아서 **콜 스택**에 쌓아올리는데 이때 해당 개념이 필요하기 때문이다. 간단하게 설명을 해보자면 스택은 **마지막에 저장된 데이터가 가장 처음으로 출력**되고, 큐는 **처음에 저장된 데이터가 가장 처음으로 출력된다.**
앞서 말했듯 실행 컨텍스트는 콜 스택에 쌓인다고 했다. 따라서, 어떠한 실행 컨텍스트와 관련된 코드의 실행 순서는 스택 성격에 따라 **가장 위에 쌓인 즉, 마지막으로 쌓여진 것부터 실행된다.**

위와 같은 코드가 구성되어 있을 때 콜 스택에 실행 컨텍스트가 어떤 순서로 쌓이는지 알아보자

```js
var a = 1;

function func1() {
  function func2() {
    console.log(a);
    var a = 2;
  }
  
  func2();
  console.log(a);
}

func1();
console.log(a);
```

1. 처음 자바스크립트를 실행하면 **전역 컨텍스트가 콜 스택에 담긴다.** (브라우저로 인해 자동으로 자바스크립트 파일이 열리는 순간 전역 컨텍스트가 활성화된다고 이해하면 된다.)
2. 전역 컨텍스트와 관련된 코드를 순차적으로 실행하다 **func1 함수를 호출한다.**
3. 자바스크립트 엔진이 func1에 대한 환경 정보를 수집해서 **func1 실행 컨텍스트를 생성한 후 콜 스택에 담는다.**
4. 콜 스택 맨 위에 func1 실행 컨텍스트가 있으므로 **func1 함수 내부 코드를 순차적으로 실행한다.**
5. func1 함수 내에서 **func2 함수를 호출한다.**
6. func2 함수의 실행 컨텍스트가 콜 스택의 가장 위에 담기고, **func2 함수 내부 코드를 순차적으로 실행한다.**
7. func2 함수 실행을 모두 마치면 **콜 스택에서 제거**되고,func1 함수에서 미처 실행되지 못했던 console.log(a)를 실행한다.
8. func1 또한 콜 스택에서 제거되고 전역 컨텍스트만 남아있게 된다.
9. 전역 컨텍스트에서도 a 변수의 값을 출력하게 되면 **전역 컨텍스트 또한 콜 스택에서 제거되고 콜 스택에는 아무것도 남지 않은 상태로 종료된다.**

## 실행 컨텍스트

실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체로서 활성화 되는 시점에 **호이스팅하고, 외부 환경 정보를 구성하고, this 값을 설정**하는 등 동작을 수행한다.
자동으로 생성되는 전역공간을 제외하면 개발자가 흔히 실행 컨텍스트를 구성하는 방법은 함수를 실행하는 것 뿐이다. 

> **💡 ES6에서는 블록('{}')에 의해서도 새로운 실행 컨텍스트가 생성된다.**

실행 컨텍스트 객체에 저장되는 환경 정보들은 자바스크립트 엔진이 활용할 목적으로 생성될 뿐이지 개발자가 직접 코드로 확인할 수는 없다. 이 객체에 저장되는 환경 정보는 다음과 같다.

1. `VariableEnvironment` : 현재 컨텍스트 내의 식별자(변수)들에 대한 정보 + 회부 환경 정보 + 선언 시점의 LexcialEnvironment의 스냅샷이 저장된다. 다만, 변경 사항은 반영되지 않는다.
2. `LexicalEnvironment` : 초기에는 VariableEnvironment와 같지만 **변경 사항이 실시간으로 반영된다.**
3. `This Binding` : this 식별자가 바라봐야 할 대상 객체

해당 환경 정보에 대해 하나씩 살펴보도록 하겠다.

## VariableEnvironment

실행 컨텍스트 객체를 생성할 때 VariableEnvironment에 정보를 먼저 담고, 이를 그대로 복사해서 LexicalEnvironment를 생성한다. 초기화 과정 중에는 사실상 완전히 동일하지만 
코드 진행에 따라 LexicalEnvironment을 주로 활용하게 되므로 서로 완전히 달라지게 된다.

* VariableEnvironment 수집 
  - environmentRecord : 현재 컨텍스트와 관련된 코드의 식별자 정보가 저장된다.
  - outerEnvironmentReference : 현재 호출된 함수가 선언될 당시의 LexcicalEnvironment를 참조한다.
  
## LexicalEnvironment

개인적으로 실행 컨텍스트 객체에서 가장 중요한 환경 정보라고 생각한다. 간단하게 설명하자면 컨텍스트를 구성하는 환경 정보들을 사전에서 접하는 느낌으로 모아놓은 것이다.

```
ex) 현재 컨텍스트 내부에는 a, b, c 식별자들이 있고, 그 외부 정보는 d를 참조하도록 구성되어 있다.
```

environmentRecord에는 컨텍스트를 구성하는 함수에 지정된 매개변수 식별자, 함수가 있을 경우 함수 자체, var로 선언된 변수의 식별자 등이 저장된다. 컨텍스트 내부 전체를 처음부터 끝까지 쭉 훑어나가며
**순서대로 수집한다.**

변수 정보를 수집하는 과정을 모두 마쳤더라도 아직 실행 컨텍스트가 관여할 코드들은 실행되기 전의 상태이다.
코드가 실행되기 전임에도 불구하고 자바스크립트 엔진은 이미 해당 환경에 속한 코드의 변수명들을 모두 알고 있게 되는 셈이다.

### 호이스팅

그렇다면 자바스크립트 엔진은 식별자들을 최상단으로 끌어올려놓고 실제 코드를 실행한다고 생각하더라도 코드를 해석하는 데는 문제될 것이 전혀 없을 것이다.
바로 여기서 **⭐️호이스팅⭐️**이라는 개념이 등장한다.

사실, 호이스팅은 변수 정보를 수집하는 과정을 이해하기 쉽게 만든 가상의 개념이며 자바스크립트 엔진이 실제로 끌어올리지는 않지만 편의상 끌어올린 것으로 간주하자는 것이었다.

### 함수 선언문과 함수 표현식

함수 선언문과 함수 표현식은 모두 함수를 새롭게 정의할 때 쓰이는 방식인데, 함수 선언문은 **function 정의부만 존재하고 별도의 할당 명령이 없는 것을 의미**하며 함수 표현식은 **정의한 function을 별도의 변수에 
할당하는 것을 의미한다.**

```
// 함수 선언문
function a () { ... }
a();

// 익명 함수 표현식
var b = function () { ... }
b();

// 기명 함수 표현식
var c = function d () { ... }
c();
d(); // 에러 발생 : 외부에서는 함수명으로 함수 호출할 수 없다. 함수명은 오직 함수 내부에서만 접근할 수 있다.
```

이 둘의 차이는 호이스팅 시 더 명확하게 드러난다.

### 스코프와 스코프 체인

스코프는 식별자에 대한 유효범위를 말한다. 식별자의 유효범위를 안에서부터 바깥으로 차례로 검색해나가는 것을 스코프 체인이라고 한다. 그리고 이것을 가능하게 하는 것이 LexicalEnvironment의 두 번째 
수집 자료인 outerEnvironmentReference이다.

스코프 체인은 현재 호출된 함수가 선언될 당시의 LexicalEnvironment를 참조하는데 이때 과거 시점인 **선언될 당시에 주목해야한다.**

예를 들면 a 함수 내부에 b 함수를 선언하고 다시 b 함수 내부에 c 함수를 선언한 경우 함수 c의 outerEnvironmentReference는 함수 b의 LexicalEnvironment를 참조한다. 또, 함수 b의 
outerEnvironmentReferences는 a의 LexicalEnvironment를 참조할 것이다. 이처럼 outerEnvironmentReference는 연결리스트 형태를 띈다.