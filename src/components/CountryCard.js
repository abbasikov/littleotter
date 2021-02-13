import React from 'react';
import {Card} from "semantic-ui-react";
import { useHistory } from "react-router";

const CountryCard = (props)=>{

    const history = useHistory();

    const onCardClick = (data)=>{
        history.push(data.code.toLowerCase());
    }

    return (
        <Card onClick={()=>onCardClick(props)}>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
            </Card.Content>
        </Card>
    )
}

export default CountryCard;