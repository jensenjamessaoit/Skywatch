var userNum = document.querySelector('#user_num');
var submitNum = document.querySelector('#submit_num');
var flightStatus = document.querySelector('#flight_status');
const flightUrl = 'https://flight-info-api.p.rapidapi.com/status?version=v2&DepartureDateTime=2023-07-04&ArrivalDateTime=2023-07-04&DepartureAirport=SLC&ArrivalAirport=LAS&CodeType=IATA';
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

const weatherUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Paradise&days=3';
const weatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8dfe4389fmsh51b9d61de968458p15a458jsnb237461f7990',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


function getStatus(){  
    // var flightNum = 4988;

    fetch(flightUrl + "&FlightNumber = 4988", options)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            // console.log(flightNum);
            console.log(data);
            console.log(data.data[0].arrival.airport.icao);

            fetch("https://api.checkwx.com/station/KLAS?x-api-key=c998af3eced9495b848340c0b4")
                .then(function (response) {
                    return response.json();
                })
                .then(function(data){
                    console.log(data)
                    console.log(data.data[0].city);
                    console.log(data.data[0].latitude.decimal);
                    console.log(data.data[0].longitude.decimal);

                    // The code below brings up the weather forecast using our weather api

                    fetch(weatherUrl, weatherOptions)
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