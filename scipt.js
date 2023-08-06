var userNum = document.querySelector('#user_num');
var submitNum = document.querySelector('#submit_num');
var flightStatus = document.querySelector('#flight_status');
const flightUrl = 'https://flight-info-api.p.rapidapi.com/status?version=v2&DepartureDateTime=2023-07-04&ArrivalDateTime=2023-07-04&DepartureAirport=SLC&ArrivalAirport=LAS&CodeType=IATA';
const flightOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f13588d1e0msha430b5716237029p1cb182jsnf72e3eb54fb0',
		'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
	}
};
var locationUrl = "https://api.checkwx.com/station/KLAS?x-api-key=bdb78c71a3de4e66b3667c8198";
const weatherUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Paradise&days=3';
const weatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f13588d1e0msha430b5716237029p1cb182jsnf72e3eb54fb0',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


function getStatus(){  
    var flightNum = 4988;

    fetch(flightUrl, flightOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            console.log(data.data[0].flightNumber);
            
            fetch(locationUrl)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);

                    fetch(weatherUrl, )
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(data){
                        console.log(data);
                    })
                })
        })
}

submitNum.addEventListener('click', getStatus);