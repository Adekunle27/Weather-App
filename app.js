const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});