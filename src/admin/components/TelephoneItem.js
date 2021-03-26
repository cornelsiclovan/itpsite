import React from 'react';
import Button from '../../FormElements/Button';

import './one.css'

const TelephoneItem = (props) => {

    return(
        <li>
            {props.item.telefon}  <br/>
            <Button to={`/editeaza_telefon/${props.item.id}`}>Edit</Button>
            <hr/>
        </li>
    );
}

export default TelephoneItem;