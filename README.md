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



hr('definitely not a horizontal rule');
// undefined
```

## License

[MIT](LICENSE)
