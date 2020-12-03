const axios = require('axios');
const {matchPostcodes} = require('../test-data/utils')
const {getPostcodes} = require('../test-data/utils')

console.log(getPostcodes())


module.exports = [
{
    area: 'North Yorkshire',
    districts: [
        {Name: 'Craven', postcodes: []},
        {Name: 'Richmondshire', postcodes: []},
        {Name: 'Harrogate', postcodes: []},
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
]