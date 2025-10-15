/*--------ekhane radid api extention install kore browser er rapidapi er web site theke free jeta seta choice kore make kora*/
const url = 'https://api.openweathermap.org/data/2.5/weather?q={dhaka}&appid={json&u=f}';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eef287724fmsh57883c813a97fdcp17ee1bjsna98ecdb93655',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};
async function checkWeather(){
        const response = await fetch(url+ '&appid=${options}');
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.name;
    }
    
    checkWeather();
/*
	
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eef287724fmsh57883c813a97fdcp17ee1bjsna98ecdb93655',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    async function checkWeather(){
        const response = await fetch(url+ '&appid=${options}');
        var data = await response.json();
        console.log(data);
    }
    
    checkWeather();*/