# 웹팩 환경에서 라우터 설정 시 NOT Found 오류 해결 방법

호기롭게 개발 환경을 세팅하며 마무리 작업으로 라우터를 설정하고 있었다. 그런데 웬걸 라우터 설정 후 확인해보니 <b>`Cannot GET /경로`</b>가 버젓이 뜨고 있었다.
순간 오타가 발생해서 생긴 경우인가 싶어서 다시 작성했는데 똑같은 상황만 반복되었다. 분명 기존 프로젝트와 다를거 없는 코드를 작성했는데 말이다.

2분정도 코드를 보면서 생각하다가 혹시..? 하는 마음이 떠올랐다. 나는 여태껏 CRA로 개발 환경을 구축해왔었는데 파이널 프로젝트 개발환경은 수동으로 webpack, babel 등 설정을 했었기 때문이다.
그래서 <b>`'혹시 웹팩에 설정한 템플릿 페이지만 읽어서 그런건가?'`</b>하는 마음이 들었고 인터넷에 검색해보았더니 역시나 웹팩 설정이 문제였었다!

### 📌 문제 원인

브라우저 첫 진입 시 베이스가 되는 index.html을 연결시켜 보여주지만 다른 URL으로 접속하면 해당 URL에 맞는 HTML을 찾으려다 서버에서 찾지 못했기 때문에 문제가 발생한다.
예를 들어, /main URL에 접속하려고 했을 때 /main URL에 맞는 html 파일을 웹팩 서버 내에서 찾으려고 하기 때문이다.
여기까지 보면 html 여러 개 만들면 되나..? 라고 생각이 들 수 있지만 리액트 특성 상 html은 하나에 여러 JSX 뷰 파일로 화면을 구성하기 때문에 html을 여러 개 만든다는 것은 비효율적인 생각이다! 

### 📌 문제 해결 방법

따라서, webpack.config.js 파일에 베이스가 되는 URL이 아닌 다른 URL을 통해 사이트에 접속해도 index.html을 연결시켜 배포해 주는 작업을 해주면 된다.

<b>`webpack.config.js`</b>

```
...
devServer: {
  historyApiFallback: true,
}
```

해당 구문을 작성하면 감쪽같이 해결된다. 그렇다면 historyApiFallback의 역할은 무엇일까?

### 📌 historyApiFallback

HTML5의 History API를 사용하는 경우 설정해놓은 경로 이외의 다른 경로로 접근했을때
404 responses를 받게 되는데 이때도 index.html을 서빙할지 결정하는 옵션이다.
React와 react-router-dom을 사용해 프로젝트를 만들때도 react-router-dom이 내부적으로
HTML5 History API를 사용하므로 미지정 경로로 이동했을때 또는 있는 경로지만
그 상태에서 refresh를 했을때와 같은 경우에도 애플리케이션이 적절히 서빙될 수 있어서 유용한 옵션이다.

[historyApiFallback 설명 참조 링크]
https://brightparagon.wordpress.com/2018/06/27/webpack-v4-development-configuration/
