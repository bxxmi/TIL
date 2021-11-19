# PropTypes

PropTypes는 부모로부터 전달받은 `prop`의 <b>데이터 타입</b>을 검사한다. 자식 컴포넌트에서 명시해 놓은 
데이터 타입과 부모로부터 넘겨받은 데이터 타입이 일치하지 않으면 콘솔에 경고문을 띄운다.

PropTypes를 사용함으로써 생기는 장점은 데이터의 타입 정의만으로도 좋은 문서가 된다는 점이다.
어떤 코드는 컴포넌트를 사용하는 사람이 자세히 보지 않으면 데이터의 타입을 알기 어렵다. 하지만, 
PropTypes를 사용해서 속성 값의 타입 정보를 정의해주면 컴포넌트의 로직을 이해하지 않고도 
타입 정보를 한 눈에 파악할 수 있다.

```jsx
class PropTypeComponent2 extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;
    return (
      <div>
        <span>Boolean : {boolValue.toString()}</span>
        <br />
        <span>Number : {numValue}</span>
        <br />
        <span>Array : {arrayValue}</span>
        <br />
        <span>
          Object : {objValue.name} / {objValue.age}
        </span>
        <br />
        <span>Node : {nodeValue}</span>
        <br />
        <span>Function : {funcValue}</span>
      </div>
    );
  }
}

PropTypeComponent2.propTypes = {
  boolValue: PropTypes.bool,
  // .isRequired: 필수 파라미터를 지정한다.
  numValue: PropTypes.number.isRequired,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  // .shape: 받아올 객체 데이터의 속성들에 대한 데이터를 지정할 수 있다.
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }),
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func
};
```
