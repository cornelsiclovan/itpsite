import React from 'react';
import PriceItem from './PriceItem';

const PriceList = (props) => {

    return(
        <ul>
            {props.items.map(item => 
                <PriceItem item={item}/>
            )}
        </ul>  
    );
}

export default PriceList;