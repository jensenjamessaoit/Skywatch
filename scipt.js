var flightNum = document.querySelector('#user_num');
var submitNum = document.querySelector('#submit_num');
var flightStatus = document.querySelector('#flight_status');
var arrivalTime = document.querySelector('#arrival_time');
var departureTime = document.querySelector('#departure_time');
const flightUrl = "https:flight-info-api.p.rapidapi.com/status?version=v2";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f13588d1e0msha430b5716237029p1cb182jsnf72e3eb54fb0',
		'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
	}
};

var myHeaders = new Headers();
myHeaders.append("X-API-Key", "c998af3eced9495b848340c0b4");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const weatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8dfe4389fmsh51b9d61de968458p15a458jsnb237461f7990',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


function getStatus(){  

    var userArr = arrivalTime.value;
    var userDep = departureTime.value;
    var userNum = flightNum.value;
console.log(flightUrl + "&DepartureDateTime=" + userDep + "&ArrivalDateTime=" + userArr + "&FlightNumber=" + userNum);
//  This api gets the necessary flight information that we need.

    fetch(flightUrl + "&DepartureDateTime=" + userDep + "&ArrivalDateTime=" + userArr + "&FlightNumber=" + userNum, options)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){

            console.log(data);
            console.log(data.data[0].arrival.airport.icao);

            // This api gets us the city, latitude, and longitude for the arrival airport

            var flightIcao = data.data[0].arrival.airport.icao;

            fetch("https://api.checkwx.com/station/" + flightIcao + "?x-api-key=c998af3eced9495b848340c0b4")
                .then(function (response) {
                    return response.json();
                })
                .then(function(data){
                    console.log(data)
                    console.log(data.data[0].city);

// The code below brings up the weather forecast using our weather api

                    var arrivalCity = data.data[0].city;

                    fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + arrivalCity + "&days=1" + "&dt=" + userArr, weatherOptions)
                        .then(function (response) {
                             return response.json();
                         })
                         .then(function(data){
                            console.log(data);
                            console.log(data.forecast.forecastday);
                            console.log(data.forecast.forecastday[0].day.condition);
                            console.log(data.forecast.forecastday[0].day.avgtemp_f);
                        })
                })
        })
}

submitNum.addEventListener('click', getStatus);