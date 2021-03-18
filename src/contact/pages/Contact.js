import React from 'react';
import Map from '../../shared/components/UIElements/Map'

import './Contact.css'

const Contact = () => {
    const coordinates =
    {
        lat: 45.654435208506925,
        lng:  21.17499979985493
    }

    return <React.Fragment>
        <div className="map-container">
            <Map center={coordinates} zoom={16}/>
        </div>
    </React.Fragment>
};

export default Contact;

