import React from 'react';
import {Card, Image} from "semantic-ui-react";
import { CURRENCY_HTML_CODES } from '../currencies';

const CountryCardDetail = (props)=>{
    let { countryName, capitalName, currencyCode,isoCode,phoneCode,continentCode } = props.countryDetail;
    let flagSrc = `https://www.countryflags.io/${props.countryCode}/shiny/64.png`;
    let symbol = CURRENCY_HTML_CODES[currencyCode];
    let wikiLink = `https://en.wikipedia.org/wiki/${countryName}`;
    return (
        <Card centered={true}>
            <Image src={flagSrc} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{countryName}</Card.Header>
                <Card.Meta>
                    <span className='date'>Capital: {capitalName}</span>
                </Card.Meta>
                <Card.Description>
                    <strong>ContinentCode:</strong> {continentCode}<br/>
                    <strong>CurrencyCode:</strong> {currencyCode}<br/>
                    <strong>CurrencySymbol:</strong> <span dangerouslySetInnerHTML={{ __html: symbol }} /><br/>
                    <strong>IsoCode:</strong> {isoCode}<br/>
                    <strong>PhoneCode:</strong> {phoneCode}<br/>
                    <a rel="noreferrer" href={wikiLink} target='_blank'>Wiki</a>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default CountryCardDetail;