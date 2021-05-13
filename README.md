# Weather-App
Asynchronous Node.js Weather Application.

### Download node_modules i.e, dependencies
npm install

### Run any of the following commands from the terminal
`node app-promise.js -a 'your address'`

`node app.js -a 'your address'`

## Set UP

### Set your Google API key
 > https://developers.google.com/maps/documentation/javascript/get-api-key

### Take help from: 
 > https://developers.google.com/maps/documentation/geocoding/start

* So, when requesting from maps.googleapis.com the URL(in app.js / app-promise.js) will be (including the API key) :- 

* `url =>  https://maps.googleapis.com/maps/api/geocode/json?address=${your encoded address}&key=__Put your API Key here__`

### Creating the darksky.net dev account and get the weather API
 > https://darksky.net/dev

 * Register here, create account and get the API key.

 * `https://api.darksky.net/forecast/__Put your API Key here__/${lat},${lng}`

