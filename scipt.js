var userFlightNum = document.querySelector("#userFlightNum");
var access_key = "2b641121c1c61422dffedb197e964e76";

function getFlightStatus() {
    var apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${access_key}`;
    var flightsStatus = "";
    
}

userFlightNum.addEventListener('submit', getFlightStatus);