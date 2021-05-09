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
    if(error){
        console.log('Unable to connect to google server.');
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('Unable to find the address.');
    }else if(body.status === 'OK'){
        console.log(`Address : ${body.results[0].formatted_address}`);
        console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
    }
})