# quickmark-rule-hr

Horizontal rule matching rule for [quickmark](https://github.com/jameskmonger/quickmark).

## Usage

```javascript
const hr = require('quickmark-rule-hr');

hr('---');
// {
//     original: '---',
//     parsed: ''
// }



hr('------');
// {
//     original: '------_',
//     parsed: ''
// }
```

## License

[MIT](LICENSE)
