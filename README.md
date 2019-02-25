# Weather-App
Asynchronous Node.js Weather Application

### Set your Google API key
`https://developers.google.com/maps/documentation/javascript/get-api-key`

### Take help from: 
 > https://developers.google.com/maps/documentation/geocoding/start

* So, when requesting from maps.googleapis.com the URL(in app.js) will be (including the API key) :- 

 `request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${your encoded address}&key=Put your API Key here`,
    .......
    },(error, response, body) => {
    .......
    })
 `

### Run following command from the terminal
`node app.js -a 'your address'`
