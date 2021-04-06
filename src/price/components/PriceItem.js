import React from 'react';

import './PriceItem.css';
import Card from '../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';

const PriceItem = props => {
    return(
        <li className="price-item"> 
            <Card className="price-item__content">
                <Link to={`/${props.id}/pret`}>
                    <div className="price-item__image">
                        <Avatar image={props.image} alt={props.name}/>
                    </div>
                    <div className="price-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.price} {props.currency}</h3>
                        
                    </div>  
                </Link>
            </Card>
        </li>
        // <div className="card mb-3 mt-3 shadow-sm price-item">
        //     <div className="card-body  price-item__content">
        //         <Link to="/preturi">
        //                 <div className="price-item__image">
        //                     <Avatar image={props.image} alt={props.name}/>
        //                 </div>
        //                 <div className="price-item__info">
        //                     <h2>{props.name}</h2>
        //                     <h3>{props.price} {props.currency}</h3>
                            
        //                 </div>  
        //         </Link>
        //     </div>
        // </div>
    );
}   

export default PriceItem;