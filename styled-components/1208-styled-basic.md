# ๐๐ป Styled-components ์ ๋ฆฌ

์๋ฐ์คํฌ๋ฆฝํธ ์์ CSS๋ฅผ ์์ฑํ๋ ๊ธฐ์ ์ธ <b>CSS in JS</b> ์ค์์ `styled-components`์ ๋ํด ์ ๋ฆฌํ  ๊ฒ์ด๋ค.
์๋ฐ์คํฌ๋ฆฝํธ ๋ฌธ๋ฒ์ผ๋ก ์ฝ๊ณ  ๋น ๋ฅด๊ฒ ์์์ ๋ํ ์คํ์ผ์ ์ง์ ํ  ์ ์๊ณ , ๋ ์ฌ์ฌ์ฉ์ฑ์ด ์์ฒญ ์ข์์ง๊ธฐ ๋๋ฌธ์ ์ตํ๋๋ฉด ์์ฃผ ์ข์
๊ธฐ์ ์ด๋ผ๊ณ  ์๊ฐํ๋ค.

> styled-components๋ `Tagged Template Literal`์ด๋ผ๋ ES6 ๋ฌธ๋ฒ์ ์ฌ์ฉํ๋ค.

<h3>๐ styled-components ์ค์นํ๊ธฐ</h3>

๋ฆฌ์กํธ ํ๊ฒฝ์์ ์ค์นํ๋ ๋ฐฉ๋ฒ์ ์๋์ ๊ฐ๋ค.

```cmd
$ npx create-react-app exercise-styled-components
$ cd exercise-styled-components
$ yarn add styled-components 
```

์ค์น ํ ๋ณธ๊ฒฉ์ ์ผ๋ก styled-components๋ฅผ ์ฌ์ฉํด๋ณด์!

<h3>๐ styled-components ๊ธฐ๋ณธ ๋ฌธ๋ฒ</h3>

์ค์น ํ jsx ํ์ผ์์ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ๊ฐ๋จํ๋ค.

```jsx
import React from 'react';
// import!
import styled from 'styled-components';

function App() {
  return <Circle />;
}

// styled.์์`์์์ ์ง์ ํ  ์คํ์ผ ์ ์ธ`
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

export default App;
```

๐ก ์ด๋, ์คํ์ผ ์ปดํฌ๋ํธ๋ ์๋์ ์ ์ด๋๋ ๊ฒ์ด ๊ฐ๋์ฑ์ ์ข๋ค.

<h3>๐ styled-components props</h3>

๋ถ๋ชจ๋ก๋ถํฐ ์ ๋ฌ๋ฐ์ ์คํ์ผ ์์ฑ์ props์ผ๋ก ๋ฐ์์ ์กฐ๊ฑด์ ๋ฐ๋ผ ์คํ์ผ์ ์ํ ์๋ ์๋ค. 

```jsx
import React from 'react';
import styled from 'styled-components';

function App() {
  return <Circle color="blue" />;
}

// App์์ ์ ๋ฌ๋ฐ์ color props๋ฅผ ์ฌ์ฉ
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
`;

export default App;
```
