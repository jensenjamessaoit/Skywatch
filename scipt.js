var userNum = document.querySelector('#user_num');
var submitNum = document.querySelector('#submit_num');
var flightStatus = document.querySelector('#flight_status');
const flightUrl = 'https://flight-info-api.p.rapidapi.com/status?version=v2&DepartureDateTime=2023-07-04&ArrivalDateTime=2023-07-04&DepartureAirport=SLC&ArrivalAirport=LAS&CodeType=IATA';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1bbfe2051emshd3a7305c98e25bcp10043cjsnb62d0e09b2cb',
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

                    fetch("")
                })
        })
}

submitNum.addEventListener('click', getStatus);


fetch("https://api.checkwx.com/station/KJFK,KLAX,KMIA", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));