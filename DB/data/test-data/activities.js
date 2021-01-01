module.exports  = [
                  {name: 'Eating In Restaurant', 
                   body: 'Currently in Englands tier system eating out at a restaurant or a pub is allowed in tiers 1 and 2...', 
                   indoorRules: {
                        
                        'tierOne': {
                            isAllowed: true,
                            mixedHouseholds: 2,
                            facemasks: false,
                            amountOfPeople: 6,
                            precautionary: false
                            },
                        
                        'tierTwo': {
                            isAllowed: true,
                            mixedHouseholds: 0,
                            facemasks: true,
                            amountOfPeople: 6,
                            precautionary: true
                            },
                        
                        'tierThree': {
                            isAllowed: false,                            
                            }
                        },

                        outdoorRules :{
                        'tierOne': {
                            isAllowed: true,
                            mixedHouseholds: 2,
                            facemasks: false,
                            amountOfPeople: 6,
                            precautionary: false


                        },
                        'tierTwo': {
                            isAllowed: true,
                            mixedHouseholds: 0,
                            facemasks: true,
                            amountOfPeople: 6,
                            precautionary: true,
                           
                        },
                        'tierThree': {
                            isAllowed: false,                            
                        }
                        }, 
                        
                        tags: [
                            'Eating Out', 
                            'Going out for a meal'
                        ]
                        }, 
                        {name: 'Watching Sporting Events', 
                         body: 'currently you can watch sport live at a venue or stadium if the local tier is at tier 1 or 2...',
                         indoorRules: {
                         'tierOne': {
                            isAllowed: true,
                            mixedHouseholds: 2,
                            facemasks: true,
                            amountOfPeople: 100,
                            precautionary: false
                         },
                         'tierTwo': {
                             isAllowed: true,
                             mixedHouseholds: 0,
                             facemasks: true,
                             ammountOfPeople: 100,
                             precautionary: true
                         },
                         'tierThree': {
                             isAllowed: false,
                         }
                         },
                         outdoorRules: {
                            'tierOne': {
                                isAllowed: true,
                                mixedHouseholds: 2,
                                facemasks: true,
                                amountOfPeople: 100,
                                precautionary: false
                             },
                             'tierTwo': {
                                 isAllowed: true,
                                 mixedHouseholds: 0,
                                 facemasks: true,
                                 ammountOfPeople: 100,
                                 precautionary: true
                             },
                             'tierThree': {
                                 isAllowed: false,
                             }
                             
                         }
                        
                        },
                    ]


                        console.log(activities)