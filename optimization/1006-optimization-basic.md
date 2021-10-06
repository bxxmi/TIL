# Optimization 정리

웹 사이트가 Javascript, CSS 파일을 로딩하고 파싱하는 동안 **렌더링 차단 상태**를 유지한다. 따라서, 이들은 <b>`렌더 차단 리소스`</b>라고 불린다.

이러한 현상은 최적화를 통해 해소할 수 있다.

<h3>📌 사용하지 않는 CSS 제거</h3>

CSS는 앞에서 말했듯 렌더 차단 리소스이다. 
따라서, 이러한 특징을 가지고 있는데 사용하지 않는 CSS 코드가 있다면 브라우저가 지정한 스타일을 계산하는 데 있어서 잠재적으로 더 많은 시간을 소비하게 만든다.

> **즉 렌더 차단 현상을 가중시키는 요인이다.**

👉🏻 lighthouse를 통해 확인할 수 있다.

<h3>📌 렌더 차단 리소스 제거</h3>

브라우저가 외부 리소스를 다운로드하고 파싱하는 동안 페이지 콘텐츠를 파싱하거나 렌더링하지 않기 때문에 페이지 표시 속도가 급격하게 저하된다.

👉🏻 lighthouse를 통해 확인할 수 있다.

<h3>⚠️ 렌더 차단 리소스가 표시되는 조건</h3> 

* defer, async 속성이 없는 `<script>`

```html
<script src="main.js">
```

* media 속성과 값이 없는 `<link rel="stylesheet">`

```html
<link href="style.css" rel="stylesheet">
<link href="style.css" rel="stylesheet" media="all">
```

<h3>✅ 렌더 차단 리소스 해결</h3> 

* 필수 스크립트 임베디드 방식으로 작성

```html
<body>
...
<script>
// 필수 스크립트 작성
</script>
</body>
```

* 기타 스크립트 defer 속성 사용
```html
<body>
...
<script src="main.js" defer></script>
</body>
```

> <b>가능한 빠른 시점에 실행이 필요한 스크립트는 async 사용</b>

* media 쿼리 구문 적용

각 상황에 맞는 CSS를 적용해주는 것으로 반응형 웹 구축 시 각 환경에 대한 조건을 부여하면 좋은 퍼포먼스가 나온다.
  
```html
<link href="portrait.css" rel="stylesheet" media="orientation:portrait">
<link href="print.css" rel="stylesheet" media="print">
<link href="*.css" rel="stylesheet" media="(max-width: 639px)">
<link href="*.css" rel="stylesheet" media="(min-width: 640px)and (max-width: 639px)">
<link href="*.css" rel="stylesheet" media="(min-width: 961px)">
```

* 필수 스타일 임베디드 방식으로 작성

```html
<head>
  <style>
    /* 필수 스타일 작성 */
  </style>
</head>
```

* preload 속성 사용

팝업 및 화면 상 스크롤 제일 아래 위치한 요소 등 지연되는 스타일에 적용하는 <b>`병렬 로딩`</b> 지연 방식이다.

```html
<link rel="preload" as="style" href="style.css" onload="this.onload=null; this.rel='stylesheet'">
```

> <b>this.onload = null 할당 이유는 rel 속성 변경 시 일부 브라우저가 다시 onload 실행하는 것을 방지하기 위해 사용한다.</b>
