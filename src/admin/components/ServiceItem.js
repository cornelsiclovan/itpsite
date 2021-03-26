import React from 'react';
import Button from '../../FormElements/Button';

import './one.css'

const ServiceItem = (props) => {

    return(
        <li>
            {props.item.service_name} &nbsp;&nbsp;
            <Button to={`/editeaza_servicii/${props.item._id}`}>Edit</Button>
            <hr/>
        </li>
    );
}

export default ServiceItem;