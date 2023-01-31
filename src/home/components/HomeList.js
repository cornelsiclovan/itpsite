import React from 'react';

import HomeItem from './HomeItem';



const HomeList = props => {
    //console.log(props.items);

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
        <ul> 
            {props.items.map(item => 
                <li key={item._id}>{item.service_name}</li>
            )}
        </ul>
    );
}

export default HomeList;
