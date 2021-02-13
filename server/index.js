const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const axios = require('axios');

const BASE_URL = "http://country.io";
const allowedEndpoints = ['continent', 'names', 'iso3', 'capital', 'phone', 'currency'];

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors({
    origin: 'http://localhost:3000'
}));

const getCountriesByContinentCode = (continentCode, continents, countries)=>{
    let filteredCountries = [];
    if(continentCode.toUpperCase() === 'ALL'){
        Object.keys(continents).forEach((key)=> {
            filteredCountries.push({
                key: key,
                text: countries[key],
                value: key
            })
        });
    }

    Object.keys(continents).forEach((key)=> {
        if(continents[key].toUpperCase() === continentCode){
            filteredCountries.push({
                key: key,
                text: countries[key],
                value: key
            })
        }
    });

    return filteredCountries;
}

const paginate = (array, limit, page) => {
    let newArr = [...array];
    let start = (page - 1) * limit;
    let end = page * limit;
    return newArr.slice(start, end);
}

app.get('/api/continents/:continentCode/countries', async (req, res) => {
    const continentCode = req.params.continentCode;
    let page = req.query.page || 1 ;
    let limit = req.query.limit || 20;
    res.setHeader('Content-Type', 'application/json');
    let standardReturnObj = {meta: {}, data: {}};
    let continentsResponse = await axios.get(`${BASE_URL}/continent.json`);
    let countriesResponse = await axios.get(`${BASE_URL}/names.json`);

    let countriesByContinentCode = getCountriesByContinentCode(continentCode,continentsResponse.data,countriesResponse.data);
    standardReturnObj.meta.page = page;
    standardReturnObj.meta.limit = limit;
    standardReturnObj.meta.total = countriesByContinentCode.length;
    standardReturnObj.data = paginate([...countriesByContinentCode], limit,page);
    res.send(standardReturnObj);
});

app.get('/api/countries/:countryCode', async (req, res) => {
    const countryCode = req.params.countryCode;
    let phoneResponse = await axios.get(`${BASE_URL}/phone.json`);
    let countriesNamesResponse = await axios.get(`${BASE_URL}/names.json`);
    let countriesIsoCodesResponse = await axios.get(`${BASE_URL}/iso3.json`);
    let capitalNamesResponse = await axios.get(`${BASE_URL}/capital.json`);
    let currenciesResponse = await axios.get(`${BASE_URL}/currency.json`);
    let continentResponse = await axios.get(`${BASE_URL}/continent.json`);
    res.setHeader('Content-Type', 'application/json');
    res.send({
        meta:{
            status:200,
            msg:'success'
        },
        data:{
            phoneCode:phoneResponse.data[countryCode.toUpperCase()],
            countryName:countriesNamesResponse.data[countryCode.toUpperCase()],
            isoCode:countriesIsoCodesResponse.data[countryCode.toUpperCase()],
            capitalName:capitalNamesResponse.data[countryCode.toUpperCase()],
            currencyCode:currenciesResponse.data[countryCode.toUpperCase()],
            continentCode:continentResponse.data[countryCode.toUpperCase()],
        }
    });
});


app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
