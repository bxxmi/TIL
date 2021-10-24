# async와 await

<b>`async`</b>와 <b>`await`</b>라는 문법을 사용하면 Promise를 좀 더 편하게 사용할 수 있다.

# async

function 앞에 async 키워드를 붙이면 해당 함수는 반드시 프로미스를 반환하게 된다. 만약, 프로미스가 아닌 값을 반환하더라도
resolve 상태의 프로미스로 값을 감싸 <b>resolve</b>가 반환되도록 한다.

```javascript
async function f() {
  return 1;
}

f().then(alert); // 1
```

명시적으로 프로미스를 반환할 수 있다.

```javascript
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

# await

await 키워드는 async 함수 안에서만 동작한다. 자바스크립트는 await 키워드를 만나면 프로미스가 처리될 때까지 기다린 후 
결과를 반환한다.

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('완료'), 1000)
  });
  
  // 프로미스가 처리될 때까지 기다림
  let result = await promise;
  
  alert(result); // 완료
}

f();
```

함수를 호출하고 실행되는 도중에 await 키워드가 작성된 줄에서 실행이 <b>잠시 중단</b>되었다가 프로미스가 처리되면 실행이 재개된다.
이때, 프로미스 객체의 반환값 result가 변수 result에 할당된다. await 키워드를 사용하게 되면 프라미스가 처리되는 동안 기다리기 때문에 그 시간동안 다른 이벤트를 할 수 있어서 CPU 리소스가 
낭비되지 않는다.

await는 promise.then 보다 더 편하게 프로미스의 result 값을 얻을 수 있게 해주는 문법이므로 async/await을 사용하는 것이
더 가독성이 좋고 쓰기도 쉽다.

# async/await 사용 예시

* 데이터 가져오기(fetch 사용)

```javascript
const url = '주소';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  
  console.log(data);
}

getData();
```

* 이미지 로드하기

<b>`index.html`</b>

```html
<div class="loading">Loading</div>
<img src="" alt="" class="image" />
```

<b>`./utils/loadImage.js`</b>

```javascript
export default function (url) {
  return new Promise((resolve) => {
    const img = document.createElement('img');
    img.src = url;
    
    img.addEventListener('load', () => {
      resolve();
    });
  });
}
```

<b>`async/await.js`</b>

```javascript
import { loadImage } from "./utils/loadImage.js";

const url = '이미지 주소';
const imgEl = document.querySelector('.image');
const loadingEl = document.querySelector('.loading');

async function getImage() {
  await loadImage(url);
  imgEl.src = url;
  loadingEl.remove();
}
```

* 영화 정보 불러오기 (try...catch)

<b>`index.html`</b>

```html
<div class="movie">
  <div class="movie-loading"></div>
  <div class="movie__title"></div>
  <div class="movie__poster">
    <div class="poster-loading"></div>
    <img src="" alt="" />
  </div>
</div>
```

<b>`loadMovieInfo.js`</b>

```javascript
import { Loader, loadImage } from "./utils/index.js";

const url = '영화 정보가 담긴 주소';

function fetchMovieInfo() {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    const data = await res.json()

    // 에러가 발생했다면
    if (data.Error) {
      reject(data.Error);
    }
    resolve(data);
  });
}

// movie info loading wheel
const movieLoader = new Loader({
  el: '.movie-loading',
  color: 'red'
});
movieLoader.start();

// movie poster loading wheel
const posterLoader = new Loader({
  el: '.poster-loading',
  color: 'green'
});
posterLoader.start();

// IIFE
;(async function() {
  try {
    const movie = await fetchMovieInfo();
    const movieEl = document.querySelector('.movie');
    const titleEl = movieEl.querySelector('.movie__title');
    const posterEl = movieEl.querySelector('.movie__poster');
    const posterImgEl = posterEl.querySelector('img');
  
    titleEl.textContent = movie.Title;
    posterImgEl.src = movie.Poster;
  
    await loadImage(movie.Poster)
    posterLoader.stop();
  } catch (errorMsg) {
    const errorEl = document.createElement('div');
    errorEl.textContent = errorMsg;
    document.body.append(errorMsg);
  } finally {
    movieLoader.stop();
    posterLoader.stop();
    console.log('Done!'); 
  }
})()
```

<b>`loader.js`</b>

```javascript
import generateId from "./generateId.js";

export default class {
  constructor(options) {
    const { 
      el = null,
      size = 30,
      width = 10, 
      color = 'skyblue' 
    } = options;
    
    const _id = generateId();
    this.el = document.querySelector(el);
    this.el.classList.add('my-loader', `id-${_id}`);

    const styleEl = document.createElement('style');
    styleEl.innerHTML = 
    `.my-loader.id-${_id} {
        display: none;
        width: ${size}px;
        height: ${size}px;
        border-width: ${width}px;
        border-style: solid;
        border-color: ${color};
        border-radius: 50%;
        border-top-color: transparent;
        animation: loading-spin .8s linear infinite;
    }
    
    .my-loader.start {
      display: block;
    }

    @keyframes loading-spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }`
    document.head.append(styleEl);
  }

  // 프로토타입 메소드
  start() {
    this.el.classList.add('start');
  }

  // 프로토타입 메소드
  stop() {
    this.el.classList.remove('start');
  }
}
```

<b>`generateId.js`</b>

```javascript
export default function () {
  return `${new Date().getTime()}${Math.floor(Math.random() * 10000)}`; 
}
```
