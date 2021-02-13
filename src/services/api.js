import {API_URL} from "../constants/AppConstants";

const getCountriesByContinentCode = async (continentCode,page)=>{
    let promise = await fetch(`${API_URL}/api/continents/${continentCode}/countries?page=${page}`);
    let response  = await promise.json();
    return response;
}

const getCountryDetailByCode = async (countryCode)=>{
    let promise = await fetch(`${API_URL}/api/countries/${countryCode}`);
    let response  = await promise.json();
    return response;
}

export  {
    getCountriesByContinentCode,
    getCountryDetailByCode
}


