# How to create mapState

* import 없이 mapState 만들기

```javascript
function mapState(moduleName, stateNames) {
  const res = {}
  stateNames.forEach(name => {
    res[name] = function() {
      return this.$store.state[moduleName][name]
    }
  });
  return res;
}
```
