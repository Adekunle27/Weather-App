const request  = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyCvZS9g-QDJZobVSQMJzDSk1V2CzMT6U4c',
    json: true
},(error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2));
    // console.log(JSON.stringify(error, undefined, 2));
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
})