import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = (props) => {
    console.log("Service list props"+ props);
    return(
        <ul>
            {props.items.map(item => 
                <ServiceItem item={item}/>
            )}
        </ul>  
    );
}

export default ServiceList;