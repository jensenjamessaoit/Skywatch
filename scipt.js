var userNum = document.querySelector('#user_num');
var submitNum = document.querySelector('#submit_num');
var flightStatus = document.querySelector('#flight_status');
const url = 'https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20230802/?Max_Results=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4234982dfmsh11ff69add0c142cp1338dbjsnea33a2a2cc14',
		'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
	}
};

function getStatus(){
    fetch(url, options)
        .then(function (response) {
            return response.text();
        })
        .then(function(data){
            console.log(data);
        })
}

submitNum.addEventListener('click', getStatus);