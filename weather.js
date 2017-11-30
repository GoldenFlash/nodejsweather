#!/usr/bin/env node
var axios = require('axios');
var data={
		params:{
			city:process.argv[2]
		}
	}
axios.get('http://api.jirengu.com/weather.php',data).then((res)=>{
	if(res.data.status==0){
		console.log(res.data.date)
		console.log(res.data.results[0].currentCity)
		console.log(res.data.results[0].weather_data[0].date)
		console.log(res.data.results[0].weather_data[0].weather)
		console.log(res.data.results[0].weather_data[0].wind)
		console.log(res.data.results[0].weather_data[0].temperature)
	}else{
		console.log('城市名有误')
	}
})