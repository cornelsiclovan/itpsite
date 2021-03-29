import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../hooks/http-hook';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Map from '../../shared/components/UIElements/Map'
import ServiceList from '../components/ServiceList';

const BASE_URL=process.env.REACT_APP_BASE_URL;

const ServiceEdit = () => {

    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedServices, setLoadedServices] = useState();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/items`)
                setLoadedServices(responseData.items);               
            } catch(err){}
        };
        fetchServices();
    }, [sendRequest]);

    return(
        <React.Fragment>
            {!isLoading && loadedServices && <ServiceList items={loadedServices}/>}
        </React.Fragment>
    )
}

export default ServiceEdit;