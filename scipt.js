var userNum = document.querySelector('#user_num');
var submitNum = document.querySelector('#submit_num');
var flightStatus = document.querySelector('#flight_status');
const url = 'https://flight-info-api.p.rapidapi.com/status?version=v2&DepartureDateTime=2023-07-04&ArrivalDateTime=2023-07-04&DepartureAirport=SLC&ArrivalAirport=LAS&CodeType=IATA';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4234982dfmsh11ff69add0c142cp1338dbjsnea33a2a2cc14',
		'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
	}
};

function getStatus(){  
    var flightNum = 4988;

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            console.log(flightNum);
            console.log(data);
            console.log(data.data.length);
            console.log(data.data[0].flightNumber);
        })
}

submitNum.addEventListener('click', getStatus);