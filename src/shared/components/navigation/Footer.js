import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../../hooks/http-hook';

import './Footer.css';

const Footer = (props) => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedContacts, setLoadedContacts] = useState();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/api/contacts')
                setLoadedContacts(responseData.contacts[0]);               
                console.log(loadedServices)
            } catch(err){}
        };
        fetchContacts();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {!isLoading && loadedContacts && <div className='footer'>
               <div className='descriere'><b>ITP TIMISOARA &nbsp; - &nbsp; ITP SAG</b></div>
            </div>}

        </React.Fragment>
    );
}

export default Footer;