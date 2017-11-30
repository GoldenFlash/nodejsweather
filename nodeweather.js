#!/usr/bin/env node
var axios = require('axios');
var data={
		params:{
			cityname:process.argv[2]
		}
	}

axios.get('http://v.juhe.cn/weather/index?format=2&key=559cd04c55bb224e129bb05ffec76ac4',data).then((res)=>{
	if(res.data.resultcode ==200){
		console.log(res.data.result.today.city)
		console.log(res.data.result.today.date_y+res.data.result.today.week)
		console.log(res.data.result.today.temperature)
		console.log(res.data.result.today.weather)
		console.log(res.data.result.today.wind)
	}
		
})