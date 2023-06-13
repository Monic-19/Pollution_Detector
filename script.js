//Getting details

let cityName = document.getElementById('cityname');
let state = document.getElementById('state');


let p1 = document.getElementById('p1'); 
let l1 = document.getElementById('l1');
let d1 = document.getElementById('d1');

let p2 = document.getElementById('p2'); 
let l2 = document.getElementById('l2');
let d2 = document.getElementById('d2');

let p3 = document.getElementById('p3'); 
let l3 = document.getElementById('l3');
let d3 = document.getElementById('d3');

let p4 = document.getElementById('p4'); 
let l4 = document.getElementById('l4');
let d4 = document.getElementById('d4');




//Get Location
let apiKey = "e072993a2468923ec6b95c350ded12d8"; 
let LocationUrl =  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

function init(){
    let city2 = document.getElementById('city');
    let city=city2.value;

    if(city !==""){
        getLocation(city);
       
    }
    else{
        alert("Enter a valid city");
    }
}

async function getLocation(city){
    let LocationUrl =  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    
    
    let response = await fetch(LocationUrl);
    let data = await response.json();
    // console.log(response);
    // console.log(data);
    console.log(data[0].lat);
    console.log(data[0].lon);
    console.log(data[0].state);
     lat = data[0].lat;
     lon = data[0].lon;
     let s = data[0].state;
     //console.log(lat + ", " + lon);
     getPollution(city,s,lat,lon);
     console.log("get pollution called");
}


//Get Pollution


async function getPollution(city,s,lat,lon){
     let PollutionUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
     let presponse = await fetch(PollutionUrl);
     let pdata = await presponse.json();
     console.log(pdata);
     console.log("CO : "+pdata.list[0].components.co);
     console.log("O3 : "+pdata.list[0].components.o3);
     console.log("PM10 : "+pdata.list[0].components.pm10);
     console.log("PM2.5 : "+pdata.list[0].components.pm2_5);

     document.querySelector(".hero").style.height="50%";
     cityName.innerText ="City - "+ city;
     state.innerText ="State - "+ s.toLowerCase();
     let status = document.getElementById('status');
     status.innerText = "Ruk jao ek bari"; 
     

     p1.innerText = "Carbon Monoxide : "+pdata.list[0].components.co;
     d1.innerText = "μg/m3";

     p2.innerText = "Ozone : "+pdata.list[0].components.o3;
     d2.innerText = "μg/m3";

     p3.innerText = "Particulate Matter 10 : "+pdata.list[0].components.pm10;
     d3.innerText = "μg/m3"; 

     p4.innerText = "Particulate Matter : "+pdata.list[0].components.pm2_5;
     d4.innerText = "μg/m3";


     //setting levels

     let v1,v2,v3,v4;
     v1 = pdata.list[0].components.co;
     console.log(v1);
     v2 = pdata.list[0].components.o3;
     v3 = pdata.list[0].components.pm10;
     v4 = pdata.list[0].components.pm2_5;

     if(0<v1<44){l1.innerText = "Good";l1.style.color = "#59CE8F";console.log("i am out1")}
     else if(44<v1<94){l1.innerText = "F";l1.style.color = "#59CE8F";console.log("i am out2")}
     else if(94<v1<124){l1.innerText = "M";l1.style.color = "#E8F9FD";console.log("i am out3")}
     else {l1.innerText = "P";l1.style.color = "#990000";}

     if(0<v2<60){l2.innerText = "Good";l2.style.color = "#59CE8F";console.log("i am out1")}
     else if(60<v2<100){l2.innerText = "F";l2.style.color = "#59CE8F";console.log("i am out2")}
     else if(100<v2<140){l2.innerText = "M";l2.style.color = "#E8F9FD";console.log("i am out3")}
     else {l2.innerText = "P";l2.style.color = "#990000";}

     if(-1<v3<.2){l3.innerText = "G";l3.style.color = "#59CE8F";console.log("i am out1")}
     else if(.2<v3<.5){l3.innerText = "F";l3.style.color = "#59CE8F";console.log("i am out2")}
     else if(.5<v3<.7){l3.innerText = "M";l3.style.color = "#E8F9FD";console.log("i am out3")}
     else {l3.innerText = "Poor";l3.style.color = "#990000";}

     if(-1<v4<.1){l4.innerText = "G";l4.style.color = "#59CE8F";console.log("i am out1")}
     else if(.1<v4<.25){l4.innerText = "F";l4.style.color = "#59CE8F";console.log("i am out2")}
     else if(.24<v4<.5){l4.innerText = "M";l4.style.color = "#E8F9FD";console.log("i am out3")}
     else {l4.innerText = "Poor";l4.style.color = "#990000";}
    
 }



