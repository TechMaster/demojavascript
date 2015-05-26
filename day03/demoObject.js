/**
 * Created by techmaster on 5/26/15.
 */
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2014-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2014-09-23 10:55",
        city: "Los Angeles"
    }
};

console.log(flight.arrival.city);

console.log(flight.status);

var status = flight.status || "unknown";
console.log(status);
flight.status = "flying";

//Object is passed by reference by default
var byRefFlight = flight;

//This code really copies object to other instance
var byCopyFlight = Object.create(flight);

byRefFlight.status = "Landing";
console.log(flight.status);

byCopyFlight.status = "Crash!";
console.log('flight.status = ' + flight.status + ". byCopyFlight.status = " + byCopyFlight.status);
