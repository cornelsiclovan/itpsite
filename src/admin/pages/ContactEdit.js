import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../hooks/http-hook';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Map from '../../shared/components/UIElements/Map'
import ContactList from '../components/ContactList';

const BASE_URL=process.env.REACT_APP_BASE_URL;

const ContactEdit = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedSchedule, setLoadedSchedule] = useState();
    const [loadedContacts, setLoadedContacts] = useState();


    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/programs`)
                setLoadedSchedule(responseData.programs);               
            } catch(err){}
        };

        const fetchContacts = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/contacts`)
                setLoadedContacts(responseData.contacts);               
            } catch(err){}
        };
        fetchSchedule();
        fetchContacts();
    }, [sendRequest]);

    return(
        <React.Fragment>
            {!isLoading && loadedSchedule &&loadedContacts && <ContactList items={loadedSchedule} contacts={loadedContacts}/>}
        </React.Fragment>
    );
}

export default ContactEdit;