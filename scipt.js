var accessKey = '624f684da3c94f04d45b71801a0fb7eb';
var userNum = document.querySelector('#user_num');
var submitNum = document.querySelector('#submit_num');
var flightStatus = document.querySelector('#flight_status');


function getStatus(){
    var flightNum = userNum.value;
    
    fetch(`http://api.aviationstack.com/v1/flights?access_key=${accessKey}&flight_number=${flightNum}&limit=1`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.data[0].flight_status);
            flightStatus.textContent = data.data[0].flight_status;
        });

    userNum.value = '';
}

submitNum.addEventListener('click', getStatus);