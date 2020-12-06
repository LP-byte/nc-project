module.exports = [{name: 'Eating In Restaurant', 
                   body: 'Currently in Englands tier system eating out at a restaurant or a pub is allowed in tiers 1 and 2...', 
                        
                        indoorRules: {
                        'tier1': {
                            isAllowed: true,
                            mixedHouseholds: 2,
                            facemasks: false,

                        },
                        'tier2': {
                            isAllowed: true,
                            mixedHouseholds: 0,
                            facemasks: true,                             
                        },
                        'tier3': {
                            isAllowed: false,                            
                        }
                        },

                        outdoorRules :{
                        'tier1': {
                            isAllowed: true,
                            mixedHouseholds: 2,
                            facemasks: false,

                        },
                        'tier2': {
                            isAllowed: true,
                            mixedHouseholds: 0,
                            facemasks: true,                             
                        },
                        'tier3': {
                            isAllowed: false,                            
                        }
                        }, 
                        
                        tags: [
                            'Eating Out', 
                            'Going out for a meal'
                        ]


                }, {name: 'Watching Sporting Events'}]