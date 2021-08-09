# CSS 정리

* [경로](#경로)

* [HTML 요소](#HTML-요소)

* [선언 방식](#CSS-선언-방식)

* [복합 선택자](#CSS-Combinators)

* [가상 클래스 선택자](#CSS-Pseudo-class-Selector)

* [가상 요소 선택자](#CSS-Pseudo-element-Selector)

* [속성 선택자](#CSS-Attribute-Selector)

* [CSS 상속](#CSS-상속)

* [CSS 우선순위](#CSS-우선순위)

* [CSS 속성](#CSS-Attribute)

***

# 경로

* 상대경로

`./` : 주변에 위치한 경로를 나타내며 생략 가능

`../` : 상위 폴더로의 이동을 나타냄

* 절대경로

`http/https` : 사이트의 주소

`/` : 최상위 경로인 root를 나타냄

# HTML 요소

* 인라인 요소

글자를 만들기 위한 요소로서 `수평`으로 쌓입니다. 글자를 취급하기 때문에 직접적으로 사이즈를 지정할 수 없으며, margin과 padding을 통해 여백 효과를 줄 경우 `좌우`만 효과를 부여할 수 있습니다.

```
<span>, <img>, <a>, <br>, <label> ...
```

* 블록 요소

상자 즉, 레이아웃을 만들기 위한 요소로서 `수직`으로 쌓입니다. 상속 관계에 있는 요소의 경우 자식 요소의 크기는 부모 요소의 크기만큼 자동으로 변경됩니다. 

```
<div>, <ul>, <li> ...
```

# CSS 선언 방식

* 내장 선언

스타일 태그 안에 스타일을 작성하는 방식입니다.

```
<head>
  <style>
     a { text-decoration: none; }
  </style>
</head>
```

* 링크 선언

외부에 존재하는 css 파일을 연동하는 방식입니다.

```
<head>
  <link rel="stylesheet" href="main.css">
</head>
```

* 인라인 선언

요소에 직접적으로 스타일을 지정하는 방식입니다.

```
<body>
  <div style="color:red;"></div>
</body>
```

* @import 선언

css 문서 내에 또 다른 css 문서를 연결할 때 사용합니다.

```
@import url('./main.css');

* { color: blue; }
```

# CSS Combinators

* 일치 선택자

선택자 abc와 xyz를 동시에 만족하는 요소를 선택합니다.

```
span.orange { color: red; }
```

* 자식 선택자

선택자 abc의 자식 요소 xyz를 선택합니다. 주의할 점은 `한 단계 아래에 있는 요소`만 선택합니다.

```
ul > .orange { color: red; }
```

* 하위 선택자

선택자 abc의 하위 요소 xyz를 선택하며 띄어쓰기를 통해 선택자와 하위 요소를 구분합니다.

```
body span { color: red; }
```

* 인접 형제 선택자

'+' 기호를 사용하며 선택자 abc의 바로 다음 형제 요소인 xyz `하나`를 선택합니다.

```
.orange + li { color: red; } 
```

* 일반 형제 선택자

'~' 기호를 사용하며 선택자 abc의 다음 형제 요소 `모두`를 선택합니다.

```
.orange ~ li { color: red; }
```

# CSS Pseudo class Selector

* :hover

마우스 오버 효과를 지정합니다.

* :active

요소에 마우스를 클릭하고 있는 동안의 효과를 지정합니다.

* :focus

요소에 포커스 될 때의 효과를 지정합니다. 단, input 태그처럼 `사용자의 입력`이 있는 요소에만 가능합니다.

💡 `tabindex` : 포커스가 불가능한 요소를 가능하게 하는 속성

```
tabindex = "-1"
```

* transition

자연스럽게 요소의 크기가 변경되는 효과를 부여합니다.

* first-child

선택자의 형제 요소 중 제일 첫 번째 요소를 선택합니다.

* last-child

선택자의 형제 요소 중 제일 마지막 요소를 선택합니다.

* nth-child(n)

선택자의 형제 요소 중 n번째 요소를 선택합니다. 만약 nth-child(2n)과 같이 되어있다면 2의 배수 자리 요소를 선택하는 것입니다. 이처럼 다양한 연산을 통해 여러 형제를 선택할 수 있습니다.

* not

not이 붙은 선택자 외의 다른 요소를 선택합니다.

# CSS Pseudo element Selector

* before

`가상의 인라인 요소`를 만들고, 선택자 요소 내부 앞에 내용을 삽입합니다.

```
span::before { content:"이전"; }
```

* after

`가상의 인라인 요소`를 만들고, 선택자 요소 내부 뒤에 내용을 삽입합니다.

```
span::after { content:"이후"; }
```

# CSS Attribute Selector

대괄호를 사용해서 해당 속성이 부여된 요소를 선택합니다.

`html`

```
<input type="text" value="example" disabled>
<input type="password">
```

`css`

```
[disabled] { color: red; }
[type="password"] { color: blue; }
```

# CSS 상속

글자, 문자 관련 속성들 중 일부가 스타일 상속이 가능합니다. 하나의 div내에 여러 div가 존재할 때 부모 div에 css 속성이 지정되면 
자식 div 에도 같은 효과가 적용됩니다.

* 강제 상속

자식 요소에 `inherit` 값을 지정하면 부모 요소의 스타일을 자식 요소에게 강제로 상속 시킬 수 있습니다.

# CSS 우선순위

```
!important > 인라인선언 > 아이디선택자 > 클래스선택자 > 태그선택자 > 전체선택자(*)
```

# CSS Attribute

* box-sizing

요소의 크기를 계산할 때 기준을 지정해주며 기본 값은 `content-box`입니다.

`border-box` : 요소의 내용과 padding, border 크기로 계산

즉, padding 또는 border 등의 효과를 부여하여 요소의 크기가 달라졌지만 기존 요소의 크기를 그대로 사용하면서 
내가 지정한 효과를 부여하고 싶을 때 사용한다. 

* display 

`block` : 상자(=레이아웃) 요소로 보이도록 합니다. 인라인 요소를 크기를 지정할 수 있는 블록 요소로 만들기 위해 해당 속성과 값을 할당합니다.

`inline` : 글자 요소로 보이도록 하며 요소들을 `수평`으로 배치합니다.

`inline-block` : inline + block

`flex` : 1차원 레이아웃으로 하나의 축을 사용하기 때문에 수평 또는 수직으로만 배치가 가능합니다.

`grid` : 2차원 레이아웃입니다.

`none` : 화면에 출력되지 않도록 합니다.
