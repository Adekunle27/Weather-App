const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const weather = require('./weather/weather');

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

geocode.geocodeAddress(yrg.a, (errorMessage, results)=> {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude,(errorMessage, weatherResults)=> {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});
