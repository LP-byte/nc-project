const axios = require('axios')



 function getPostcodes () {
    return axios.get('https://opendata.camden.gov.uk/resource/g3bz-7ur8.json')
    .then((res)=> {
        const areObJ = res.data.map(area => {
            const {postcode_1, postcode_2, county_code, county_name, local_authority_code,...restOfArea} = area
            restOfArea.postcode = restOfArea.postcode_3;
            restOfArea.authorityName = restOfArea.local_authority_name;
            const {postcode_3, local_authority_name,...finalAreaObj} = restOfArea
            return finalAreaObj
            
        })
        return areObJ
    })

    }

function pushPostcodes (areas) {

    const invokePostcodes = getPostcodes();
    console.log(invokePostcodes)

}

    module.exports = {getPostcodes, pushPostcodes}


