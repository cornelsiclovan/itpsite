import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../hooks/http-hook';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Map from '../../shared/components/UIElements/Map'

import './Contact.css'

const Contact = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedSchedule, setLoadedSchedule] = useState();

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/api/programs')
                setLoadedSchedule(responseData.programs);               
            } catch(err){}
        };
        fetchSchedule();
    }, [sendRequest]);
    
    const coordinates =
    {
        lat: 45.654435208506925,
        lng:  21.17499979985493
    }

    return <React.Fragment>
        <div className="map-container">
            <Map center={coordinates} zoom={16}/>
            {
                !isLoading && loadedSchedule &&
                <ul className="contact-list">
                    <li className="contact-item"> 
                    <Card className="price-item__content">
                        <Link to="">
                            <div className="price-item__image">
                                <Avatar image="/images/calendar.jpg" alt="contact"/>
                            </div>
                            <div className="price-item__info">
                                <center>
                                <h2><b>PROGRAM</b></h2></center>
                                <h5> {loadedSchedule[0].tip_program} : {loadedSchedule[0].deschidere} - {loadedSchedule[0].inchidere}</h5>
                                <h5> {loadedSchedule[1].tip_program} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {loadedSchedule[1].deschidere} - {loadedSchedule[1].inchidere}</h5>      
                                
                            </div>  
                        </Link>
                    </Card>
                    </li>
                </ul>
            }
        </div>
    </React.Fragment>
};

export default Contact;
