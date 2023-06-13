//Getting details
let city = document.getElementById('city');
let cityName = document.getElementById('cityname');
let state = document.getElementById('state');
let status = document.getElementById('status');

let p1 = "Carbon Monoxide"; 
let l1 = document.getElementById('l1');
let d1 = document.getElementById('d1');

let p2 = "Ozone"; 
let l2 = document.getElementById('l2');
let d2 = document.getElementById('d2');

let p3 = "Particulate Matter"; 
let l3 = document.getElementById('l3');
let d3 = document.getElementById('d3');

let p4 = "Particulate Matter"; 
let l4 = document.getElementById('l4');
let d4 = document.getElementById('d4');




//Get Location
let apiKey = "e072993a2468923ec6b95c350ded12d8"; 
let LocationUrl =  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
let lat = 0;
let lon = 0;



async function getLocation(){
    let response = await fetch(LocationUrl);
    let data = await response.json();
    // console.log(response);
    // console.log(data);
    console.log(data[0].lat);
    console.log(data[0].lon);
    console.log(data[0].state);
     lat = data[0].lat;
     lon = data[0].lon;
     //console.log(lat + ", " + lon);
     getPollution();
}


//Get Pollution

 let PollutionUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

 async function getPollution(){
     let presponse = await fetch(PollutionUrl);
     let pdata = await presponse.json();
     console.log(pdata);
     console.log("CO : "+pdata.list[0].components.co);
     console.log("O3 : "+pdata.list[0].components.o3);
     console.log("PM10 : "+pdata.list[0].components.pm10);
     console.log("PM2.5 : "+pdata.list[0].components.pm2_5);
 }



