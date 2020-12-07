const axios = require('axios');
const { push } = require('./users');

const tierAreas = {areas: [

]


}

axios.get("https://opendata.camden.gov.uk/resource/g3bz-7ur8.json")
.then((result)=> {

            // adds areas to tierareas
            const removeDuplicates = result.data.filter((area, idx, same) =>
            idx === same.findIndex((a) => (
                a.county_name === area.county_name 
              )
            )) 
            const pushAreas = removeDuplicates.map(area => {
                return area.county_name
            })

            for (let i=0; i<pushAreas.length; i++) {
                if(pushAreas[i] !== '(pseudo) Scotland' && 
                   pushAreas[i] !== '(pseudo) England (UA/MD/LB)' && 
                   pushAreas[i] !== '(pseudo) England' && 
                   pushAreas[i] !== '(pseudo) Northern Ireland' && 
                   pushAreas[i] !== '(pseudo) Wales' 
                   ){
                tierAreas.areas.push({name: pushAreas[i], localAuthorites: []})
                }
            }
            //-------------------------
            // adds local authorities to areas
            const removeDuplicateAuthorities = result.data.filter((localAut, idx, same) =>
            idx === same.findIndex((la) => (
                localAut.local_authority_name === la.local_authority_name 
              )
            )) 
            const localAuthorityArr = removeDuplicateAuthorities.map(area => {
            
                for(let j = 0; j<tierAreas.areas.length; j++) {
                    
                    if(area.county_name === tierAreas.areas[j].name) {
                        tierAreas.areas[j].localAuthorites.push({name: area.local_authority_name, postcodes:[]})
                    }
                }
            });
            //---------------------------------
            //adds postcodes to localAuthority

            const addPostcodestoAuthority = result.data.map(area => {
                for(let k = 0; k<tierAreas.areas.length; k++) {
                    for(let l = 0; l<tierAreas.areas[k].localAuthorites.length; l++){
                        console.log(tierAreas.areas[k],areas.)
                    if(area.local_authority_name === tierAreas.areas[k].name){
                        tierAreas.areas[k].localAuthorites[l].postcodes.push(area.postcode_3)
                        }
                    }
                } 
            })





             


            

            console.log(tierAreas.areas[15].localAuthorites[1].postcodes)
           // console.log(result.data)
         
         
        
        

        
    

});
