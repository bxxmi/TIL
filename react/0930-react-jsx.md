# JSX ์ ๋ฆฌ

<h3>๐ JSX๋ ๋ฌด์์ธ๊ฐ</h3>

<b>`JSX`</b>๋ ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ํ์ฅํ ๋ฌธ๋ฒ์ด๋ค. ๋ณดํต React์์ ์ฌ์ฉํ๋ ๋ฌธ๋ฒ์ด๋ฉฐ HTML ์ฝ๋์๋ ์ ์ฌํ์ง๋ง 
์๋ฐ์คํฌ๋ฆฝํธ์ ๋ชจ๋  ๊ธฐ๋ฅ์ด ํฌํจ๋์ด์ ธ ์๋ค.

<h3>๐ JSX ๊ธฐ๋ณธ ์ฌ์ฉ ์์</h3>

```jsx
import React, { Component } from 'react';

class habits extends Component {
  render() {
    return (
      <div>Hello :)</div>
    );
  }
}

export default habits;
```

<h3>๐ JSX ํํ์ ํฌํจํ๊ธฐ</h3>

JSX์ ์ค๊ดํธ ์์๋ ์ ํจํ ๋ชจ๋  ์๋ฐ์คํฌ๋ฆฝํธ์ ํํ์์ ๋ฃ์ ์ ์๋ค. 

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

๋ํ, ์ค๊ดํธ๋ฅผ ์ฌ์ฉํด์ ์ดํธ๋ฆฌ๋ทฐํธ์ ์๋ฐ์คํฌ๋ฆฝํธ ํํ์์ ์ฝ์ํ  ์๋ ์๋ค.

```jsx
const element = <img src={user.avatarUrl}></img>;
```

<h3>๐ JSX ํ์  ์์ ์ ์</h3>

JSX๋ ์๋ ํ์  ์์๋ฅผ ์ ์ํ  ์ ์๋ค. ๋ค์์ ํ๊ทธ๋ค์ ๋ฆฌํดํ  ์ ์๋ค๋ ๋ป์ด๋ค. ๋ค๋ง, ์ ์ํ๊ณ  ์ถ์ ๊ฒฝ์ฐ ์์์ ๋ชํํ ์๋ฏธ๋ฅผ ๊ฐ์ง ํ๊ทธ๋  
<b>`<></>`</b> ๋๋ <b>`React.Fragment`</b> ํ๊ทธ๋ฅผ ์ฌ์ฉํด์ ๋ฌถ์ด์ค์ผํ๋ค.
  
```jsx
const element = (
  <ul>
    <li>Hello!</li>
    <li>Good to see you here.</li>
  </ul>
);
  
const element = (
  <>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </>
);
  
const element = (
  <React.Fragment>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </React.Fragment>
);
```

<h3>โ ๏ธ ์ฃผ์ํ  ์ </h3> 

> JSX๋ HTML๋ณด๋ค JavaScript์ ๊ฐ๊น๊ธฐ ๋๋ฌธ์ ReactDom์ HTML ์ดํธ๋ฆฌ๋ทฐํฐ ์ด๋ฆ ๋์  <b>`camelCase`</b> ๋ช๋ช ๊ท์น์ ์ฌ์ฉํ๋ค.
>
> ์๋ฅผ ๋ค์ด, class ํ๋กํผํฐ๋ JSX์์ <b>`className`</b>์ด ๋๊ณ , tabindex๋ <b>`tabIndex`</b>๊ฐ ๋๋ค.
