# Webpack 정리

코드의 재사용성을 높이고 유지보수를 편리하게 하는 작업을 <b>모듈화</b>라고 한다. 그러나
자바스크립트에서는 모듈화를 지원하는 모듈 시스템이 없다. 이 한계를 극복하기 위해 나온 
개발 도구가 있는데 그것은 바로 <b>`웹팩`</b>이다. 굉장히 중요하기 때문에 정리를 해보려고 한다.

* [정의](#Webpack-정의)
* [설치](#Webpack-)
* [개념 및 사용법](#Webpack-주요-개념-및-사용법)

# Webpack 정의

Webpack은 자바스크립트 애플리케이션을 위한 <b>정적 모듈 번들러</b>이다. 
컴파일 과정을 통해 여러 의존 관계에 있는 모듈들을 <b>하나의 JS 파일로 묶어주는 역할</b>을 수행한다.
npm을 통해 여러 플러그인을 설치하면 묶어주는 것 뿐만 아니라 다양한 기능을 사용할 수 있다.

> <b>모듈 번들러</b>
>
> Webpack을 찾아보면 ‘모듈 번들러’라는 단어가 계속적으로 나오는데
여러 개의 파일을(=모듈) 하나의 JS 파일로 묶어주는 도구를 말한다. 

![webpack-1](https://user-images.githubusercontent.com/56878724/138269886-99372137-1e31-4991-801c-720d84d6ee69.png)

Webpack에서 컴파일은 위 이미지와 같이 <b>`엔트리 파일`</b>을 시작으로 <b>`의존 관계`</b>에 있는 모듈을 엮어서 하나의 번들 파일을 만드는 작업이다. 자바스크립트를 사용하는 HTML 코드에서는 컴파일 결과로 만들어진 번들 파일만 포함하면 된다.

![webpack-2](https://user-images.githubusercontent.com/56878724/138274189-8e06415a-8063-4c61-8e70-c562940f1218.png)

엔트리 파일이 여러 개일 때는 엔트리 파일마다 번들 파일이 생성된다.

> <b>엔트리 파일</b>
>
> 엔트리 파일은 연관된 여러 JS 파일들을 묶는 최상위 JS 파일이다. 즉, 엔트리 파일을 통해 
> 다양한 모듈을 사용할 수 있게 되는 것이다.


# Webpack 설치

Webpack은 기본적으로 <b>`Node.js`</b>가 설치된 환경에서 사용된다. 

* 터미널을 열고 <b>package.json</b>을 설치한다.

```
npm init -y
```

* 터미널을 열고 npm을 통해 <b>webpack</b>을 설치한다.

```
npm i -D webpack
```

<h3>⚠️ 주의할 점</h3>

> <b>설치 시 -D 키워드를 사용하는 이유</b>
> 
> -D 키워드를 통해 설치한 패키지를 package.json 파일에서 확인하면 devDependencies 안에 들어있다.
> 개발 중(=컴파일 시)에 필요한 라이브러리들은 devDependencies에 설치한다.
> 웹팩은 개발 단계에서만 필요하고 실제 서비스에서는 필요없기 때문에 -D 키워드로 설치한다.

* 터미널에서 webpack 커맨드를 실행할 수 있게 해주는 <b>webpack-cli</b>를 설치한다.

```
npm i -D webpack-cli
```

* 실시간 리로드 기능을 갖춘 개발 서버인 <b>webpack-dev-server</b>를 설치한다.

```
npm i -D webpack-dev-server
```

* 엔트리 파일을 사용하는 HTML 파일을 자동으로 연결해주는 <b>HtmlWebpackPlugin</b>을 설치한다.

```
npm i -D html-webpack-plugin
```

* package.json 파일의 scripts 부분에 <b>webpack 명령어를 작성한다.</b>

```
  "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
```

<b>`dev`</b> 해석 : webpack-dev-server를 통해 변경 사항을 실시간으로 반영하고, <b>development</b> 모드를 사용한다. 

<b>`build`</b> 해석 : <b>production</b> 모드를 사용해서 코드를 최적화한다.

# Webpack 주요 개념 및 사용법

* webpack 환경설정을 위해 root 디렉토리 안에 <b>webpack.config.js</b>파일을 생성한다.

* 사용할 플러그인과 경로를 가져온다. 이때, 경로(=path)는 NodeJS의 내장 API이다.

```javascript
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

* <b>`Entry`</b> : 여러 모듈을 묶을 엔트리 파일 경로를 설정한다. 이때, 엔트리는 여러 개 존재할 수 있다.

```javascript
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: './main.js'
  }
}
```


* <b>`Output`</b> : webpack이 만들어낸 번들을 저장할 위치를 설정한다.

```javascript
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    }
  }
}
```

* <b>`loader`</b> : webpack이 해석할 수 있는 것은 자바스크립트, JSON 파일이다. 하지만 프로젝트 내에서는 자바스크립트 코드 뿐만 아니라 이미지, 폰트, 스타일시트도 모두 모듈로 관리한다. 이때, 이러한 정적 파일들을 웹팩이 이해할 수 있게 변경해야 하는데 로더가 해당 역할을 수행한다. 로더는 <b>`test`</b>와 <b>`use`</b>로 구성된 객체로 설정할 수 있다.

<b>`test`</b> : 해석될 파일

<b>`use`</b> : 해석해주는 로더
 
그 예로 scss 파일을 css 파일로 변경하는 코드는 아래와 같다.

```javascript
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  }
}
```

참고로 위의 코드는 <b>`style-loader`</b>, <b>`style-loader`</b>, <b>`style-loader`</b> 패키지가 설치되어 있다는 것을 가정한다. use에 들어간 로더의 해석 순서는 다음과 같다.

```
sass-loader > css-loader > style-loader
```

* <b>`plugins`</b> : 플러그인을 사용하면 webpack을 좀 더 다채롭게 사용할 수 있으며 <b>생성자 함수 형태</b>로 사용한다.

```javascript
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  }
}
```

