const request  = require('request');

const yargs = require('yargs');

const yrg = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .argv;

var encodedAddress = encodeURIComponent(yrg.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCvZS9g-QDJZobVSQMJzDSk1V2CzMT6U4c`,
    json: true
},(error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2));
    // console.log(JSON.stringify(error, undefined, 2));
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
})