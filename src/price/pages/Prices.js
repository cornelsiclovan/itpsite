import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../hooks/http-hook';
import PriceList from '../components/PriceList'

const Prices = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedServices, setLoadedServices] = useState();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/api/services')
               
                setLoadedServices(responseData.services);               
                console.log(loadedServices)
            } catch(err){}
        };
        fetchServices();
    }, [sendRequest]);



    return <React.Fragment>
         {!isLoading && loadedServices && <PriceList items={loadedServices}/>}
    </React.Fragment>

}

export default Prices;