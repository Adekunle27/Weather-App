const yargs = require('yargs');

const axios = require('axios');

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

    var encodedAddress = encodeURIComponent(yrg.address);
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCvZS9g-QDJZobVSQMJzDSk1V2CzMT6U4c`

    axios.get(geocodeUrl).then((response) => {
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find the address.');
        }

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/b2c2d0af86917b00bedb3fc0951bf40c/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);

    }).then((response) => {

        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        // if(response.statusCode === 400){
        //     throw new Error('Unable to fetch the address.');
        // }
        console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
    }).catch((e) => {
        if(e.code === 'ENOTFOUND' || e.code === 200){
            console.log('Unable to connect to API servers');
        }else
            console.log(e.message);
    });
