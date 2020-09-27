const axios = require('axios');

const getClima = async(lat,lng) =>{
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=881e5d43906301e8d611854e4e1cd8ab`)


    return resp.data.main.temp;

}

module.exports = {
    getClima
}