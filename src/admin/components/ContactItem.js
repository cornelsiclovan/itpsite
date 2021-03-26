import React from 'react';
import Button from '../../FormElements/Button';

import './one.css'

const ContactItem = (props) => {

    return(
        <li>
            {props.item.tip_program} : 
            {props.item.deschidere} : 
            {props.item.inchidere} &nbsp;&nbsp;<br/>
            <Button to={`/editeaza_program/${props.item._id}`}>Edit</Button>
            <hr/>
        </li>
    );
}

export default ContactItem;