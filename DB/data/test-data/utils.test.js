const { expect } = require("chai");
const { request } = require("express");

const {getPostcodes, pushPostcodes} = require('../test-data/utils')

describe('pushPostcodes', ()=> {
    test('When function is passed with two arrays, the postcode from the first obj is pushed into an array in the second', ()=> {
        const areasWithPostcodesToPush = [{postcode: 'BB90DU', authorityName: 'Pendle'}]
        const areaToFill = [{area: 'Lancashire', districts: [{Name: 'Pendle', postcodes: []}],tier: 3}]
        expect (pushPostcodes(areasWithPostcodesToPush, areaToFill)).toBe([{area: 'Lancashire', districts: [{Name: 'Pendle', postcodes: ['BB90DU']}],tier: 3}])
    })
})