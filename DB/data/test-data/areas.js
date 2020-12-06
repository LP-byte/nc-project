const axios = require('axios');



const Areas = [
{
    area: 'North Yorkshire',
    districts: [

],
tier: 'tier2'

}]


axios.get("https://opendata.camden.gov.uk/resource/g3bz-7ur8.json")
.then((result)=> {


    for(i=0; i<result.data.length; i++) {
        
        for(j=0; j<Areas.length; j++){
            if (result.data[i].county_name === Areas[j].area){
               Areas[j].districts.push({name: result.data[i].local_authority_name, postcodes: [result.data[i].postcode_1]})
            }
        }
    }    
/*
    for (let k=0; k<Areas.length;k++){
        Areas[k].districts = Areas[k].districts.filter((area, idx, same) =>
        idx === same.findIndex((a) => (
            a.name === area.name 
          ))
        )
    }
 */   
    console.log(Areas[0].districts)
});










/*


const Areas = [
{
    area: 'North Yorkshire',
    districts: [
        {Name: 'Craven', postcodes: []},
        {Name: 'Richmondshire', postcodes: []},
        {Name: 'Harrogate', postcodes: ['YIO 475']},
        {Name: 'Hambleton', postcodes: []},
        {Name: 'Ryedale', postcodes: []},
        {Name: 'Scarborough', postcodes: []},
        {Name: 'Selby', postcodes: []}
],
tier: 2

},
{
    area: 'Kent', 
    districts: [
        {name: 'Folkestone and Hythe', postcodes: []},
        {name: 'Dover', postcodes: []},
        {name: 'Thanet', postcodes: []},
        {name: 'Canterbury', postcodes: []},
        {name: 'Ashford', postcodes: []},
        {name: 'Tunbridge Wells', postcodes: []},
        {name: 'Maidstone', postcodes: []},
        {name: 'Swale', postcodes: []},
        {name: 'Tonbridge & Malling', postcodes: []},
        {name: 'Sevenoaks', postcodes: []},
        {name: 'Dartford', postcodes: []},
        {name: 'Gavesham', postcodes: []},
],
    tier: 3
},

{
    area: 'Cornwall and Isles of Scilly', 
    districts: [
        {name:'Cornwall and Isles of Scilly', postcodes: []}
    ],
    tier: 1
}
]*/