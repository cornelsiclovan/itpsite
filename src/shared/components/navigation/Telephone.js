import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../../hooks/http-hook';
import Avatar from '../UIElements/Avatar';
const BASE_URL=process.env.REACT_APP_BASE_URL;

import './Telephone.css'


const Telephone = (params) => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedContacts, setLoadedContacts] = useState();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/contacts`)
                setLoadedContacts(responseData.contacts[0]);               
                console.log("loadedContacts:", responseData.contacts[0])
            } catch(err){}
        };
        fetchContacts();
    }, [sendRequest]);


    
    return (
        <React.Fragment>
            <div className="center">
                <div className="telephone"> 
                    {!isLoading && loadedContacts &&
                    <a className="phone" href={`tel: ${loadedContacts.telefon}`}>
                        <img width="15"  src="/images/phone.png" alt="contact"/>
                        
                        &nbsp;<b>{loadedContacts.telefon}</b>
                    </a>
                    } 
                </div>
            </div>
        </React.Fragment>
    );
}

export default Telephone;