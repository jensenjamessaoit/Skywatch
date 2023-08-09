var flightNum = document.querySelector('#user_num');
var arrPort = document.querySelector('#arr_port');
var submitNum = document.querySelector('#submit_num');
var flightStatus = document.querySelector('#flight_status');
var arrivalTime = document.querySelector('#arrival_time');
var departureTime = document.querySelector('#departure_time');
var statusInfo = document.querySelector('#status_info');
var weatherInfo = document.querySelector('#weather_info');
const flightUrl = "https:flight-info-api.p.rapidapi.com/status?version=v2&CodeType=IATA";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05daa540ebmsh51caa232fe6a581p143266jsn15b3281524da',
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

const CurWeatherUrl = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles';
const CurWeatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4234982dfmsh11ff69add0c142cp1338dbjsnea33a2a2cc14',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

function getStatus(){ 
    var currentDay = false;
    weatherInfo.innerHTML = "";
    statusInfo.innerHTML = "";
    var userNum = flightNum.value;
    var userPort = arrPort.value;
    var userArr = arrivalTime.value;
    var userDep = departureTime.value;
    

    console.log(flightUrl + "&DepartureDateTime=" + userDep + "&ArrivalDateTime=" + userArr + "&FlightNumber=" + userNum);
    //  This api gets the necessary flight information that we need.

    
    fetch(flightUrl + "&ArrivalAirport=" + userPort + "&DepartureDateTime=" + userDep + "&ArrivalDateTime=" + userArr + "&FlightNumber=" + userNum, options)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            console.log(data.data[0].arrival.airport.icao);

            if(data.data[0].statusDetails.length === 0){
                currentDay = false;
                statusInfo.append('status currently not available');
            }
            else{
                statusInfo.append(data.data[0].statusDetails[0].state);
                currentDay = true;
            }

            // This api gets us the city, latitude, and longitude for the arrival airport
            var flightIcao = data.data[0].arrival.airport.icao;
            
            fetch("https://api.checkwx.com/station/" + flightIcao + "?x-api-key=c998af3eced9495b848340c0b4")
                .then(function (response) {
                    return response.json();
                })
                .then(function(data) {
                    console.log(data)
                    console.log(data.data[0].city);

                    // The code below brings up the weather forecast using our weather api
                    var arrivalCity = data.data[0].city;
                    if(currentDay = false){
                        fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + arrivalCity + "&days=1" + "&dt=" + userArr, weatherOptions)
                            .then(function (response) {
                                return response.json();
                                })
                                .then(function(data){
                                console.log(data);
                                weatherInfo.append(data.forecast.forecastday[0].day.condition.text);
                            })
                    }
                    else {
                        fetch(CurWeatherUrl,CurWeatherOptions)
                            .then(function(response){
                                return response.json();
                            })
                            .then(function(data){
                                console.log(data);
                                weatherInfo.append(data.current.condition.text);
                            })
                    }
                })
        })
    flightNum.value = "";
    arrPort.value = "";
    arrivalTime.value = "";
    departureTime.value = "";
}

submitNum.addEventListener('click', getStatus);