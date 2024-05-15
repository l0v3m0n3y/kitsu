# kitsu
JavaScript library for kitsu.io
# main
```js
const {kitsu} = require('./kitsu');

const kitsu_io = new kitsu();
kitsu_io.search_anime("tokyo").then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});

```
