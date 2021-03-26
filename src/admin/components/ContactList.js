import React from 'react';
import ContactItem from './ContactItem';
import TelephoneItem from './TelephoneItem';


const ContactList = (props) => {

    return(
        <div>
        <ul>
            {props.items.map(item => 
                <ContactItem item={item}/>
            )}
        </ul>  
        <ul>
            {props.contacts.map(item => 
                <TelephoneItem item={item}/>
            )}
        </ul>  
    </div>
    );
}

export default ContactList;