import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../hooks/http-hook';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Map from '../../shared/components/UIElements/Map'
import PriceList from '../components/PriceList';

const BASE_URL=process.env.REACT_APP_BASE_URL;

const PriceEdit = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedServices, setLoadedServices] = useState();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/services`)
                setLoadedServices(responseData.services);               
            } catch(err){}
        };
        fetchServices();
    }, [sendRequest]);

    return(
        <React.Fragment>
            {!isLoading && loadedServices && <PriceList items={loadedServices} />}
        </React.Fragment>
    )
}

export default PriceEdit;  