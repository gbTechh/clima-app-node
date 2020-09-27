const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion );
    
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }
               &key=AIzaSyDtME3vTv9S7kj893uNfQNeUiTKHv8ChUA`)

            if(resp.data.status == 'ZERO_RESULTS'){
                throw new Error(`No hay resultados para la ciudad ${direccion}`);
            }


            let location = resp.data.results[0];
            let lat = location.geometry.location['lat'];
            let lng = location.geometry.location['lng'];
            
            return {
                direccion: location.formatted_address,
                lat,
                lng
            }
}
module.exports = {
    getLugarLatLng
}