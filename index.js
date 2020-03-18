const axios = require("axios")


axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=17222+Von+Karman+Irvine+CA&key=").then(value =>{
    //JSON.stringify(value)
    console.log(value.data.results[0].address_components)
})
.catch(error =>{
    console.log(error)
})
