import React from 'react';

import PriceItem from './PriceItem';
import Card from '../../shared/components/UIElements/Card';
import "./PriceList.css";



const PriceList = props => {
    console.log(props.items);

    if(props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No services found</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="price-list"> 
            {props.items.map(service => 
                <PriceItem 
                    key={service.id}
                    id ={service.id}
                    name={service.name}
                    image={service.image}
                    price={service.price}
                    currency={service.currency}
                />)
            }
        </ul>
    );
}

export default PriceList;