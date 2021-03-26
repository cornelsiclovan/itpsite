import React from 'react';
import Button from '../../FormElements/Button';

import './one.css'

const PriceItem = (props) => {

    return(
        <li>
            {props.item.name} : 
            {props.item.price} : 
            {props.item.currency} :
            {props.item.image} &nbsp;&nbsp;<br/>
            <Button to={`/editeaza_preturi/${props.item._id}`}>Edit</Button>
            <hr/>
        </li>
    );
}

export default PriceItem;