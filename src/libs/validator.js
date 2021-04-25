const lodash = require('lodash')

module.exports = {
    verifyBody(body, arrayToVerify){
        let isVerify = true;
        arrayToVerify.forEach((item) => {
            if(lodash.has(body, item) == false) isVerify =  false;
        })
        return isVerify;
    },

    require(field, minLeng) {
        if(field == '' || field.leng() < minLeng) return `El campo ${field} no cumple con el minimo establecido\n`;
        return ''; 
    }
}