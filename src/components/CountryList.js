import React from 'react';
import { Card } from "semantic-ui-react";
import CountryCard from "./CountryCard";

export const CountryList = (props)=>{
    const getCountryList = ()=>{
        return props.countries.map(country=>{
            return (
                <CountryCard code={country.value} name={country.text} key={country.key}/>
            )
        })
    }

    return (
        <Card.Group itemsPerRow={4}>
            {
                props.countries.length > 0 ? getCountryList() : null
            }

        </Card.Group>
    )
}