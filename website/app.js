/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "b0c56f2b428cab6f84ae66bc1cd33d31";
const getweather = async (zip,URL,API_KEY) => {
    const res = await fetch(URL+"?zip="+zip+"&appid="+API_KEY);
    try{
        const data = await res.json();
        return data ;
    }    
    catch(error){
        console.log("error",error);
    }
}

const weatherData = async (temp,date,content) => {
                                await fetch("http://localhost:8000/api",{
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({temp,date,content}),
                                });
                                await updateUI();
                            }

const updateUI = async () => {
    const req = await fetch("http://localhost:8000/api");
    try {
        const allData = await req.json();
        const datetab = document.getElementById('date');
        const temptab = document.getElementById('temp');
        const contenttab = document.getElementById('content');
        
        datetab.innerHTML = new Date(allData.date);
        temptab.innerHTML = allData.temp+"℃";
        contenttab.innerHTML = allData.content;
    } catch (error) {
        console.log("error",error);
    }
}

let generateBtn = document.getElementById("generate");
let zipcode = document.getElementById("zip");
let feelingstab = document.getElementById("feelings");

const performAction = async () => {
    let data = await getweather(zipcode.value,URL,API_KEY);
    await weatherData(data.main.temp, d , feelingstab.value );
}

generateBtn.addEventListener('click', performAction);


