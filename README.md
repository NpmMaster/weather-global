# weather-api
**Install**
`npm i weather-api`

**To start using the package use the example below**



```js
// Real time on (Json Is converted to string)
const { Weather } = require('weather-api')
const app = new Weather('toronto', realtime='yes', json=null)

// Real time off (Json is default)
const { Weather } = require('weather-api')
const app = new Weather('toronto', realtime=null, json=true)
```

