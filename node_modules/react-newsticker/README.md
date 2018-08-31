# React Newsticker
## Usage
Import it.

```javascript
import Newsticker from 'react-newsticker';
```

Pass an array in the props 'news' as data source.

```javascript
const news = [
  'Hello World!',
  'Nice to meet you.',
  'Happy hour :)'
];
```

```javascript
render() {
  return <Newsticker news={news} />
}
```