const submitbutton = document.getElementById('submitbutton')
const cityName=document.getElementById('cityName')
const city_name=document.getElementById('city_name')
const temp=document.getElementById('temp')
const temp_status=document.getElementById('temp_status')
const getinfo =async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;
    if(cityval==="")
    {
        city_name.innerText=`enter the value before search`
    }
  
    else
    {
        try{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&unit=metric&appid=e5260542094c0632cadda8aed696865c`
            console.log(url);
             const response = await fetch(url)
            const data=await response.json();
            const arrData=[data];
            city_name.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`
            temp.innerText=arrData[0].main.temp
            temp_status.innerText=arrData[0].weather[0].main
        }
        catch{
            city_name.innerText=`invalid`
        }
        
        
    }
}
submitbutton.addEventListener('click',getinfo)