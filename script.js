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
    console.log(data.length==0);
    
    if(data.length == 0){
        alert("enter a valid city");
    }

    else{
        console.log(response);
        console.log(data);
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
     state.innerText ="State - "+ s;
     let status = document.getElementById('status');
     
     

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



     if(0<v1 && v1<440){l1.innerText = "Good";l1.style.color = "#59CE8F";console.log("i am out1"); v1=1}
     else if(440<v1 && v1<940){l1.innerText = "Fine";l1.style.color = "#fffb05";console.log("i am out2"); v1=2}
     else if(940<v1 && v1<1240){l1.innerText = "Mild";l1.style.color = "#ffa505";console.log("i am out3"); v1=3}
     else {l1.innerText = "Poor";l1.style.color = "#990000";v1=4}

     if(0<v2 && v2<60){l2.innerText = "Good";l2.style.color = "#59CE8F";console.log("i am out1");v2=1}
     else if(60<v2 && v2<100){l2.innerText = "Fine";l2.style.color = "#fffb05";console.log("i am out2");v2=2}
     else if(100<v2 && v2<140){l2.innerText = "Mild";l2.style.color = "#ffa505";console.log("i am out3");v2=3}
     else {l2.innerText = "Poor";l2.style.color = "#990000";v2=4}

     if(0<v3 && v3<20){l3.innerText = "Good";l3.style.color = "#59CE8F";console.log("i am out1");v3=1 }
     else if(20<v3 && v3<50){l3.innerText = "Fine";l3.style.color = "#fffb05";console.log("i am out2");v3=2 }
     else if(50<v3 && v3<70){l3.innerText = "Mild";l3.style.color = "#ffa505";console.log("i am out3");v3=3 }
     else {l3.innerText = "Poor";l3.style.color = "#990000";v3=4} 

     if(0<v4 && v4<10){l4.innerText = "Good";l4.style.color = "#59CE8F";console.log("i am out1") ;v4=1}
     else if(10<v4 && v4<25){l4.innerText = "Fine";l4.style.color = "#fffb05";console.log("i am out2") ;v4=2}
     else if(24<v4 && v4<50){l4.innerText = "Mild";l4.style.color = "#ffa505";console.log("i am out3") ;v4=3}
     else {l4.innerText = "Poor";l4.style.color = "#990000"; v4=4}

     let V =(v1+v2+v3+v4);
     console.log(V);
     if(V>0 &&V<5){status.innerText = "Status : Good "; status.style.color = "#59CE8F"}
     else if(V>5 &&V<10){status.innerText = "Status : Fine"; status.style.color = "#fffb05"}
     else if(V>10 &&V<15){status.innerText = "Status : Mild "; status.style.color = "#ffa505"}
     else {status.innerText = "Status : Poor "; status.style.color = "#990000"}
    
 }



