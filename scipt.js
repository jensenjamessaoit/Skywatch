var accessKey = '624f684da3c94f04d45b71801a0fb7eb';
var userNum = document.querySelector('#user_num');
var submitNum = document.querySelector('#submit_num');

function getStatus(){
    var flightNum = userNum.value;
    
    fetch(`http://api.aviationstack.com/v1/flights?access_key=${accessKey}&limit=1flight_number=${flightNum}`)
        .then(function (response) {
            return response.json(); 
        })
        .then(function (data) {
            console.log(data);
        });
}

submitNum.addEventListener('click', getStatus);