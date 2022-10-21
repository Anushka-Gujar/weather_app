const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide= document.querySelector('.middle_layer');

const getInfo= async(event)=>{
    event.preventDefault();
    let cityval =cityName.value;
    
    if(cityval=== ""){
        city_name.innerText =`Plz wite the name before search`
        datahide.classList.add("data_hide");
    }else{
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=f87a2cd301b9b844948828a8d1004379&units=metric`
            const response= await fetch(url);
            const data = await response.json();
            const arrData =[data];

            city_name.innerText= `${arrData[0].name},${arrData[0].sys.country}`
            temp_real_val.innerText=arrData[0].main.temp;
            const tempStatus=arrData[0].weather[0].main;

         
            // condition to check sunny or cloudy
            if(tempStatus=="Sunny"){
                temp_status.innerHTML= "<i class='fas fa-sun' style='color:#ff8c00;'></i>";
            } else  if(tempStatus=="Clouds"){
                temp_status.innerHTML= "<i class='fas fa-cloud' style='color:#dfe4ea;'></i>";
            
            } else  if(tempStatus=="Rainy"){
                temp_status.innerHTML= "<i class='fas fa-sun' style='color:#6495ED;'></i>";
            
           
            } else  if(tempStatus=="Clear"){
                temp_status.innerHTML= "<i class='fas fa-sun' style='color:#ff8c00;'></i>";
            
            } else  {
                temp_status.innerHTML= "<i class='fas fa-sun' style='color:#ff8c00;'></i>";
            }
            datahide.classList.remove("data_hide");
    

            
        } catch (error) {
            city_name.innerText =`Plz enter the city name properly`
            datahide.classList.add("data_hide");
        }
       
    }
}
submitBtn.addEventListener("click",getInfo);

// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f87a2cd301b9b844948828a8d1004379&units=metric