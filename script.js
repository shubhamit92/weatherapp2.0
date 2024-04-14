
const apikey="1e682e6369bf951ec36793ced3256631";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searcbox=document.querySelector('.input')
const serchBtn=document.querySelector('.serch-btn');
const weathericons=document.querySelector(".weather img")
const maindiv=document.getElementById('main');
async function weatherapp(city){
    const response=await fetch(apiurl+city +`&appid=${apikey}`);
    if(response.status==404){
        document.querySelector('.error').style.display="block"
    }else{
        document.querySelector('.error').style.display="none"
        let data=await response.json();
        console.log(data);
   
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML= data.main.temp;
    document.querySelector('.Humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.Wind').innerHTML=data.wind.speed+"km/h";
    document.querySelector('.Max-temp').innerHTML=data.main.temp_max
    if (data.weather[0].main=="Clouds"){
        weathericons.src="images/cloudy.png";
    }
    else if(data.weather[0].main=="Smoks"){
        weathericons.src="images/sun.png";
    }

    // document.querySelector('.main').style.display="block";
    maindiv.classList.remove('d-none');
    maindiv.classList.add('main');
   

}

    }
    
serchBtn.addEventListener('click',()=>{
     return weatherapp(searcbox.value)
})





