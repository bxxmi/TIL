# SCSS 정리

* [SCSS란?](#개요)
* [환경설정](#환경설정)
* [변수선언](#변수-선언)
* [중첩선언](#중첩-선언)
* [선택자 참조](#선택자-참조)
* [믹스인(재사용)](#mixin)
* [반복문](#반복문)

# 개요

SCSS는 CSS와 완전하게 호환되도록 SASS의 모든 기능을 지원하되 새로운 문법을 도입한 스타일시트이다. 

<h3><b>📌 왜 SCSS를 사용하는가?</b></h3>

CSS의 간결하고 쉬운 문법은 굉장히 직관적이고 배우기 쉽기 때문에 프로젝트 초기 진행 시 큰 문제가 없다.
그러나 프로젝트 규모가 커질수록 지속적인 수정이 요구되는데 이때 유지보수가 굉장히 어려워진다는 문제가 단점이 존재한다.
이를 보완하기 위해서 CSS 전처리기인 SCSS를 사용하는 것이다.

> LESS, Stylus 처럼 다른 도구들도 존재하지만 필자는 가장 보편적으로 쓰이는 SCSS를 배우기로 결정

<h3><b>📌 SASS vs SCSS 문법 비교</b></h3>

```sass
// SASS
.container
  width: 100px
  height: 100px
  .content
    color: red
    font-size: 18px
```

```scss
// SCSS
.container {
  width: 100px;
  height: 100px;
  .content {
    color: red;
    font-size: 18px;
  }
}
```

확실히 SCSS의 문법이 SASS보다 속성들간의 구분이 명확하게 보이고, CSS 문법과 거의 동일하기 때문에 익숙하고 편하다.

# 환경설정

SCSS은 브라우저가 바로 읽을 수 없기 때문에 컴파일 과정을 거쳐야한다. 따라서, 환경설정이 필요하다.

* npm 프로젝트 생성

```
$ npm init -y
```

* 컴파일을 위한 parcel 번들러 설치

```
$ npm i -D parcel-bundler
```

* package.json 파일의 "scripts" 수정

```json
"scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
}
```

<b>`dev`</b> : parcel 개발 서버 실행하는 명령

<b>`build`</b> : index.html을 기준으로 번들링을 시작하는 명령

# 변수 선언

SCSS는 자바스크립트처럼 변수를 선언할 수 있으며 코드 블럭에 따라 유효 범위가 다르다.
또한, 값의 재할당이 발생한다면 이후 해당 변수의 값은 <b>변환된 값</b>으로 출력된다.

<h3><b>📌 선언 방식</b></h3>

<b>`$`</b> 키워드를 사용한다.

```scss
$color: royalblue;
```

# 중첩 선언

CSS에서 길게 늘어뜨린 하위/자식 선택자들을 중첩하여 보기 쉽게 선언할 수 있다. 

<h3><b>📌 CSS vs SCSS 선택자 중첩 선언</b></h3>

```css
// CSS
.container ul li {
  font-size: 40px;
}

.container ul li .name {
  color: royalblue;
}

.container ul li .age {
  color: orange;
}
```

```scss
// SCSS
.container {
  ul {
    li {
      font-size: 40px;
      .name {
        // 위에 선언한 변수 사용
        color: $color;
      }
      .age {
        color: orange;
      }
    }
  }
}
```

<h3><b>📌 SCSS 속성 중첩 선언</b></h3>

선택자의 속성을 선언할 때 중첩할 수 있다.

```scss
// SCSS
.box {
  font: {
    weight: bold; // CSS ver: font-weight 
    size: 10px;
    family: sans-serif; 
  };
  margin: {
    top: 10px; // CSS ver: margin-top
    left: 20px;
  };
}
```

# 선택자 참조

상위(부모) 선택자를 참조할 때 <b>`&`</b> 키워드를 사용한다.

```scss
.btn {
  position: absolute;
  // .btn.active
  &.active { 
    color: red;
  }
}

.list {
  li {
    // .list li:last-child
    &:last-child {
      margin-right: 0;
    }
  }
}

.fs {
  // .fs-small
  &-small { 
    font-size: 12px;
  }
  // .fs-medium
  &-medium {
    font-size: 14px;
  }
  // .fs-large
  &-large {
    font-size: 16px;
  }
}
```

# mixin

SCSS에서 <b>`@mixin 변수명`</b> 키워드를 사용해서 반복되는 CSS 설정 값들을 지정할 수 있다. 설정한 공통 값은
<b>`@include 변수명`</b> 키워드를 통해 선택자에 적용할 수 있다.

<h3><b>📌 선언 및 적용 방식</b></h3>

```scss
// 선언
@mixin elementCenter {
  width: 100px;
  display: flex;
  justify-content: center;
  align-center: center;
}

// 적용
.container {
  @include elementCenter;
  .item {
    @include elementCenter;
  }
}
```

여기서 궁금한 점이 생길 것이다. 과연 @include를 통해 공통된 값을 사용하는 중에 일부 선택자만 값을 변경할 수 있을까?

<h3><b>가능하다.</b></h3>

mixin은 인수를 지정할 수 있고, 해당 인수에 <b>기본 값</b>을 지정해서 사용하되 변경하고 싶은 값은 사용자가 직접 값을 작성하면 된다.

```scss
// 1. 기본 값 사용
@mixin elementCenter($size: 100px) { // 기본 값 지정
  width: $size; // 100px
  display: flex;
  justify-content: center;
  align-center: center;
}

// 2. 사용자의 임의 값 입력
@mixin elementCenter($size: 100px) { 
  width: 200px;
  display: flex;
  justify-content: center;
  align-center: center;
}
```

# 반복문

SCSS에서 <b>`@for`</b> 키워드를 사용해서 반복되는 작업을 처리할 수 있다.

<h3><b>📌 선언 및 적용 방식</b></h3>

```scss
// 기본 선언 방식
@for 변수 from n through m { ... }

// 적용 예시
@for $i from 1 through 10 { 
  .box {
    width: 100px;
  }
}
```

위 예시처럼 사용해도 되지만 SCSS에서 <b>`#{변수}`</b>처럼 문자보간 기법을 사용해서 조금 더 유용하게 사용할 수 있다.

```scss
@for $i from 1 through 10 {
  .box:nth-child(#{$i}) {
    width: 100px;
  }
}
```

반복문의 변수를 이용해서 산술 연산도 가능하다.

```scss
@for $i from 1 through 10 {
  .box:nth-child(#{$i}) {
    width: 100px * $i;
  }
}
```
